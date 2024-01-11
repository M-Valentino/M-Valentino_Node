import React from "react";
import Link from "next/link";
import { Button } from "@mui/material";
import { generateNavLink } from "../../../utils/linkFunctions";

export const NavButton = (props) => {
  const { activeLink, buttonTextAndOrLink, children, externalLink, events } =
    props;
  return (
    <Button
      color={activeLink === buttonTextAndOrLink ? "primary" : "secondary"}
      style={{ fontSize: 18 }}
      LinkComponent={Link}
      href={generateNavLink(buttonTextAndOrLink)}
      target={externalLink ? "_blank" : ""}
      rel={externalLink ? "noopener noreferrer" : ""}
      {...events}
    >
      {children}
      {buttonTextAndOrLink}
    </Button>
  );
};
