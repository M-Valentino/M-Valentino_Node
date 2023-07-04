import React from "react";
import { LANGUAGES } from "@/consts/projectContent";
import { Typography } from "@mui/material";

/**
 * This is a component akin to MUI chips. LanguageChip is used in showing what coding language
 * was used for a project. The color of the chip changes depending on the language passed in
 * through props. This component can either be in a small size or larger size which is also
 * dependant of the size prop passed through.
 * @param {*} props the coding language text to show and the size of the chip.
 */
export const LanguageChip = (props) => {
  const { size, language } = props;
  /**
   * Function for determining which background color the coding language tags will have
   * @param {*} language the string value of the language
   * @returns the hex color
   */
  const getChipColor = (language) => {
    switch (language) {
      case LANGUAGES.htmlPlusCss:
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

  const fullSizeStyles = {
    container: {
      display: "flex",
      justifyContent: "center",
      alignContent: "center",
      flexDirection: "column",
      paddingLeft: 12.5,
      paddingRight: 12.5,
      height: 32,
      borderRadius: 16,
      backgroundColor: getChipColor(language),
      textDecoration: "none",
    },
    typography: {
      fontWeight: 400,
      opacity: 0.8,
      fontSize: 15,
    },
  };
  const smallSizeStyles = {
    container: {
      display: "flex",
      justifyContent: "center",
      alignContent: "center",
      flexDirection: "column",
      paddingLeft: 7.5,
      paddingRight: 7.5,
      height: 20,
      borderRadius: 10,
      backgroundColor: getChipColor(language),
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
        size === "full" ? fullSizeStyles.container : smallSizeStyles.container
      }
    >
      <Typography
        color="text.primary"
        style={
          size === "full"
            ? fullSizeStyles.typography
            : smallSizeStyles.typography
        }
      >
        {language}
      </Typography>
    </div>
  );
};
