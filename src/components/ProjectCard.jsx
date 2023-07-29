import React, { useState } from "react";
import {
  Button,
  Stack,
  Tooltip,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { MainTheme } from "@/utils/MUITheme";
import { useSpring, animated } from "@react-spring/web";
import { LanguageChip } from "./LanguageChip";
import {
  CARD_AND_TABLE_SHADOW,
  FINAL_CARD_SHADOW,
  MINUTE_SHADOW,
  OFF_WHITE_COLOR,
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

  const getCardPadding = () => {
    if (isMobileView && !isSmallMobileView) {
      return 12;
    } else if (isSmallMobileView) {
      return 8;
    }
    return 24;
  };

  return (
    <ThemeProvider theme={MainTheme}>
      <Button
        style={{ padding: 0 }}
        sx={{
          "&.MuiButton-root:hover": { bgcolor: "transparent" },
          "&& .MuiTouchRipple-rippleVisible": {
            animationDuration: "1500ms",
          },
        }}
      >
        <animated.div
          style={{
            backgroundColor: OFF_WHITE_COLOR,
            maxWidth: isMobileView ? "100%" : 360,
            padding: getCardPadding(),
            borderRadius: 4,
            textRendering: "geometricPrecision!important",
            // ...cardDealt,
            ...cardZoom,
          }}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <div
            style={{
              backgroundImage: `url(${imageLink})`,
              backgroundSize: "cover",
              backgroundPosition: "50% 50%",
              backgroundColor: "#ccc",
              width: "100%",
              height: isMobileView ? 260 : 270,
              borderRadius: 2,
              boxShadow: MINUTE_SHADOW,
            }}
          />
          <Stack direction="row" spacing={1}>
            {!isSmallMobileView && (
              <Typography variant={"h6"} color="primary">
                {date}
              </Typography>
            )}
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
              style={{ textAlign: isSmallMobileView ? "left" : "justify" }}
            >
              {description}
            </Typography>
          </div>
          <Tooltip title={languages.length > 3 ? languages.join(", ") : ""}>
            <Stack direction="row" spacing={1} mt={1}>
              {languages.slice(0, 3).map((props, key) => (
                <LanguageChip
                  key={key}
                  language={props}
                  size={isMobileView ? "small" : "full"}
                />
              ))}
              {languages.length > 3 ? (
                <LanguageChip
                  language={PLUS_MORE}
                  size={isMobileView ? "small" : "full"}
                />
              ) : (
                <></>
              )}
            </Stack>
          </Tooltip>
        </animated.div>
      </Button>
    </ThemeProvider>
  );
}
