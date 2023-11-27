import React from "react";
import { Typography } from "@mui/material";
import { MINUTE_SHADOW, SMALL_SHADOW } from "@/consts/stylingValues";

export const MainHeading = ({ children, shrinkFontOn, addMarginBottomOn }) => {
  return (
    <Typography
      variant={shrinkFontOn ? "h4" : "h3"}
      fontWeight={600}
      textAlign={"center"}
      style={{
        textShadow: SMALL_SHADOW,
        marginBottom: !addMarginBottomOn ? 0 : 20,
      }}
    >
      {children}
    </Typography>
  );
};

export const SubHeading = ({ children, shrinkFontOn }) => {
  return (
    <Typography
      variant={shrinkFontOn ? "h5" : "h4"}
      color="text.primary"
      style={{
        marginBottom: 20,
        textShadow: MINUTE_SHADOW,
        fontWeight: "bolder",
        textAlign: "center",
      }}
    >
      {children}
    </Typography>
  );
};
