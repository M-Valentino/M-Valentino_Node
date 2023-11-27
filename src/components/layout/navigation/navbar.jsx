import React from "react";
import Link from "next/link";
import {
  Button,
  Divider,
  IconButton,
  Menu,
  useMediaQuery,
} from "@mui/material/";
import MenuIcon from "@mui/icons-material/Menu";
import UseAnimations from "react-useanimations";
import github from "react-useanimations/lib/github";
import linkedin from "react-useanimations/lib/linkedin";
import {
  MINUTE_SHADOW_SVG,
  MUI_SECONDARY_COLOR_GRAY,
} from "@/consts/stylingValues";
import { PAGE_TITLES } from "@/consts/pageTitles";
import { NavButton } from "./NavButton";
import { MobileNavItem } from "./MobileNavItem";

// This component is the main navbar of the site.
const NavBar = (props) => {
  // The index of the button to change color to show it is the active link.
  const { activeLink } = props;
  const isDesktopView = useMediaQuery("(min-width:1200px)");
  const isMobileView = useMediaQuery("(max-width:876px)");
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div style={{ marginBottom: 50 }}>
      {/* For giving the logo touch ripple effects */}
      <Button
        style={{
          padding: 0,
          position: "absolute",
          top: 5,
          left: isDesktopView ? 50 : 5,
        }}
      >
        <div
          style={{
            width: 115,
          }}
        >
          <Link href="/">
            <img
              alt="Mark Valentino logo"
              src="/mark-valentino-logo.svg"
              style={{
                width: "100%",
                filter: MINUTE_SHADOW_SVG,
              }}
            />
          </Link>
        </div>
      </Button>

      {isMobileView ? (
        <>
          <IconButton
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            style={{ position: "absolute", top: 0, right: 0 }}
          >
            <MenuIcon
              color="primary"
              fontSize="large"
              style={{ filter: MINUTE_SHADOW_SVG }}
            />
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
            <MobileNavItem
              externalLink
              itemTextAndOrLink={PAGE_TITLES.gitHub}
            />
            <MobileNavItem
              externalLink
              itemTextAndOrLink={PAGE_TITLES.linkedIn}
            />
          </Menu>
          {/* For creating spacing below the navbar during mobile view. */}
          <div style={{ width: "100%", height: 15 }}></div>
        </>
      ) : (
        <>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              width: 380,
              margin: "auto",
            }}
          >
            <NavButton
              activeLink={activeLink}
              buttonTextAndOrLink={PAGE_TITLES.home}
            />
            <NavButton
              activeLink={activeLink}
              buttonTextAndOrLink={PAGE_TITLES.projects}
            />
            <NavButton
              activeLink={activeLink}
              buttonTextAndOrLink={PAGE_TITLES.blog}
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: 240,
              position: "absolute",
              top: 0,
              right: isDesktopView ? 50 : 5,
            }}
          >
            {/* Wrapping NavButton inside UseAnimations ensures that
             the animation plays when hovering on the button. */}
            <UseAnimations
              animation={linkedin}
              size={30}
              wrapperStyle={{ transform: "translate(-1px, -4.8px)" }}
              strokeColor={MUI_SECONDARY_COLOR_GRAY}
              render={(eventProps, animationProps) => (
                <NavButton
                  externalLink
                  buttonTextAndOrLink={PAGE_TITLES.linkedIn}
                  events={eventProps}
                >
                  <div {...animationProps} />
                </NavButton>
              )}
            />
            <UseAnimations
              animation={github}
              size={30}
              wrapperStyle={{ transform: "translateY(-4px)" }}
              strokeColor={MUI_SECONDARY_COLOR_GRAY}
              render={(eventProps, animationProps) => (
                <NavButton
                  externalLink
                  buttonTextAndOrLink={PAGE_TITLES.gitHub}
                  events={eventProps}
                >
                  <div {...animationProps} />
                </NavButton>
              )}
            />
          </div>
        </>
      )}
    </div>
  );
};
export default NavBar;
