import React, { useState, useEffect } from "react";
import Link from "next/link";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import { Stack } from "@mui/material";
import ICButton from "./icButton";

const NavBar = (props) => {
  const {activeLink} = props;
  return (
    <AppBar
      position="static"
      elevation={0}
      color={"transparent"}
    >
      <img src="/mark-valentino-logo.svg" style={{width: 110, position: "absolute", top: 5, left: 5}}/>
      <Stack spacing={5} direction="row" alignSelf="center">
        <Link href="/">
          <Button color={activeLink === 0 ?  'primary': 'secondary'} style={{fontSize: 18}}>Home</Button>
        </Link>
        <Link href="/projects">
          <Button color={activeLink === 1 ?  'primary': 'secondary'} style={{fontSize: 18}}>Projects</Button>
        </Link>
        <Link href="/portfolio">
          <Button color={activeLink === 2 ?  'primary' : 'secondary'} style={{fontSize: 18}}>Portfolio</Button>
        </Link>
      </Stack>
    </AppBar>
  );
}
export default NavBar;
