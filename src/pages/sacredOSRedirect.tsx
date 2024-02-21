import React from "react";
import { MainTheme, SHADOWS } from "../consts/stylingValues";
import { Button, ThemeProvider } from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

export default function SacredOSRedirect() {
  return (
    <ThemeProvider theme={MainTheme}>
      <div
        style={{
          width: "100%",
          height: "100vh",
          backgroundImage: "url(projectImages/sacredOS.webp)",
          backgroundSize: "cover",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <Button
          href="https://sacred.neocities.org"
          target="_blank"
          rel="noopener"
          variant="contained"
          style={{ margin: "auto", fontSize: "6.5vw" }}
          sx={{ boxShadow: 20 }}
          endIcon={
            <OpenInNewIcon
              style={{
                fontSize: "5.5vw",
                transform: "translateY(-1.3vw)",
                filter: SHADOWS.minuteSVG,
              }}
            />
          }
        >
          Launch Sacred OS
        </Button>
      </div>
    </ThemeProvider>
  );
}
