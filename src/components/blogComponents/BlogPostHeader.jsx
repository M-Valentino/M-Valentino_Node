import React from "react";
import ShareIcon from "@mui/icons-material/Share";
import {
  IconButton,
  Stack,
  Tooltip,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { PAGE_TITLES } from "@/consts/pageTitles";
import { COLORS, SHADOWS } from "@/consts/stylingValues";
import { SubHeading } from "@/components/layout/Headings";
import { useSpring, animated } from "@react-spring/web";

export const BlogPostHeader = (props) => {
  const { item, postIndex, postIdCopied, setPostIdCopied } = props;
  const isLargeMobileView = useMediaQuery("(max-width:428px)");

  /**
   * Syntactic sugar function that determines if the the postId
   * copied equals the postIndex from the mapping of posts in the
   * parent component.
   * @returns true if clicked, else false
   */
  const shareButtonClicked = () => {
    return postIdCopied === postIndex;
  };

  const fadeIn = useSpring({
    from: {
      filter: "opacity(0)",
    },
    to: {
      filter: shareButtonClicked() ? "opacity(1)" : "opacity(0)",
    },
    config: { duration: 200 },
  });

  return (
    <>
      <SubHeading shrinkFontOn={isLargeMobileView}>
        {item.title}
        {item.appendQuestionMark ? "?" : ""}
      </SubHeading>
      <Stack direction="row" style={{ height: 36, marginBottom: 5 }}>
        <Stack
          direction="column"
          justifyContent="center"
          style={{ marginRight: 10 }}
        >
          <Typography
            variant="subtitle1"
            color="secondary"
            style={{ fontStyle: "italic" }}
          >
            Published {item.date}
          </Typography>
        </Stack>
        {/* Sharing functionality is turned off for dynamically routed blog posts. 
          postIndex isn't passed as a prop inside [postTitle].jsx*/}
        {postIndex !== undefined && (
          <>
            <Tooltip title="Copy link to just this post">
              <IconButton
                style={{
                  height: 36,
                  width: 36,
                  filter: SHADOWS.minuteSVG,
                  color: shareButtonClicked()
                    ? COLORS.successGreen
                    : COLORS.mainGray,
                }}
                onClick={() => {
                  navigator.clipboard.writeText(
                    `https://${PAGE_TITLES.domain}/blogPost/${item.title}`
                  );
                  setPostIdCopied(postIndex);
                }}
              >
                <ShareIcon />
              </IconButton>
            </Tooltip>
            {shareButtonClicked() && (
              <Stack direction="column" justifyContent="center">
                <animated.div style={{ ...fadeIn }}>
                  <Typography
                    style={{
                      fontSize: isLargeMobileView ? 11 : 14,
                      color: COLORS.successGreen,
                      userSelect: "none",
                    }}
                  >
                    Link Copied!
                  </Typography>
                </animated.div>
              </Stack>
            )}
          </>
        )}
      </Stack>
    </>
  );
};
