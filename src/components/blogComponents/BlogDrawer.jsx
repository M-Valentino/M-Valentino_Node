import React, { useState } from "react";
import Link from "next/link";
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
import { COLORS } from "@/consts/stylingValues";
import {
  MINUTE_SHADOW,
  MINUTE_SHADOW_SVG,
  BOOKMARK_INITAL_SHADOW,
  BOOKMARK_FINAL_SHADOW,
} from "@/consts/stylingValues";
import { BLOG_POSTS_NO_COMPONENT } from "@/pages/blog";

/**
 * This Component handles the code for displaying the list of blog posts
 * in an MUI drawer as well as the buttons (desktop and mobile versions)
 * for opening the drawer.
 * @returns component
 */
export const BlogDrawer = () => {
  /**
   * Bookmark button overlaps the CustomPaper too much when the screen is
   * under 1366px.
   */
  const isDesktopView = useMediaQuery("(min-width:1260px)");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [bookmarkHover, setBookmarkHover] = useState(false);
  const [bookmarkMouseDown, setBookmarkMouseDown] = useState(false);

  const bookmarkMove = useSpring({
    from: {
      backgroundColor: COLORS.mainOrange,
      transform: "translateX(-35px) rotateY(0deg)",
      boxShadow: BOOKMARK_INITAL_SHADOW,
    },
    to: {
      backgroundColor: bookmarkHover
        ? bookmarkMouseDown
          ? COLORS.lightOrange
          : COLORS.darkOrange
        : COLORS.mainOrange,
      transform: bookmarkHover
        ? bookmarkMouseDown
          ? "translateX(-10px) rotateY(15deg)"
          : "translateX(-20px) rotateY(0deg)"
        : "translateX(-35px) rotateY(0deg)",
      boxShadow: bookmarkHover ? BOOKMARK_FINAL_SHADOW : BOOKMARK_INITAL_SHADOW,
    },
    config: { mass: 0.5, friction: 18, tension: 600 },
  });

  const BUTTON_TEXT = "All Posts";

  return (
    <>
      <Drawer open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <div>
          {/* This is the only way to close the drawer on mobile. Including this 
          on desktop is good for UX */}
          <IconButton id="basic-button" onClick={() => setDrawerOpen(false)}>
            <CloseIcon
              color="primary"
              fontSize="large"
              style={{ filter: MINUTE_SHADOW_SVG }}
            />
          </IconButton>
        </div>
        <List>
          {BLOG_POSTS_NO_COMPONENT.map((item, listIndex) => (
            <ListItem key={listIndex}>
              <ListItemButton component={Link} href={`/blogPost/${item.title}`}>
                <ListItemText
                  primary={`${item.title}${item.appendQuestionMark ? "?" : ""}`}
                  secondary={item.date}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      {isDesktopView ? (
        // This is a button made to resemble something made by MUI
        <animated.div
          style={{
            display: "inline-block",
            position: "fixed",
            left: 0,
            backgroundColor: COLORS.mainOrange,
            width: 130,
            paddingTop: 15,
            paddingBottom: 15,
            // Extra padding is needed here since the animations intentionally overshoot.
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
              color: COLORS.offWhiteColor,
              textShadow: MINUTE_SHADOW,
              userSelect: "none",
            }}
            variant="h6"
          >
            {BUTTON_TEXT}
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
            margin: "auto",
            marginBottom: 20,
          }}
        >
          {BUTTON_TEXT}
        </Button>
      )}
    </>
  );
};
