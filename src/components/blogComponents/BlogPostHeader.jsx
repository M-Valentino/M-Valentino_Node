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
import { COLORS } from "@/consts/stylingValues";
import { SubHeading } from "@/components/layout/Headings";

export const BlogPostHeader = (props) => {
  const { item, postIndex, postIdCopied, setPostIdCopied } = props;
  const isLargeMobileView = useMediaQuery("(max-width:428px)");
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
                  color:
                    postIdCopied === postIndex
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
            {/* Boolean is for preventing "Link Copied!" from showing on all posts */}
            {postIdCopied === postIndex && (
              <Stack direction="column" justifyContent="center">
                <Typography
                  style={{
                    fontSize: isLargeMobileView ? 11 : 14,
                    color: COLORS.successGreen,
                  }}
                >
                  Link Copied!
                </Typography>
              </Stack>
            )}
          </>
        )}
      </Stack>
    </>
  );
};
