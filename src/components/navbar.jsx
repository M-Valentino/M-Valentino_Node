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
  MOBILE_MENU_ITEM_STYLE,
} from "@/consts/stylingValues";

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
          >
            <Link href="/" style={MOBILE_MENU_ITEM_STYLE}>
              <MenuItem>Home</MenuItem>
            </Link>
            <Link href="/projects" style={MOBILE_MENU_ITEM_STYLE}>
              <MenuItem>Projects</MenuItem>
            </Link>
            <Link href="/blog" style={MOBILE_MENU_ITEM_STYLE}>
              <MenuItem>Blog</MenuItem>
            </Link>
            <Link
              href="https://github.com/M-Valentino"
              style={MOBILE_MENU_ITEM_STYLE}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MenuItem>GitHub</MenuItem>
            </Link>
          </Menu>
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
            color={activeLink === 0 ? "primary" : "secondary"}
            style={{ fontSize: 18 }}
            LinkComponent={Link}
            href="/"
          >
            Home
          </Button>
          <Button
            color={activeLink === 1 ? "primary" : "secondary"}
            style={{ fontSize: 18 }}
            LinkComponent={Link}
            href="/projects"
          >
            Projects
          </Button>
          <Button
            color={activeLink === 2 ? "primary" : "secondary"}
            style={{ fontSize: 18 }}
            LinkComponent={Link}
            href="/blog"
          >
            Blog
          </Button>
          <Button
            color={activeLink === 3 ? "primary" : "secondary"}
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
