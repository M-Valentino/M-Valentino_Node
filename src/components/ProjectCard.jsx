import React, { useState } from "react";
import Link from "next/link";
import { Stack, Tooltip, Typography, useMediaQuery } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { MainTheme } from "@/utils/MUITheme";
import { useSpring, animated } from "@react-spring/web";
import { LanguageChip } from "./LanguageChip";
import {
  CARD_AND_TABLE_SHADOW,
  FINAL_CARD_SHADOW,
} from "@/consts/stylingValues";
import { PLUS_MORE } from "@/consts/projectContent";

/**
 * This component takes in one project object from the projectContent array and
 * populates the elements with it's data. This component is shown on the Projects
 * page. It grows in size when hovered over.
 */
export default function ProjectCard(props) {
  const { imageLink, title, date, description, languages } = props.data;
  const isDesktopView = useMediaQuery("(min-width:1000px)");
  const isMobileView = useMediaQuery("(max-width:400px)");
  const isSmallMobileView = useMediaQuery("(max-width:372px)");
  // True if mouse is hovering on the card, else false.
  const [isHovering, setIsHovering] = useState(false);

  /**
   * Animation that is triggered when the Projects page is loaded. The card moves onto
   * the screen in a slightly bouncy fashion. Each card in the projects page starts
   * moving one after another. This is determined by the card's key in the delay
   * parameter.
   */
  // const cardDealt = useSpring({
  //   from: {
  //     y: props.cardCanBeDealt ? 500 : 0,
  //     opacity: props.cardCanBeDealt ? 0 : 1,
  //   },
  //   to: {
  //     y: 0,
  //     opacity: 1,
  //   },
  //   delay: props.key * 100,
  //   config: {
  //     mass: 1,
  //     friction: 19,
  //   },
  // });

  /**
   * Animation to make the card enlarge a little bit when the user hovers over it.
   * The shadow animates realistically too. This animation is disabled for mobile browsers.
   */
  const cardZoom = useSpring({
    from: {
      scale: 1,
      boxShadow: CARD_AND_TABLE_SHADOW,
      filter: isDesktopView ? "brightness(0.99)" : "brightness(1)",
    },
    to: {
      scale: isHovering && isDesktopView ? 1.05 : 1,
      boxShadow:
        isHovering && isDesktopView ? FINAL_CARD_SHADOW : CARD_AND_TABLE_SHADOW,
      filter:
        isHovering && isDesktopView ? "brightness(1)" : "brightness(0.99)",
    },
    config: { mass: 0.5, friction: 18, tension: 600 },
  });

  return (
    <ThemeProvider theme={MainTheme}>
      <animated.div
        style={{
          backgroundColor: "#fffdfa",
          maxWidth: isMobileView ? "100%" : 360,
          padding: 24,
          borderRadius: 4,
          textRendering: "geometricPrecision!important",
          // ...cardDealt,
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
            variant={title.length > 28 ? "h6" : "h5"}
            color="text.primary"
          >
            {title}
          </Typography>
        </Stack>
        <div style={{ height: isMobileView ? "unset" : 145 }}>
          <Typography
            variant="body2"
            color="text.secondary"
            style={{ textAlign: "justify" }}
          >
            {description}
          </Typography>
        </div>
        <Tooltip title={languages.length > 3 ? languages.join(", ") : ""}>
          <Stack direction="row" spacing={1} mt={1}>
            {languages.slice(0, 3).map((props, key) => (
              <LanguageChip key={key} language={props} size={isSmallMobileView ? "small" : "full"} />
            ))}
            {languages.length > 3 ? (
              <LanguageChip language={PLUS_MORE} size={isSmallMobileView ? "small" : "full"} />
            ) : (
              <></>
            )}
          </Stack>
        </Tooltip>
      </animated.div>
    </ThemeProvider>
  );
}
