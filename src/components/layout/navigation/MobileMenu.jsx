import React, {useState} from "react";
import { Divider, IconButton, Menu } from "@mui/material/";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { MINUTE_SHADOW_SVG } from "@/consts/stylingValues";
import { PAGE_TITLES } from "@/consts/pageTitles";
import { MobileNavItem } from "./MobileNavItem";

export const MobileMenu = ({activeLink}) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
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
            style={{ filter: MINUTE_SHADOW_SVG }}
          />
        ) : (
          <MenuIcon
            color="primary"
            fontSize="large"
            style={{ filter: MINUTE_SHADOW_SVG }}
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
        style={{ textDecoration: "none" }}
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
        <Divider />
        <MobileNavItem externalLink itemTextAndOrLink={PAGE_TITLES.gitHub} />
        <MobileNavItem externalLink itemTextAndOrLink={PAGE_TITLES.linkedIn} />
      </Menu>
      {/* For creating spacing below the navbar during mobile view. */}
      <div style={{ width: "100%", height: 15 }}></div>
    </>
  );
};
