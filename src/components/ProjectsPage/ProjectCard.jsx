import React, { useState } from "react";
import Link from "next/link";
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
import { LanguageChip } from "../LanguageChip";
import {
  CARD_AND_TABLE_SHADOW,
  FINAL_CARD_SHADOW,
  MINUTE_SHADOW,
  OFF_WHITE_COLOR,
  MUI_PRIMARY_COLOR_DEEP_ORANGE,
} from "@/consts/stylingValues";
import { HREF_TYPES } from "@/consts/projectContent";
import { PLUS_MORE } from "@/consts/projectContent";

/**
 * This component takes in one project object from the projectContent array and
 * populates the elements with it's data. This component is shown on the Projects
 * page and index page. It grows in size when hovered over.
 */
export default function ProjectCard(props) {
  const {
    imageLink,
    title,
    date,
    description,
    languages,
    hrefType,
    imageAltText,
  } = props.data;
  const isDesktopView = useMediaQuery("(min-width:1000px)");
  const isMobileView = useMediaQuery("(max-width:400px)");
  const isSmallMobileView = useMediaQuery("(max-width:372px)");
  // True if mouse is hovering on the card, else false.
  const [isHovering, setIsHovering] = useState(false);

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
        LinkComponent={Link}
        href={`/project/${title}`}
      >
        <animated.div
          style={{
            backgroundColor: OFF_WHITE_COLOR,
            maxWidth: isMobileView ? "100%" : 360,
            padding: getCardPadding(),
            borderRadius: 4,
            textRendering: "geometricPrecision!important",
            ...cardZoom,
          }}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <div
            role="img"
            alt={imageAltText}
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
          >
            {hrefType === HREF_TYPES.iframe && (
              <div
                style={{
                  backgroundColor: MUI_PRIMARY_COLOR_DEEP_ORANGE,
                  width: 168,
                  color: "#fff",
                  textAlign: "center",
                  borderBottomRightRadius: 10,
                  fontSize: 13,
                  boxShadow: MINUTE_SHADOW,
                }}
              >
                Try it in your browser!
              </div>
            )}
          </div>
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
          {/* Tooltip shows all languages on a card if there are some hidden. + more
          language chip denotes that there are more languages that couldn't fit. */}
          <Tooltip title={languages.length > 4 ? languages.join(", ") : ""}>
            <Stack direction="row" spacing={1} mt={1}>
              {languages.slice(0, 4).map((props, key) => (
                <LanguageChip key={key} language={props} size="small" />
              ))}
              {languages.length > 4 ? (
                <LanguageChip language={PLUS_MORE} size="small" />
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
