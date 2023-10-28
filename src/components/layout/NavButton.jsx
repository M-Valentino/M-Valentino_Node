import React from "react";
import Link from "next/link";
import { Button } from "@mui/material";
import { PAGE_TITLES } from "@/consts/pageTitles";

export const NavButton = ({
  activeLink,
  buttonTextAndOrLink,
  children,
  externalLink,
}) => {
  const generateLink = () => {
    if (buttonTextAndOrLink === PAGE_TITLES.home) {
      return "/";
    } else if (externalLink) {
      return externalLink;
    } else {
      return `/${buttonTextAndOrLink.toLowerCase()}`;
    }
  };
  return (
    <Button
      color={activeLink === buttonTextAndOrLink ? "primary" : "secondary"}
      style={{ fontSize: 18 }}
      LinkComponent={Link}
      href={generateLink()}
      target={externalLink ? "_blank" : ""}
      rel={externalLink ? "noopener noreferrer" : ""}
    >
      {children}
      {buttonTextAndOrLink}
    </Button>
  );
};
