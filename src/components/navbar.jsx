import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import { useState } from "react";

function NavBar() {



  return (
    <AppBar position="static">
      <Toolbar>
        {/* <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton> */}
        <Button color="inherit">Home</Button>
        <Button color="inherit">Projects</Button>
        <Button color="inherit">Portfolio</Button>
      </Toolbar>
    </AppBar>
  );
}
export default NavBar;
