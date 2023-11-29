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
} from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CloseIcon from "@mui/icons-material/Close";
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
import { BLOG_POSTS_NO_COMPONENT } from "@/pages/blog";

export const BlogDrawer = ({ isDesktopView }) => {
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
  return (
    <>
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
    </>
  );
};
