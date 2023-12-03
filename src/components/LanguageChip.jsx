import React, { useState } from "react";
import Link from "next/link";
import { SmartLink } from "./smartLink/SmartLink";
import { PLUS_MORE, LANGUAGES, LANGUAGE_LINKS } from "@/consts/projectContent";
import { Typography } from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { useSpring, animated } from "@react-spring/web";
import { SHADOWS } from "@/consts/stylingValues";

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
  const { size, language, showLink } = props;
  const [isHovering, setIsHovering] = useState(false);
  /**
   * Function for determining which background color the coding language tags will have.
   * HSL is used so that colors do not have to be defined for every new language added.
   * @param {*} language the string value of the language
   * @returns the hsl color
   */
  const getChipColor = () => {
    // This is not a language or a library, so the color returned will be destinct.
    if (language === PLUS_MORE) {
      return "#555";
    }
    const languageEntries = Object.entries(LANGUAGES);
    const matchingIndex = languageEntries.findIndex(
      ([, value]) => value === language
    );
    /**
     * The hue determined will be evenly spaced by angle between all possible hues for
     *  every language.
     */
    const hue = matchingIndex * (360 / languageEntries.length);
    return `hsl(${hue}, 100%, 85%)`;
  };

  const hoverAnimation = useSpring({
    from: {
      filter: "brightness(1.0)",
    },
    to: {
      filter: isHovering ? "brightness(0.87)" : "brightness(1.0)",
    },
  });

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
      backgroundColor: getChipColor(),
      textDecoration: "none",
      boxShadow: SHADOWS.minute,
    },
    typography: {
      fontWeight: 400,
      opacity: 0.8,
      fontSize: 15,
      whiteSpace: "nowrap",
      userSelect: "none",
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
      backgroundColor: getChipColor(),
      textDecoration: "none",
      boxShadow: SHADOWS.minute,
    },
    typography: {
      fontWeight: 400,
      opacity: 0.8,
      fontSize: 12,
      whiteSpace: "nowrap",
      userSelect: "none",
    },
  };

  const Chip = () => (
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
        {showLink && size === "full" && (
          <OpenInNewIcon
            style={{
              transform: "translateY(1px)",
              marginLeft: 4,
              width: 12,
              height: 12,
            }}
          />
        )}
      </Typography>
    </div>
  );

  return showLink ? (
    <animated.div
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      style={{ ...hoverAnimation }}
    >
      {size === "full" ? (
        <SmartLink
          href={LANGUAGE_LINKS[language]}
          openInNewTab
          style={{ textDecoration: "none" }}
        >
          <Chip />
        </SmartLink>
      ) : (
        <Link
          href={LANGUAGE_LINKS[language]}
          target="_blank"
          rel="noopener"
          style={{ textDecoration: "none" }}
        >
          <Chip />
        </Link>
      )}
    </animated.div>
  ) : (
    <Chip />
  );
};
