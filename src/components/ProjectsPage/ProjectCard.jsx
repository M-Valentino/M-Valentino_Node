import React, { useState } from "react";
import Link from "next/link";
import {
  Button,
  Stack,
  Tooltip,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useSpring, animated } from "@react-spring/web";
import { LanguageChip } from "../LanguageChip";
import { COLORS, GRADIENTS, SHADOWS } from "../../consts/stylingValues";
import { HREF_TYPES } from "../../consts/projectContent";
import { PLUS_MORE } from "../../consts/projectContent";

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
  // True if mouse is hovering on the card, else false.
  const [isHovering, setIsHovering] = useState(false);

  /**
   * Animation to make the card enlarge a little bit when the user hovers over it.
   * The shadow animates realistically too. This animation is disabled for mobile browsers.
   */
  const cardZoom = useSpring({
    from: {
      scale: 1,
      boxShadow: SHADOWS.initialCardShadow,
      filter: isDesktopView ? "brightness(0.99)" : "brightness(1)",
    },
    to: {
      scale: isHovering && isDesktopView ? 1.05 : 1,
      boxShadow:
        isHovering && isDesktopView
          ? SHADOWS.finalCardShadow
          : SHADOWS.initialCardShadow,
      filter:
        isHovering && isDesktopView ? "brightness(1)" : "brightness(0.99)",
    },
    config: { mass: 0.5, friction: 18, tension: 600 },
  });

  return (
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
        className="projectCard"
        style={{
          background: GRADIENTS.offWhiteGradient,
          borderRadius: 4,
          textRendering: "geometricPrecision!important",
          ...cardZoom,
        }}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <div
          className="projectCardImg"
          role="img"
          alt={imageAltText}
          style={{
            backgroundImage: `url(${imageLink})`,
            backgroundSize: "cover",
            backgroundPosition: "50% 50%",
            backgroundColor: "#ccc",
            width: "100%",
            borderRadius: 2,
            boxShadow: SHADOWS.minute,
          }}
        >
          {hrefType === HREF_TYPES.iframe && (
            <div
              style={{
                backgroundColor: COLORS.mainOrange,
                width: 168,
                color: COLORS.offWhiteColor,
                textAlign: "center",
                borderBottomRightRadius: 10,
                fontSize: 13,
                boxShadow: SHADOWS.minute,
                textShadow: SHADOWS.minute,
              }}
            >
              Try it in your browser!
            </div>
          )}
        </div>
        <Stack direction="row">
          <Typography
            className="projectDate"
            variant={"h6"}
            color="primary"
            style={{ marginRight: 8 }}
          >
            {date}
          </Typography>
          <Typography
            variant={title.length > 28 ? "h6" : "h5"}
            color="text.primary"
          >
            {title}
          </Typography>
        </Stack>
        <Typography
          className="cardDescription"
          variant="body2"
          color="text.secondary"
        >
          {description}
        </Typography>
        {/* Tooltip shows all languages on a card if there are some hidden. + more
          language chip denotes that there are more languages that couldn't fit. */}
        <Tooltip title={languages.length > 4 ? languages.join(", ") : ""}>
          <Stack direction="row" spacing={1} mt={1}>
            {languages.slice(0, 4).map((item, index) => (
              <LanguageChip key={index} language={item} size="small" />
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
  );
}
