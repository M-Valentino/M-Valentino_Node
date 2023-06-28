import React from "react";
import { Typography } from "@mui/material";

/**
 * This is a component akin to MUI chips. This was made since MUI chips didn't have the exact behavor I wanted.
 * It was just easier to remake them.
 * @param {*} props the text and background color to be shown
 */
export const LanguageChip = (props) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        flexDirection: "column",
        paddingLeft: 12.5,
        paddingRight: 12.5,
        height: 32,
        borderRadius: 16,
        backgroundColor: props.backgroundColor,
        textDecoration: "none",
      }}
    >
      <Typography
        variant="body2"
        color="text.primary"
        style={{ fontWeight: 400, opacity: 0.8 }}
      >
        {props.label}
      </Typography>
    </div>
  );
};
