import React, { useState } from "react";
import { Stack, Typography, useMediaQuery } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { MainTheme } from "@/utils/MUITheme";
import { useSpring, animated } from "@react-spring/web";
import { LanguageChip } from "./LanguageChip";

export default function ProjectCard(props) {
  const {
    href,
    imageLink,
    title,
    smallerTitleFontNeeded,
    date,
    description,
    languages,
  } = props.data;
  const isDesktopView = useMediaQuery("(min-width:1000px)");
  // True if mouse is hovering on the card, else false.
  const [isHovering, setIsHovering] = useState(false);

  /**
   * Animation that is triggered when the Projects page is loaded. The card moves onto
   * the screen in a slightly bouncy fashion. Each card in the projects page starts
   * moving one after another. This is determined by the card's index in the delay
   * parameter.
   */
  const cardDealt = useSpring({
    from: {
      y: 500,
      opacity: 0,
    },
    to: {
      y: 0,
      opacity: 1,
    },
    delay: props.index * 100,
    config: {
      mass: 1,
      friction: 19,
    },
  });

  const initialShadow =
    "0px 0.1px 0.2px rgba(0, 0, 0, 0.022), 0px 0.3px 0.4px rgba(0, 0, 0, 0.031), 0px 0.7px 0.9px rgba(0, 0, 0, 0.039), 0px 1.5px 1.8px rgba(0, 0, 0, 0.048), 0px 4px 5px rgba(0, 0, 0, 0.07)";
  // Shadow that has slightly more blur and a slightly longer vertical distance than initalShadow
  const finalShadow =
    "0px 0.2px 1px rgba(0, 0, 0, 0.019), 0px 0.5px 2.6px rgba(0, 0, 0, 0.027), 0px 1.1px 5.3px rgba(0, 0, 0, 0.034), 0px 2.2px 11px rgba(0, 0, 0, 0.042), 0px 6px 30px rgba(0, 0, 0, 0.07)";

  /**
   * Animation to make the card enlarge a little bit when the user hovers over it.
   * The shadow animates realistically too. This animation is disabled for mobile browsers.
   */
  const cardZoom = useSpring({
    from: {
      scale: 1,
      boxShadow: initialShadow,
      filter: isDesktopView ? "brightness(0.99)" : "brightness(1)",
    },
    to: {
      scale: isHovering && isDesktopView ? 1.05 : 1,
      boxShadow: isHovering && isDesktopView ? finalShadow : initialShadow,
      filter:
        isHovering && isDesktopView ? "brightness(1)" : "brightness(0.99)",
    },
    config: { mass: 0.5, friction: 30, tension: 600 },
  });

  return (
    <ThemeProvider theme={MainTheme}>
      <a style={{ textDecoration: "none" }} href={href}>
        <animated.div
          style={{
            backgroundColor: "#fffdfa",
            width: 360,
            padding: 24,
            borderRadius: 4,
            textRendering: "geometricPrecision!important",
            ...cardDealt,
            ...cardZoom,
          }}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <img
            src={imageLink}
            style={{
              width: "100%",
              borderRadius: 2,
              boxShadow: "0 1px 1px rgba(0, 0, 0, 0.1)",
            }}
          ></img>
          <Stack direction="row" spacing={1}>
            <Typography variant="h6" color="primary">
              {date}
            </Typography>
            <Typography
              variant={smallerTitleFontNeeded ? "h6" : "h5"}
              color="text.primary"
            >
              {title}
            </Typography>
          </Stack>
          <div style={{ height: 145 }}>
            <Typography
              variant="body2"
              color="text.secondary"
              style={{ textAlign: "justify" }}
            >
              {description}
            </Typography>
          </div>
          <Stack direction="row" spacing={1} mt={1}>
            {languages.map((props, index) => (
              <LanguageChip index={index} language={props} size="full" />
            ))}
          </Stack>
        </animated.div>
      </a>
    </ThemeProvider>
  );
}
