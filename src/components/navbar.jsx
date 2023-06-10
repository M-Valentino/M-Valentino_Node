import React, { useState, useEffect } from "react";
import Link from "next/link";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import { Stack } from "@mui/material";
import ICButton from "./icButton";




function NavBar() {


  return (
    <>
      <ICButton />
      <AppBar position="static" elevation={0} color="transparent">
      


        <Stack direction="row" spacing={1} alignSelf="center">
          <Link href="/">
            <Button
              variant="text"
              size="large"
              style={{ fontSize: 19 }}
              
            >
              Home
            </Button>
          </Link>
          <Link href="/projects">
            <Button
              variant="text"
              size="large"
              style={{ fontSize: 19 }}
             
            >
              Projects
            </Button>
          </Link>
          <Link href="/portfolio">
            <Button
              variant="text"
              size="large"
              style={{ fontSize: 19 }}
        
            >
              Portfolio
            </Button>
          </Link>
        </Stack>

        {/* </Stack> */}
      </AppBar>
    </>
  );
}
export default NavBar;
