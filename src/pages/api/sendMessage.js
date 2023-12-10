import { kv } from "@vercel/kv";
import nextBase64 from "next-base64";
import { verifyHcaptchaToken } from "verify-hcaptcha";
import {
  checkEmailInvalid,
  checkEmailTooLong,
  checkHasGibberish,
  checkMessageInvalid,
  checkMessageTooLong,
  checkMessageTooShort,
} from "@/utils/validations";

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

/**
 * This handles adding a message sent from the contact form to the list of
 * emails in the redis db. It does the same form validations as the frontend
 * and handles verifying the hCaptcha token sent.
 * @param {*} request
 * @param {*} response
 * @returns response.status(200) with a message of success or fail.
 */
export default async function handler(request, response) {
  const { method } = request;

  const token = request.query.token;
  const tokenVerified = (async () => {
    const result = await verifyHcaptchaToken({
      token: token,
      secretKey: process.env.HCAPTCHA_SECRET,
      siteKey: process.env.HCAPTCHA_SITE_KEY,
    });

    if (result.success) {
      return true;
    }
    return false;
  })();

  const email = nextBase64.decode(request.query.email);
  const message = nextBase64.decode(request.query.message);
  const previousMail = await kv.lindex("emails", 0);
  const previousTimestamp = parseInt(
    previousMail.substring(previousMail.lastIndexOf("␟") + 1)
  );
  const now = Date.now();
  const timeDifference = now - previousTimestamp;
  const currentMailSubStr = `${email}␟${message}`;

  if (
    method === "PUT" &&
    tokenVerified &&
    /**
     * I expect the contact form to be used maybe once every few days.
     * Maybe ocaisionally people might forget to include
     * something in their message and send something shortly after.
     */
    timeDifference > 15000 &&
    // Includes the same validations the frontent does.
    !checkEmailInvalid(email) &&
    !checkEmailTooLong(email) &&
    !checkHasGibberish(message) &&
    !checkMessageInvalid(message) &&
    !checkMessageTooLong(message) &&
    !checkMessageTooShort(message) &&
    // For preventing the same message from being sent.
    !previousMail.includes(currentMailSubStr)
  ) {
    kv.lpush("emails", `${currentMailSubStr}␟${Date.now()}`);
    return response.status(200).json({ message: "success" });
  }
  // Rate limit
  await sleep(10000);
  return response.status(400).json({ message: "fail" });
}
