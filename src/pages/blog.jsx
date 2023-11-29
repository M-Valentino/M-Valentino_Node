import React, { useEffect, useState } from "react";
import Link from "next/link";
import { MainWrapper } from "@/components/layout/MainWrapper";
import { CustomHead } from "@/components/layout/CustomHead";
import { useSpring, animated } from "@react-spring/web";
import {
  Button,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Drawer,
  Typography,
  useMediaQuery,
} from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CloseIcon from "@mui/icons-material/Close";
import { PAGE_TITLES } from "@/consts/pageTitles";
import {
  MUI_PRIMARY_COLOR_DEEP_ORANGE_LIGHT,
  MUI_PRIMARY_COLOR_DEEP_ORANGE,
  MUI_PRIMARY_COLOR_DEEP_ORANGE_DARK,
  OFF_WHITE_COLOR,
  MINUTE_SHADOW,
  MINUTE_SHADOW_SVG,
  BOOKMARK_INITAL_SHADOW,
  BOOKMARK_FINAL_SHADOW,
} from "@/consts/stylingValues";
import { CustomPaper } from "@/components/layout/CustomPaper";
import { MainHeading, SubHeading } from "@/components/layout/Headings";
import { Post1 } from "@/components/blogComponents/blogPosts/Post1";
import { Post2 } from "@/components/blogComponents/blogPosts/Post2";
import { cleanLinkText } from "@/utils/linkFunctions";

export const BLOG_POSTS = [
  {
    component: <Post2 />,
    title: "I Don't Quite Like the Design of My Site",
    date: "November 26, 2023",
  },
  {
    component: <Post1 />,
    title: "Could My Image Processing Library Replace MarvinJ?",
    date: "October 15, 2023",
  },
];

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
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [bookmarkHover, setBookmarkHover] = useState(false);
  const [bookmarkMouseDown, setBookmarkMouseDown] = useState(false);
  const bookmarkMove = useSpring({
    from: {
      backgroundColor: MUI_PRIMARY_COLOR_DEEP_ORANGE,
      transform: "translateX(-35px) rotateY(0deg)",
      boxShadow: BOOKMARK_INITAL_SHADOW,
    },
    to: {
      backgroundColor: bookmarkHover
        ? bookmarkMouseDown
          ? MUI_PRIMARY_COLOR_DEEP_ORANGE_LIGHT
          : MUI_PRIMARY_COLOR_DEEP_ORANGE_DARK
        : MUI_PRIMARY_COLOR_DEEP_ORANGE,
      transform: bookmarkHover
        ? bookmarkMouseDown
          ? "translateX(-10px) rotateY(15deg)"
          : "translateX(-20px) rotateY(0deg)"
        : "translateX(-35px) rotateY(0deg)",
      boxShadow: bookmarkHover ? BOOKMARK_FINAL_SHADOW : BOOKMARK_INITAL_SHADOW,
    },
    config: { mass: 0.5, friction: 18, tension: 600 },
  });
  // Controlls how many blog posts can be seen.
  const [postsToShow, setPostsToShow] = useState(1);
  var oldTime = Date.now();

  // If user scrolled close to the bottom, increment postsToShow.
  const handleScroll = () => {
    if (
      Math.ceil(window.innerHeight + window.scrollY) >=
        document.documentElement.scrollHeight - 5 &&
      oldTime + 500 < Date.now()
    ) {
      setPostsToShow((postsToShow) => postsToShow + 1);
      oldTime = Date.now();
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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

        <Drawer open={drawerOpen} onClose={() => setDrawerOpen(false)}>
          <div>
            <IconButton id="basic-button" onClick={() => setDrawerOpen(false)}>
              <CloseIcon
                color="primary"
                fontSize="large"
                style={{ filter: MINUTE_SHADOW_SVG }}
              />
            </IconButton>
          </div>
          <List>
            {BLOG_POSTS.map((item, listIndex) => (
              <ListItem key={listIndex}>
                <ListItemButton
                  component={Link}
                  href={cleanLinkText(`/blogPost/${item.title}`)}
                >
                  <ListItemText primary={item.title} secondary={item.date} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Drawer>
        {isDesktopView ? (
          <animated.div
            style={{
              display: "inline-block",
              position: "fixed",
              left: 0,
              backgroundColor: MUI_PRIMARY_COLOR_DEEP_ORANGE,
              width: 190,
              paddingTop: 15,
              paddingBottom: 15,
              paddingLeft: 50,
              borderTopRightRadius: 4,
              borderBottomRightRadius: 4,
              cursor: "pointer",
              ...bookmarkMove,
            }}
            onClick={() => setDrawerOpen(!drawerOpen)}
            onMouseOver={() => setBookmarkHover(true)}
            onMouseLeave={() => {
              setBookmarkHover(false);
              setBookmarkMouseDown(false);
            }}
            onMouseDown={() => setBookmarkMouseDown(true)}
            onMouseUp={() => setBookmarkMouseDown(false)}
          >
            <Typography
              style={{
                color: OFF_WHITE_COLOR,
                textShadow: MINUTE_SHADOW,
                userSelect: "none",
              }}
              variant="h6"
            >
              Show All Posts
              <ArrowForwardIosIcon
                style={{
                  transform: "translate(3px, 6px)",
                  filter: MINUTE_SHADOW_SVG,
                }}
              />
            </Typography>
          </animated.div>
        ) : (
          <Button
            variant="contained"
            onClick={() => setDrawerOpen(!drawerOpen)}
            style={{
              display: "block",
              textShadow: MINUTE_SHADOW,
              margin: "auto",
              marginBottom: 20,
            }}
          >
            Show All Posts
          </Button>
        )}
        {BLOG_POSTS.slice(0, postsToShow).map((item, postIndex) => (
          <CustomPaper isDesktopView={isDesktopView} key={postIndex}>
            <SubHeading shrinkFontOn={isLargeMobileView}>
              {item.title}
            </SubHeading>
            <Typography
              variant="h6"
              gutterBottom
              color="secondary"
              style={{ fontStyle: "italic" }}
            >
              Published {item.date}
            </Typography>
            {item.component}
          </CustomPaper>
        ))}
      </MainWrapper>
    </>
  );
}
