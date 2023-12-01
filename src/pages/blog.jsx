import React, { useEffect, useRef, useState } from "react";
import { MainWrapper } from "@/components/layout/MainWrapper";
import { CustomHead } from "@/components/layout/CustomHead";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ShareIcon from "@mui/icons-material/Share";
import {
  Divider,
  IconButton,
  Stack,
  Tooltip,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { PAGE_TITLES } from "@/consts/pageTitles";
import {
  MUI_SECONDARY_COLOR_GRAY,
  SUCCESS_GREEN,
} from "@/consts/stylingValues";
import { CustomPaper } from "@/components/layout/CustomPaper";
import { MainHeading, SubHeading } from "@/components/layout/Headings";
import { Post1 } from "@/components/blogComponents/blogPosts/Post1";
import { Post2 } from "@/components/blogComponents/blogPosts/Post2";
import { BlogDrawer } from "@/components/blogComponents/BlogDrawer";

/**
 * Holds all blog posts. appendQuestionMark is needed because blog
 * post titles are used in dynamic routing and including question
 * marks in URLs creates incompatibilities.
 */
export const BLOG_POSTS = [
  {
    component: <Post2 />,
    title: "I Don't Quite Like the Design of My Site",
    date: "November 26, 2023",
  },
  {
    component: <Post1 />,
    title: "Could My Image Processing Library Replace MarvinJ",
    appendQuestionMark: true,
    date: "October 15, 2023",
  },
];

/**
 * The component property must be removed for dynamic routing
 * because components can't be serialized.
 */
export const BLOG_POSTS_NO_COMPONENT = BLOG_POSTS.map((obj) => {
  const newObj = { ...obj };
  if (newObj.hasOwnProperty("component")) {
    delete newObj["component"];
  }
  return newObj;
});

export const getBlogComponent = (title) => {
  const post = BLOG_POSTS.find((obj) => obj.title === title);
  return post.component;
};

export default function Blog() {
  const isDesktopView = useMediaQuery("(min-width:900px)");
  const isAtLeastTabletView = useMediaQuery("(min-width:600px)");
  const isLargeMobileView = useMediaQuery("(max-width:428px)");

  // Controlls how many blog posts can be seen.
  const [postsToShow, setPostsToShow] = useState(1);
  const oldTime = useRef(Date.now());

  /**
   * If user scrolled close to the bottom and 500ms have passed,
   * increment postsToShow. Adding a time delay is needed since
   * postsToShow can be incremented too much.
   */
  const handleScroll = () => {
    if (
      Math.ceil(window.innerHeight + window.scrollY) >=
        document.documentElement.scrollHeight - 20 &&
      oldTime.current + 500 < Date.now()
    ) {
      if (postsToShow < BLOG_POSTS.length) {
        setPostsToShow((oldValue) => oldValue + 1);
        oldTime.current = Date.now();
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const [postIdCopied, setPostIdCopied] = useState(null);

  return (
    <>
      <CustomHead
        descriptionText="The tech blog of Mark Valentino - a software engineer."
        title="Mark Valentino's Tech Blog"
        keywords="technology, programming, coding"
      />
      <MainWrapper activeLink={PAGE_TITLES.blog}>
        <MainHeading shrinkFontOn={!isDesktopView} addMarginBottomOn={true}>
          {isAtLeastTabletView && "Mark Valentino's"}Tech Blog
        </MainHeading>
        <BlogDrawer />
        <CustomPaper isDesktopView={isDesktopView}>
          {BLOG_POSTS.slice(0, postsToShow).map((item, postIndex) => (
            <span key={postIndex}>
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
                <Tooltip title="Copy link to just this post">
                  <IconButton
                    style={{
                      height: 36,
                      width: 36,
                      color:
                        postIdCopied === postIndex
                          ? SUCCESS_GREEN
                          : MUI_SECONDARY_COLOR_GRAY,
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
                    <Typography style={{ fontSize: 14, color: SUCCESS_GREEN }}>
                      Link Copied!
                    </Typography>
                  </Stack>
                )}
              </Stack>
              {item.component}
              {postIndex === postsToShow - 1 &&
                postIndex !== BLOG_POSTS.length - 1 && (
                  <ArrowDropDownIcon
                    style={{
                      display: "block",
                      margin: "auto",
                      transform: "translateY(20px)",
                      width: 40,
                      height: 40,
                    }}
                  />
                )}
              {postIndex !== postsToShow - 1 && (
                <Divider style={{ marginTop: 50, marginBottom: 50 }} />
              )}
            </span>
          ))}
        </CustomPaper>
      </MainWrapper>
    </>
  );
}
