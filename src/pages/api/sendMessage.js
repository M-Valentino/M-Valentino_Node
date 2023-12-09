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


export default function handler(request, response) {
  const email = nextBase64.decode(request.query.email);
  const message = nextBase64.decode(request.query.message);
  if (
    !checkEmailInvalid(email) &&
    !checkEmailTooLong(email) &&
    !checkHasGibberish(message) &&
    !checkMessageInvalid(message) &&
    !checkMessageTooLong(message) &&
    !checkMessageTooShort(message)
  ) {
    kv.lpush("emails", `${email}␟${message}␟${Date.now()}`)
    return response.status(200).json({ message: "success" });
  }
  return response.status(500);
}
