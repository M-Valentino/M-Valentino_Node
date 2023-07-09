import React from "react";
import { LANGUAGES } from "@/consts/projectContent";
import { Typography } from "@mui/material";
import { PLUS_MORE } from "@/consts/projectContent";

/**
 * This is a component akin to MUI chips. LanguageChip is used in showing what coding languages
 * and libraries were used for a project. The color of the chip changes depending on the 
 * language passed in through props. This component can either be in a small size or larger size
 * which is also dependant of the size prop passed through.
 * 
 * There is a special use case here for having the chip show "+ more". It is used in showing that
 * there are more languages than what can be shown currently. When "+ more" is passed in through
 * the language prop, it is styled differently.
 * @param {*} props the coding language text to show and the size of the chip.
 */
export const LanguageChip = (props) => {
  const { size, language } = props;
  /**
   * Function for determining which background color the coding language tags will have.
   * HSL is used so that colors do not have to be defined for every new language added.
   * @param {*} language the string value of the language
   * @returns the hsl color
   */
  const getChipColor = (language) => {
    // This is not a language or library so the color is made distinct from the rest.
    if (language === PLUS_MORE) {
      return "#555";
    }
    for (const [index, [, value]] of Object.entries(
      Object.entries(LANGUAGES)
    )) {
      if (value === language) {
    
        return `hsl(${
          // All colors assigned to a language will be evenly spaced by angle for the hue.
          index * (360 / Object.keys(LANGUAGES).length)
        }, 100%, 85%)`;
      }
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
        <span style={{ color: language === PLUS_MORE ? "#fff" : "#000" }}>
          {language}
        </span>
      </Typography>
    </div>
  );
};
