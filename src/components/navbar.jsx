import React from "react";
import Link from "next/link";
import { AppBar, Button, Stack } from "@mui/material/";

const NavBar = (props) => {
  const { activeLink } = props;
  return (
    <AppBar
      position="static"
      elevation={0}
      color={"transparent"}
      style={{ padding: 5 }}
    >
      <Link href="/">
        <img
          src="/mark-valentino-logo.svg"
          style={{ width: 115, position: "absolute", top: 7.5, left: 7.5 }}
        />
      </Link>
      <Stack spacing={5} direction="row" alignSelf="center">
        <Link href="/">
          <Button
            color={activeLink === 0 ? "primary" : "secondary"}
            style={{ fontSize: 18 }}
          >
            Home
          </Button>
        </Link>
        <Link href="/projects">
          <Button
            color={activeLink === 1 ? "primary" : "secondary"}
            style={{ fontSize: 18 }}
          >
            Projects
          </Button>
        </Link>
        <Link href="/portfolio">
          <Button
            color={activeLink === 2 ? "primary" : "secondary"}
            style={{ fontSize: 18 }}
          >
            Portfolio
          </Button>
        </Link>
      </Stack>
    </AppBar>
  );
};
export default NavBar;
