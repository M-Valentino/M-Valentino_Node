import React from "react";
import Link from "next/link";
import { Button } from "@mui/material";
import { generateNavLink } from "@/utils/generateNavLink";

export const NavButton = ({
  activeLink,
  buttonTextAndOrLink,
  children,
  externalLink,
}) => {
  return (
    <Button
      color={activeLink === buttonTextAndOrLink ? "primary" : "secondary"}
      style={{ fontSize: 18 }}
      LinkComponent={Link}
      href={generateNavLink(buttonTextAndOrLink)}
      target={externalLink ? "_blank" : ""}
      rel={externalLink ? "noopener noreferrer" : ""}
    >
      {children}
      {buttonTextAndOrLink}
    </Button>
  );
};
