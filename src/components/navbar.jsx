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
    <AppBar
      position="static"
      elevation={0}
      style={{ padding: 4 }}
      color={"transparent"}
    >
      <ICButton text="HOME" />
      <Stack spacing={0} direction="row" alignSelf="center">
        <Link href="/"></Link>
        <Link href="/">
          <Button color="primary">Home</Button>
        </Link>
        <Link href="/projects">
          <Button color="primary">Projects</Button>
        </Link>
        <Link href="/portfolio">
          <Button color="primary">Portfolio</Button>
        </Link>
      </Stack>
    </AppBar>
  );
}
export default NavBar;
