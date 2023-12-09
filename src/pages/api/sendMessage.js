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

    const email = request.query.email;
    const message = request.query.message;
    if (
      !checkEmailInvalid(email) &&
      !checkEmailTooLong(email) &&
      !checkHasGibberish(message) &&
      !checkMessageInvalid(message) &&
      !checkMessageTooLong(message) &&
      !checkMessageTooShort(message)
    ) {
      console.log(email)
      return response.status(200).json({ message: "success" });
    }
   else {
    return response.status(200).json({ message: email });
  }
}
