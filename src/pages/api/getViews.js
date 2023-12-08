import { kv } from "@vercel/kv";
import { BLOG_POSTS_NO_COMPONENT } from "../blog";
import { formatForRedisKey } from "@/utils/linkFunctions";

/**
 * Function to get number of views associated with a blog post and
 * increment them. The query validates if a title exists so that extra keys don't
 * get written to the redis db.
 */
export default async (request, response) => {
  const title = formatForRedisKey(request.query.title);
  const checkIfTitleExists = (obj) =>
    formatForRedisKey(obj.title) === title;
  if (BLOG_POSTS_NO_COMPONENT.some(checkIfTitleExists)) {
    const views = await kv.incr(`${title}_views`);
    return response.status(200).json(Intl.NumberFormat("en-us").format(views));
  }
  return response.status(500);
};
