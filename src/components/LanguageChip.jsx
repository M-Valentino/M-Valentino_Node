import React from "react";
import { LANGUAGES } from "@/consts/projectContent";
import { Typography } from "@mui/material";

/**
 * This is a component akin to MUI chips. This was made since MUI chips didn't have the exact behavor I wanted.
 * It was just easier to remake them.
 * @param {*} props the text and background color to be shown
 */
export const LanguageChip = (props) => {
  /**
   * Function for determining which background color the coding language tags will have
   * @param {*} language the string value of the language
   * @returns the hex color
   */
  const getChipColor = (language) => {
    switch (language) {
      case LANGUAGES.css:
        return "#ffb3ba";
      case LANGUAGES.java:
        return "#ffdfba";
      case LANGUAGES.vanillaJS:
        return "#ffffba";
      case LANGUAGES.python:
        return "#baffc9";
      case LANGUAGES.react:
        return "#bac9ff";
      default:
        return "#bae1ff";
    }
  };

  const fullSizeStyle = {
    container: {
      display: "flex",
      justifyContent: "center",
      alignContent: "center",
      flexDirection: "column",
      paddingLeft: 12.5,
      paddingRight: 12.5,
      height: 32,
      borderRadius: 16,
      backgroundColor: getChipColor(props.label),
      textDecoration: "none",
    },
    typography: {
      fontWeight: 400,
      opacity: 0.8,
      fontSize: 15,
    },
  };
  const smallSizeStyle = {
    container: {
      display: "flex",
      justifyContent: "center",
      alignContent: "center",
      flexDirection: "column",
      paddingLeft: 7.5,
      paddingRight: 7.5,
      height: 20,
      borderRadius: 10,
      backgroundColor: getChipColor(props.label),
      textDecoration: "none",
    },
    typography: {
      fontWeight: 400,
      opacity: 0.8,
      fontSize: 12,
      whiteSpace: "nowrap",
    },
  };

  return (
    <div
      style={
        props.size === "full"
          ? fullSizeStyle.container
          : smallSizeStyle.container
      }
    >
      <Typography
        color="text.primary"
        style={
          props.size === "full"
            ? fullSizeStyle.typography
            : smallSizeStyle.typography
        }
      >
        {props.label}
      </Typography>
    </div>
  );
};
