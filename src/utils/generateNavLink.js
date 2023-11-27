import { PAGE_TITLES } from "@/consts/pageTitles";

export const generateNavLink = (navtext) => {
  switch (navtext) {
    case PAGE_TITLES.home:
      return "/";
    case PAGE_TITLES.gitHub:
      return "https://github.com/M-Valentino";
    case PAGE_TITLES.linkedIn:
      return "https://www.linkedin.com/in/mark-valentino";
    default:
      return `/${navtext.toLowerCase()}`;
  }
};
