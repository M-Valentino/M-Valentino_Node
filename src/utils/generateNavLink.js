import { PAGE_TITLES } from "@/consts/pageTitles";

export const generateNavLink = (navtext, externalLink) => {
  if (navtext === PAGE_TITLES.home) {
    return "/";
  } else if (externalLink) {
    return externalLink;
  } else {
    return `/${navtext.toLowerCase()}`;
  }
};
