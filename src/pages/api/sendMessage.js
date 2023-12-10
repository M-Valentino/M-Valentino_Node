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

const sleep = ms => new Promise(
  resolve => setTimeout(resolve, ms));

export default async function handler(request, response) {
  // Prevents the same message from being sent
const previousMail = await kv.lindex("emails", 0);
  const { method } = request;
  const email = nextBase64.decode(request.query.email);
  const message = nextBase64.decode(request.query.message);
  const currentMailSubStr = `${email}␟${message}`;

  if (
    !checkEmailInvalid(email) &&
    !checkEmailTooLong(email) &&
    !checkHasGibberish(message) &&
    !checkMessageInvalid(message) &&
    !checkMessageTooLong(message) &&
    !checkMessageTooShort(message) &&
    !previousMail.includes(currentMailSubStr) &&
    method === "PUT"
  ) {
    console.log(previousMail);
    await sleep(1500);
    kv.lpush("emails", `${currentMailSubStr}␟${Date.now()}`);
    return response.status(200).json({ message: "success" });
  }
  return response.status(500);
}
