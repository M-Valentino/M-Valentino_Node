import { kv } from "@vercel/kv";
import nextBase64 from "next-base64";
import {
  checkEmailInvalid,
  checkEmailTooLong,
  checkHasGibberish,
  checkMessageInvalid,
  checkMessageTooLong,
  checkMessageTooShort,
} from "@/utils/validations";

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export default async function handler(request, response) {
  // Prevents the same message from being sent
  const previousMail = await kv.lindex("emails", 0);
  const previousTimestamp = parseInt(
    previousMail.substring(previousMail.lastIndexOf("␟") + 1)
  );
  const now = Date.now();
  const timeDifference = now - previousTimestamp;
  const { method } = request;
  const email = nextBase64.decode(request.query.email);
  const message = nextBase64.decode(request.query.message);
  const currentMailSubStr = `${email}␟${message}`;

  if (
    timeDifference > 20000 &&
    !checkEmailInvalid(email) &&
    !checkEmailTooLong(email) &&
    !checkHasGibberish(message) &&
    !checkMessageInvalid(message) &&
    !checkMessageTooLong(message) &&
    !checkMessageTooShort(message) &&
    !previousMail.includes(currentMailSubStr) &&
    method === "PUT"
  ) {
    await sleep(1000);
    kv.lpush("emails", `${currentMailSubStr}␟${Date.now()}`);
    return response.status(200).json({ message: "success" });
  } else {
    await sleep(10000);
  }

  return response.status(200).json({ message: "fail" });
}
