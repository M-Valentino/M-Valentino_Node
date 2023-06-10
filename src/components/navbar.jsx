import * as React from "react";
import Link from "next/link";
import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import { Stack, Typography } from "@mui/material";
import ICButton from "./icButton";

const NavBar = (props) => {
  const {activeLink} = props;
  return (
    <AppBar
      position="static"
      elevation={0}
      color={"transparent"}
    >
      <ICButton text="HOME" />
      <Stack spacing={0} direction="row" alignSelf="center">
        <Link href="/"></Link>
        <Link href="/">
          <Button color={activeLink === 0 ?  'primary': 'secondary'}>Home</Button>
        </Link>
        <Link href="/projects">
          <Button color={activeLink === 1 ?  'primary': 'secondary'}>Projects</Button>
        </Link>
        <Link href="/portfolio">
          <Button color={activeLink === 2 ?  'primary' : 'secondary'}>Portfolio</Button>
        </Link>
      </Stack>
    </AppBar>
  );
}
export default NavBar;
