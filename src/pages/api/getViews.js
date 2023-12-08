import { kv } from "@vercel/kv";
import { BLOG_POSTS_NO_COMPONENT } from "../blog";
import { removeSpaces } from "@/utils/linkFunctions";

/**
 * Function to get number of views associated with a blog post.
 * The query validates if a title exists so that extra keys don't
 * get written to the redis db.
 */
export default async (request, response) => {
  // It is hard to query in Redis CLI if keys have spaces
  const title = removeSpaces(request.query.title);
  const checkIfTitleExists = (obj) =>
    removeSpaces(obj.title) === title;
  if (BLOG_POSTS_NO_COMPONENT.some(checkIfTitleExists)) {
    const views = await kv.incr(`${title}_views`);
    return response.status(200).json(Intl.NumberFormat("en-us").format(views));
  }
  return response.status(500);
};
