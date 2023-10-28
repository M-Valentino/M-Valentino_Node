import React from "react";
import Link from "next/link";
import { MenuItem } from "@mui/material";
import { generateNavLink } from "@/utils/generateNavLink";
import { MUI_PRIMARY_COLOR_DEEP_ORANGE } from "@/consts/stylingValues";

export const MobileNavItem = ({
  activeLink,
  externalLink,
  itemTextAndOrLink,
}) => {
  return (
    <Link
      href={generateNavLink(itemTextAndOrLink, externalLink)}
      style={{
        textDecoration: "none",
        color:
          activeLink === itemTextAndOrLink
            ? MUI_PRIMARY_COLOR_DEEP_ORANGE
            : "#000",
      }}
      target={externalLink ? "_blank" : ""}
      rel={externalLink ? "noopener noreferrer" : ""}
    >
      <MenuItem>{itemTextAndOrLink}</MenuItem>
    </Link>
  );
};
