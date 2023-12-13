import React, { useState } from "react";
import { Divider, IconButton, Menu } from "@mui/material/";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { SHADOWS, Z_INDEX_ORDER } from "@/consts/stylingValues";
import { PAGE_TITLES } from "@/consts/pageTitles";
import { MobileNavItem } from "./MobileNavItem";

export const MobileMenu = ({ activeLink }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <span id="mobileMenu">
      <IconButton
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        style={{ position: "absolute", top: 0, right: 0 }}
      >
        {open ? (
          <CloseIcon
            color="primary"
            fontSize="large"
            style={{ filter: SHADOWS.minuteSVG }}
          />
        ) : (
          <MenuIcon
            color="primary"
            fontSize="large"
            style={{ filter: SHADOWS.minuteSVG }}
          />
        )}
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        style={{ textDecoration: "none", zIndex: Z_INDEX_ORDER.mobileNavMenu }}
      >
        <MobileNavItem
          activeLink={activeLink}
          itemTextAndOrLink={PAGE_TITLES.home}
        />
        <MobileNavItem
          activeLink={activeLink}
          itemTextAndOrLink={PAGE_TITLES.projects}
        />
        <MobileNavItem
          activeLink={activeLink}
          itemTextAndOrLink={PAGE_TITLES.blog}
        />
        <MobileNavItem
          activeLink={activeLink}
          itemTextAndOrLink={PAGE_TITLES.portfolio}
        />
        <MobileNavItem
          activeLink={activeLink}
          itemTextAndOrLink={PAGE_TITLES.contact}
        />
        <Divider />
        <MobileNavItem externalLink itemTextAndOrLink={PAGE_TITLES.gitHub} />
        <MobileNavItem externalLink itemTextAndOrLink={PAGE_TITLES.linkedIn} />
      </Menu>
    </span>
  );
};
