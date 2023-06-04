import * as React from "react";
import Link from "next/link";
import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import { Stack, Typography } from "@mui/material";

function NavBar() {
  return (
    <AppBar position="static" elevation={1} style={{ padding: 4 }}>
      <Stack spacing={4} direction="row" style={{ textDecoration: "none" }}>
        <Stack>
          <div
            style={{
              width: 10,
              height: 5,
              backgroundColor: "#000",
              transform: "translate(0, 17.5px)",
            }}
          ></div>
          <div
            style={{
              width: 125,
              height: 30,
              backgroundColor: "#222",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignContent: "center",
              textAlign: "center",
              color: "#ccc",
            }}
          >
            <Typography>
            Home
            </Typography>
          </div>
          <div
            style={{ width: 125, height: 10, backgroundColor: "#000" }}
          ></div>
          <Stack direction="row">
            <div
              style={{
                width: 5,
                height: 10,
                backgroundColor: "#fea",
                transform: "translate(5px, -5px)",
              }}
            ></div>
            <div
              style={{
                width: 5,
                height: 10,
                backgroundColor: "#fea",
                transform: "translate(10px, -5px)",
              }}
            ></div>
            <div
              style={{
                width: 5,
                height: 10,
                backgroundColor: "#fea",
                transform: "translate(15px, -5px)",
              }}
            ></div>
            <div
              style={{
                width: 5,
                height: 10,
                backgroundColor: "#fea",
                transform: "translate(20px, -5px)",
              }}
            ></div>
            <div
              style={{
                width: 5,
                height: 10,
                backgroundColor: "#fea",
                transform: "translate(25px, -5px)",
              }}
            ></div>
            <div
              style={{
                width: 5,
                height: 10,
                backgroundColor: "#fea",
                transform: "translate(30px, -5px)",
              }}
            ></div>
            <div
              style={{
                width: 5,
                height: 10,
                backgroundColor: "#fea",
                transform: "translate(35px, -5px)",
              }}
            ></div>
            <div
              style={{
                width: 5,
                height: 10,
                backgroundColor: "#fea",
                transform: "translate(40px, -5px)",
              }}
            ></div>
            <div
              style={{
                width: 5,
                height: 10,
                backgroundColor: "#fea",
                transform: "translate(45px, -5px)",
              }}
            ></div>
            <div
              style={{
                width: 5,
                height: 10,
                backgroundColor: "#fea",
                transform: "translate(50px, -5px)",
              }}
            ></div>
            <div
              style={{
                width: 5,
                height: 10,
                backgroundColor: "#fea",
                transform: "translate(55px, -5px)",
              }}
            ></div>
            <div
              style={{
                width: 5,
                height: 10,
                backgroundColor: "#fea",
                transform: "translate(60px, -5px)",
              }}
            ></div>
          </Stack>
        </Stack>

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
