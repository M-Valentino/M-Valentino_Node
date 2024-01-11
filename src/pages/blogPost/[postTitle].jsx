import React from "react";
import { MainWrapper } from "../../components/layout/MainWrapper";
import { CustomHead } from "../../components/layout/CustomHead";
import { CustomPaper } from "../../components/layout/CustomPaper";
import { BLOG_POSTS_NO_COMPONENT } from "../blog";
import { getBlogComponent } from "../blog";
import { BlogDrawer } from "../../components/blogComponents/BlogDrawer";
import { BlogPostHeader } from "../../components/blogComponents/BlogPostHeader";

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
  return (
    <>
      <CustomHead
        title={`Mark Valentino - ${post.title}${
          post.appendQuestionMark ? "?" : ""
        }`}
        descriptionText={post.descriptionText}
        keywords={post.keywords}
      />
      <MainWrapper>
        <BlogDrawer />
        <CustomPaper>
          <BlogPostHeader item={post} isShownOnOwnURL />
          {getBlogComponent(post.title)}
        </CustomPaper>
      </MainWrapper>
    </>
  );
}
