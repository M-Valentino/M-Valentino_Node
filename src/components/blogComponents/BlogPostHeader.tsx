import React, { useEffect, useState } from "react";
import ShareIcon from "@mui/icons-material/Share";
import { Grid, IconButton, Tooltip, Typography } from "@mui/material";
import { LINKS } from "../../consts/pageTitles";
import { COLORS, SHADOWS } from "../../consts/stylingValues";
import { MainHeading, SubHeading } from "../layout/Headings";
import { useSpring, animated } from "@react-spring/web";

export const BlogPostHeader = (props: {
  item: {
    title: string;
    appendQuestionMark?: boolean;
    date: string;
  };
  postIndex: number;
  postIdCopied: number;
  setPostIdCopied: Function;
  isShownOnOwnURL?: boolean;
}) => {
  const { item, postIndex, postIdCopied, setPostIdCopied, isShownOnOwnURL } =
    props;
  const [views, setViews] = useState(null);

  useEffect(() => {
    if (views === null) {
      fetch(`/api/blog-post-views?title=${item.title}`)
        .then((res) => res.json())
        .then((data) => {
          setViews(data);
        });
    }
  }, [item.title, views]);

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
      {isShownOnOwnURL ? (
        /**
         * If the post is not on the feed, the blog post title becomes
         * the H1. This is for SEO
         */
        <MainHeading>
          {item.title}
          {item.appendQuestionMark ? "?" : ""}
        </MainHeading>
      ) : (
        <SubHeading>
          {item.title}
          {item.appendQuestionMark ? "?" : ""}
        </SubHeading>
      )}
      <Grid container spacing={2}>
        <Grid item>
          <Typography
            variant="subtitle1"
            color="secondary"
            style={{ fontStyle: "italic" }}
          >
            Published {item.date}
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="subtitle1" color="secondary">
            {views === null ? "" : `👁️ ${views} views`}
          </Typography>
        </Grid>
        {/* Sharing functionality is turned off for dynamically routed blog posts. 
          postIndex isn't passed as a prop inside [postTitle].jsx*/}
        {postIndex !== undefined && (
          <Grid item>
            <div style={{ transform: "translateY(-4px)" }}>
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
                      `https://${LINKS.domain}/blogPost/${item.title}`
                    );
                    setPostIdCopied(postIndex);
                  }}
                >
                  <ShareIcon />
                </IconButton>
              </Tooltip>
              {shareButtonClicked() && (
                <>
                  <animated.div style={{ ...fadeIn, display: "inline-block" }}>
                    <Typography
                      className="linkCopied"
                      style={{
                        color: COLORS.successGreen,
                        userSelect: "none",
                      }}
                    >
                      Link Copied!
                    </Typography>
                  </animated.div>
                </>
              )}
            </div>
          </Grid>
        )}
      </Grid>
    </>
  );
};
