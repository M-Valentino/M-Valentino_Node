import React, { useEffect, useState } from "react";
import { MainWrapper } from "@/components/layout/MainWrapper";
import { CustomHead } from "@/components/layout/CustomHead";
import { useSpring, animated } from "@react-spring/web";
import {
  List,
  ListItem,
  ListItemText,
  SwipeableDrawer,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { PAGE_TITLES } from "@/consts/pageTitles";
import {
  MUI_PRIMARY_COLOR_DEEP_ORANGE,
  MUI_PRIMARY_COLOR_DEEP_ORANGE_DARK,
  OFF_WHITE_COLOR,
  CARD_AND_TABLE_SHADOW,
  MINUTE_SHADOW,
} from "@/consts/stylingValues";
import { CustomPaper } from "@/components/layout/CustomPaper";
import { MainHeading, SubHeading } from "@/components/layout/Headings";
import { Post1 } from "@/components/blogPosts/Post1";
import { Post2 } from "@/components/blogPosts/Post2";

export default function Home() {
  const isDesktopView = useMediaQuery("(min-width:900px)");
  const isLargeMobileView = useMediaQuery("(max-width:428px)");
  const [drawerOpen, setDrawerOpen] = useState(true);
  const [bookmarkHover, setBookmarkHover] = useState(false);
  const bookmarkMove = useSpring({
    from: {
      backgroundColor: MUI_PRIMARY_COLOR_DEEP_ORANGE,
      transform: "translateX(-20px)",
    },
    to: {
      backgroundColor: bookmarkHover
        ? MUI_PRIMARY_COLOR_DEEP_ORANGE_DARK
        : MUI_PRIMARY_COLOR_DEEP_ORANGE,
      transform: bookmarkHover ? "translateX(-5px)" : "translateX(-20px)",
    },
    config: { mass: 0.5, friction: 18, tension: 600 },
  });
  // Controlls how many blog posts can be seen.
  const [postsToShow, setPostsToShow] = useState(1);
  var oldTime = Date.now();

  // If user scrolled 98% or more to the bottom, increment postsToShow.
  const handleScroll = () => {
    if (
      Math.ceil(window.innerHeight + window.scrollY) >=
        document.documentElement.scrollHeight - 5 &&
      oldTime + 1500 < Date.now()
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

  const posts = [
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

  return (
    <>
      <CustomHead
        descriptionText="The tech blog of Mark Valentino - a software engineer."
        title="Mark Valentino's Tech Blog"
        keywords="technology, programming, coding"
      />

      <MainWrapper activeLink={PAGE_TITLES.blog}>
        <MainHeading shrinkFontOn={!isDesktopView} addMarginBottomOn={true}>
          Mark Valentino's Tech Blog
        </MainHeading>

        <SwipeableDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)}>
          <List>
            {posts.map((item, listIndex) => (
              <ListItem key={listIndex}>
                <ListItemText primary={item.title} secondary={item.date} />
              </ListItem>
            ))}
          </List>
        </SwipeableDrawer>
        <animated.div
          style={{
            display: "inline-block",
            position: "fixed",
            left: 0,
            backgroundColor: MUI_PRIMARY_COLOR_DEEP_ORANGE,
            width: 170,
            padding: 15,
            cursor: "pointer",
            boxShadow: CARD_AND_TABLE_SHADOW,
            ...bookmarkMove,
          }}
          onClick={() => setDrawerOpen(!drawerOpen)}
          onMouseOver={() => setBookmarkHover(true)}
          onMouseLeave={() => setBookmarkHover(false)}
        >
          <Typography
            style={{
              color: OFF_WHITE_COLOR,
              textAlign: "center",
              textShadow: MINUTE_SHADOW,
            }}
            variant="h6"
          >
            Show All Posts
          </Typography>
        </animated.div>
        {posts.slice(0, postsToShow).map((item, postIndex) => (
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
