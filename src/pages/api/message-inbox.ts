import { kv } from "@vercel/kv";
import nextBase64 from "next-base64";
import type { NextApiRequest, NextApiResponse } from "next";

const sleep = (ms: number): Promise<void> =>
  new Promise((resolve) => setTimeout(resolve, ms));

/**
 * API function to return messages users sent.
 * @param {*} request
 * @param {*} response
 * @returns saved messages in the kv database in the specified range.
 */
export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
): Promise<void> {
  const { headers, method } = request;
  const numberOfMessages = request.query.numberOfMessages as string;
  // For slowing down anyone trying to brute force hack.
  await sleep(1500);
  if (
    method === "GET" &&
    nextBase64.decode(headers.authorization) === process.env.ADMIN_PASSWORD
  ) {
    const messages = await kv.lrange(
      "emails",
      0,
      parseInt(numberOfMessages, 10)
    );
    return response.status(200).json({ message: messages });
  }
  // Rate limit
  await sleep(10000);
  return response.status(401).json({ message: "fail" });
}
