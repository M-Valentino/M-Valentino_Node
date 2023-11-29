import React from "react";
import Link from "next/link";
import { MenuItem } from "@mui/material";
import { generateNavLink } from "@/utils/linkFunctions";
import { MUI_PRIMARY_COLOR_DEEP_ORANGE } from "@/consts/stylingValues";

/**
 * This componenet is for an individual item in the mobile navigation menu.
 * @param {*} activeLink the current name of the page the user is currently on.
 * @param {*} externalLink a link that is not inside the website.
 * @param {*} itemTextAndOrLink the item text to display and for the generated link.
 * @returns component
 */
export const MobileNavItem = ({
  activeLink,
  externalLink,
  itemTextAndOrLink,
}) => {
  return (
    <Link
      href={generateNavLink(itemTextAndOrLink)}
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
