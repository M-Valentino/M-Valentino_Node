import React from "react";
import { Typography } from "@mui/material";
import { SHADOWS } from "@/consts/stylingValues";

export const MainHeading = ({ children, addMarginBottomOn }) => {
  return (
    <Typography
      className="mainHeading"
      variant="h1"
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
      variant="h2"
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
