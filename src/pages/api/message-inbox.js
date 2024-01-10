import { kv } from "@vercel/kv";
import nextBase64 from "next-base64";

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

/**
 * API function to return messages users sent.
 * @param {*} request 
 * @param {*} response 
 * @returns saved messages in the kv database in the specified range.
 */
export default async function handler(request, response) {
  const { headers, method } = request;
  const numberOfMessages = request.query.numberOfMessages;
  // For slowing down anyone trying to brute force hack.
  await sleep(1500);
  if (
    method === "GET" &&
    nextBase64.decode(headers.authorization) === process.env.ADMIN_PASSWORD
  ) {
    const messages = await kv.lrange("emails", 0, numberOfMessages);
    return response.status(200).json({ message: messages });
  }
  // Rate limit
  await sleep(10000);
  return response.status(401).json({ message: "fail" });
}
