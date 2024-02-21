import React from "react";
import { Button, ThemeProvider } from "@mui/material";
import { MainTheme } from "../consts/stylingValues";
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
          variant="contained"
          endIcon={
            <OpenInNewIcon
              style={{ fontSize: "5vw", transform: "translateY(-1.2vw)" }}
            />
          }
          style={{ margin: "auto", fontSize: "6vw" }}
        >
          Launch Sacred OS
        </Button>
      </div>
    </ThemeProvider>
  );
}
