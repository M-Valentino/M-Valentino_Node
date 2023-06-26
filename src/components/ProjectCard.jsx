import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { useSpring, animated } from "@react-spring/web";
import { ThemeProvider } from "@mui/material/styles";
import { MainTheme } from "@/utils/MUITheme";
import { LanguageChip } from "./LanguageChip";
import { LANGUAGES } from "@/consts/projectContent";

export default function ProjectCard(props) {
  const { href, imageLink, title, date, description, languages } = props.data;
  const [isHovering, setIsHovering] = useState(false);

  const springs = useSpring({
    from: { y: 500, opacity: 0 },
    to: { y: 0, opacity: 1 },
    delay: props.index * 100,
    config: {
      mass: 1,
      friction: 19,
    },
  });

  const initialShadow =
    "0px 0.1px 0.2px rgba(0, 0, 0, 0.022), 0px 0.3px 0.4px rgba(0, 0, 0, 0.031), 0px 0.7px 0.9px rgba(0, 0, 0, 0.039), 0px 1.5px 1.8px rgba(0, 0, 0, 0.048), 0px 4px 5px rgba(0, 0, 0, 0.07)";
  const finalShadow =
    "0px 0.2px 1px rgba(0, 0, 0, 0.019), 0px 0.5px 2.6px rgba(0, 0, 0, 0.027), 0px 1.1px 5.3px rgba(0, 0, 0, 0.034), 0px 2.2px 11px rgba(0, 0, 0, 0.042), 0px 6px 30px rgba(0, 0, 0, 0.07)";
  const zoom = useSpring({
    from: {
      scale: 1,
      boxShadow: initialShadow,
    },
    to: {
      scale: isHovering ? 1.05 : 1,
      boxShadow: isHovering ? finalShadow : initialShadow,
    },
    config: { mass: 0.5, friction: 30, tension: 600},
  });

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

  return (
    <ThemeProvider theme={MainTheme}>
      {/* Cards on the projects page will appear one after another. Cards with a lower index will apear sooner. */}

      <animated.div
        style={{
          backgroundColor: "#fff",
          width: 360,
          padding: 24,
          borderRadius: 4,
          textRendering: 'geometricPrecision!important',
          ...springs,
          ...zoom,
        }}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <a style={{ textDecoration: "none" }} href={href}>
          <img src={imageLink} style={{ width: "100%", borderRadius: 2 }}></img>
          <Stack direction="row" spacing={1}>
            <Typography variant="h6" color="primary">
              {date}
            </Typography>
            <Typography variant="h5" color="text.primary">
              {title}
            </Typography>
          </Stack>
          <Typography
            variant="body2"
            color="text.secondary"
            style={{ textAlign: "justify" }}
          >
            {description}
          </Typography>
          <Stack direction="row" spacing={1} mt={1}>
            {languages.map((props, index) => (
              <LanguageChip
                index={index}
                label={props}
                backgroundColor={getChipColor(props)}
              />
            ))}
          </Stack>
        </a>
      </animated.div>
    </ThemeProvider>
  );
}
