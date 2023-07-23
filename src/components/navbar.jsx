import React from "react";
import Link from "next/link";
import {
  Grid,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  useMediaQuery,
} from "@mui/material/";
import MenuIcon from "@mui/icons-material/Menu";
import GitHubIcon from "@mui/icons-material/GitHub";
import {
  DESKTOP_WIDTH,
  MOBILE_WIDTH,
  MINUTE_SHADOW_SVG,
} from "@/consts/stylingValues";

// This component is the main navbar of the site.
const NavBar = (props) => {
  // The index of the button to change color to show it is the active link.
  const { activeLink } = props;
  const isDesktopView = useMediaQuery("(min-width:1000px)");
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
    <Grid
      container
      style={{
        margin: "auto",
        maxWidth: isDesktopView ? DESKTOP_WIDTH : MOBILE_WIDTH,
      }}
    >
      <Grid item xs={4}>
        {/* For giving the logo touch ripple effects */}
        <Button style={{ padding: 0 }}>
          <div style={{ width: 115, paddingTop: 5 }}>
            <Link href="/">
              <img
                src="/mark-valentino-logo.svg"
                style={{
                  width: "100%",
                  filter: MINUTE_SHADOW_SVG,
                }}
              />
            </Link>
          </div>
        </Button>
      </Grid>
      {isMobileView ? (
        <Grid item xs={8}>
          <IconButton
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            style={{ float: "right" }}
          >
            <MenuIcon color="primary" fontSize="large" />
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
            <Link href="/" style={{textDecoration: "none"}}>
              <MenuItem>Home</MenuItem>
            </Link>
            <Link href="/projects" style={{textDecoration: "none"}}>
              <MenuItem>Projects</MenuItem>
            </Link>
            <Link
              href="https://github.com/M-Valentino"
              target="_blank"
              rel="noopener noreferrer"
              style={{textDecoration: "none"}}
            >
              <MenuItem>GitHub</MenuItem>
            </Link>
          </Menu>
        </Grid>
      ) : (
        <Grid item xs={4}>
          <Stack direction="row" justifyContent="space-around">
            <Link href="/" style={{textDecoration: "none"}}>
              <Button
                color={activeLink === 0 ? "primary" : "secondary"}
                style={{ fontSize: 18 }}
              >
                Home
              </Button>
            </Link>
            <Link href="/projects" style={{textDecoration: "none"}}>
              <Button
                color={activeLink === 1 ? "primary" : "secondary"}
                style={{ fontSize: 18 }}
              >
                Projects
              </Button>
            </Link>
            <Link
              href="https://github.com/M-Valentino"
              target="_blank"
              rel="noopener noreferrer"
              style={{textDecoration: "none"}}
            >
              <Button
                color={activeLink === 2 ? "primary" : "secondary"}
                style={{ fontSize: 18 }}
              >
                <GitHubIcon
                  style={{ transform: "translateY(-3px)", marginRight: 2 }}
                />
                GitHub
              </Button>
            </Link>
          </Stack>
        </Grid>
      )}
    </Grid>
  );
};
export default NavBar;
