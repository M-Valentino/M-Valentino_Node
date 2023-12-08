export const getViews = async (title) => {
  if (title) {
    const response = await fetch(`/api/getViews?title=${title}`);
    const views = await response.json();
    console.log(`${JSON.stringify(views)} views`);
    // return `${JSON.stringify(views)} views`;
    return views;
  }
  return "";
};
