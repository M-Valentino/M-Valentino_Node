import { PROJECT_CONTENT } from "@/consts/projectContent";

export const filterProjectMatchingTitle = (projectTitle) => {
  var result = PROJECT_CONTENT.filter(obj => {
    return obj.title === projectTitle;
  });
  return result;
}
