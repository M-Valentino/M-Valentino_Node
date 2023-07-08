import React from "react";
import Link from "next/link";
import { Grid, Button, Stack, useMediaQuery } from "@mui/material/";
import { DESKTOP_WIDTH, MOBILE_WIDTH } from "@/consts/stylingValues";

const NavBar = (props) => {
  const { activeLink } = props;
  const isDesktopView = useMediaQuery("(min-width:1000px)");
  return (
    <Grid
      container
      style={{
        margin: "auto",
        maxWidth: isDesktopView ? DESKTOP_WIDTH : MOBILE_WIDTH,
      }}
    >
      <Grid item xs={4}>
        <div style={{ width: 115, paddingTop: 5 }}>
          <Link href="/">
            <img
              src="/mark-valentino-logo.svg"
              style={{
                width: "100%",
              }}
            />
          </Link>
        </div>
      </Grid>
      <Grid item xs={4}>
        <Stack direction="row" justifyContent="space-around">
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
      </Grid>
    </Grid>
  );
};
export default NavBar;
