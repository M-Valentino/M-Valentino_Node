import React from "react";
import Link from "next/link";
import {
  Button,
  IconButton,
  Menu,
  MenuItem,
  useMediaQuery,
} from "@mui/material/";
import MenuIcon from "@mui/icons-material/Menu";
import GitHubIcon from "@mui/icons-material/GitHub";
import {
  MINUTE_SHADOW_SVG,
  MUI_PRIMARY_COLOR_DEEP_ORANGE,
} from "@/consts/stylingValues";
import { PAGE_TITLES } from "@/consts/pageTitles";

// This component is the main navbar of the site.
const NavBar = (props) => {
  // The index of the button to change color to show it is the active link.
  const { activeLink } = props;
  const isDesktopView = useMediaQuery("(min-width:1200px)");
  const isMobileView = useMediaQuery("(max-width:712px)");
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
            <Link
              href="/"
              style={{
                textDecoration: "none",
                color:
                  activeLink === PAGE_TITLES.home
                    ? MUI_PRIMARY_COLOR_DEEP_ORANGE
                    : "#000",
              }}
            >
              <MenuItem>{PAGE_TITLES.home}</MenuItem>
            </Link>
            <Link
              href="/projects"
              style={{
                textDecoration: "none",
                color:
                  activeLink === PAGE_TITLES.projects
                    ? MUI_PRIMARY_COLOR_DEEP_ORANGE
                    : "#000",
              }}
            >
              <MenuItem>{PAGE_TITLES.projects}</MenuItem>
            </Link>
            <Link
              href="/blog"
              style={{
                textDecoration: "none",
                color:
                  activeLink === PAGE_TITLES.blog
                    ? MUI_PRIMARY_COLOR_DEEP_ORANGE
                    : "#000",
              }}
            >
              <MenuItem>{PAGE_TITLES.blog}</MenuItem>
            </Link>
            <Link
              href="https://github.com/M-Valentino"
              style={{ textDecoration: "none", color: "#000" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MenuItem>GitHub</MenuItem>
            </Link>
          </Menu>
          {/* For creating spacing below the navbar during mobile view. */}
          <div style={{ width: "100%", height: 15 }}></div>
        </>
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            maxWidth: 500,
            margin: "auto",
          }}
        >
          <Button
            color={activeLink === PAGE_TITLES.home ? "primary" : "secondary"}
            style={{ fontSize: 18 }}
            LinkComponent={Link}
            href="/"
          >
            {PAGE_TITLES.home}
          </Button>
          <Button
            color={
              activeLink === PAGE_TITLES.projects ? "primary" : "secondary"
            }
            style={{ fontSize: 18 }}
            LinkComponent={Link}
            href="/projects"
          >
            {PAGE_TITLES.projects}
          </Button>
          <Button
            color={activeLink === PAGE_TITLES.blog ? "primary" : "secondary"}
            style={{ fontSize: 18 }}
            LinkComponent={Link}
            href="/blog"
          >
            {PAGE_TITLES.blog}
          </Button>
          <Button
            color="secondary"
            style={{ fontSize: 18 }}
            LinkComponent={Link}
            href="https://github.com/M-Valentino"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon
              style={{ transform: "translateY(-3px)", marginRight: 2 }}
            />
            GitHub
          </Button>
        </div>
      )}
    </div>
  );
};
export default NavBar;
