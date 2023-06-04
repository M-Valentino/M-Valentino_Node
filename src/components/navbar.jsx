import * as React from "react";
import Link from "next/link";
import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import { Stack, Typography } from "@mui/material";
import ICButton from "./icButton";

function NavBar() {
  return (
    <AppBar position="static" elevation={1} style={{ padding: 4 }}>
      <Stack spacing={4} direction="row" style={{ textDecoration: "none" }}>
        <Link href="/">
          <ICButton text="HOME"/>
        </Link>
        {/* <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton> */}
        <Link href="/">
          <Button color="inherit">Home</Button>
        </Link>
        <Link href="/projects">
          <Button color="inherit">Projects</Button>
        </Link>
        <Link href="/portfolio">
          <Button color="inherit">Portfolio</Button>
        </Link>
      </Stack>
    </AppBar>
  );
}
export default NavBar;
