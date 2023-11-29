import React from "react";
import { MainWrapper } from "@/components/layout/MainWrapper";
import { Typography, useMediaQuery } from "@mui/material";
import { CustomHead } from "@/components/layout/CustomHead";
import { CustomPaper } from "@/components/layout/CustomPaper";
import { SubHeading } from "@/components/layout/Headings";
import { BLOG_POSTS_NO_COMPONENT } from "../blog";
import { getBlogComponent } from "../blog";
import { BlogDrawer } from "@/components/blogComponents/BlogDrawer";

// Function to get all possible paths for individual post pages
export const getStaticPaths = async () => {
  const paths = BLOG_POSTS_NO_COMPONENT.map((key) => {
    return { params: { postTitle: key.title } };
  });

  return { paths, fallback: false };
};

// Function to get all possible data for individual post pages (except for postExtraContent components)
export const getStaticProps = async (context) => {
  const post = BLOG_POSTS_NO_COMPONENT.find(
    (obj) => obj.title === context.params.postTitle
  );
  return { props: { post: post } };
};

export default function BlogTemplate({ post }) {
  const isDesktopView = useMediaQuery("(min-width:900px)");
  const isLargeMobileView = useMediaQuery("(max-width:428px)");
  return (
    <>
      <CustomHead
        title={`Mark Valentino - ${post.title}${
          post.appendQuestionMark ? "?" : ""
        }`}
      />
      <MainWrapper>
        <BlogDrawer isDesktopView={isDesktopView} />
        <CustomPaper isDesktopView={isDesktopView}>
          <SubHeading shrinkFontOn={isLargeMobileView}>
            {post.title}
            {post.appendQuestionMark ? "?" : ""}
          </SubHeading>
          <Typography
            variant="h6"
            gutterBottom
            color="secondary"
            style={{ fontStyle: "italic" }}
          >
            Published {post.date}
          </Typography>
          {getBlogComponent(post.title)}
        </CustomPaper>
      </MainWrapper>
    </>
  );
}
