import { kv } from "@vercel/kv";
import {
  checkEmailInvalid,
  checkEmailTooLong,
  checkHasGibberish,
  checkMessageInvalid,
  checkMessageTooLong,
  checkMessageTooShort,
} from "@/utils/validations";

// /api/sendMessage?email=fds&message=hi
export default function handler(request, response) {
  if (request.method === "PUT") {
    const email = atob(request.query.email);
    const message = atob(request.query.message);
    if (
      !checkEmailInvalid(email) &&
      !checkEmailTooLong(email) &&
      !checkHasGibberish(message) &&
      !checkMessageInvalid(message) &&
      !checkMessageTooLong(message) &&
      !checkMessageTooShort(message)
    ) {
      kv.json.arrappend
      return response.status(200).json({ message: "success" });
    }
  } else {
    return response.status(200).json({ message: "invalid access" });
  }
}
