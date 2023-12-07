import React from "react";
import { Typography } from "@mui/material";
import { SHADOWS } from "@/consts/stylingValues";

export const MainHeading = ({ children, shrinkFontOn, addMarginBottomOn }) => {
  return (
    <Typography
      variant={shrinkFontOn ? "h4" : "h3"}
      fontWeight={600}
      textAlign={"center"}
      style={{
        textShadow: SHADOWS.small,
        marginBottom: !addMarginBottomOn ? 0 : 20,
      }}
    >
      {children}
    </Typography>
  );
};

export const SubHeading = ({ children }) => {
  return (
    <Typography
      className="subHeading"
      color="text.primary"
      style={{
        marginBottom: 15,
        textShadow: SHADOWS.minute,
        fontWeight: "bolder",
        textAlign: "center",
      }}
    >
      {children}
    </Typography>
  );
};
