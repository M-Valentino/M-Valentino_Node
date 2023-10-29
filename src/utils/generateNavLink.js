import { PAGE_TITLES } from "@/consts/pageTitles";

export const generateNavLink = (navtext) => {
  if (navtext === PAGE_TITLES.home) {
    return "/";
  } else if (navtext === PAGE_TITLES.gitHub) {
    return "https://github.com/M-Valentino";
  } else {
    return `/${navtext.toLowerCase()}`;
  }
};
