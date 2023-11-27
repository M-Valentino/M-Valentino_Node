import React, { useEffect, useState } from "react";
import { MainWrapper } from "@/components/layout/MainWrapper";
import { CustomHead } from "@/components/layout/CustomHead";
import { MainHeading } from "@/components/layout/Headings";
import { useMediaQuery } from "@mui/material";
import { PAGE_TITLES } from "@/consts/pageTitles";
import { Post1 } from "@/components/blogPosts/Post1";
import { Post2 } from "@/components/blogPosts/Post2";

export default function Home() {
  const isDesktopView = useMediaQuery("(min-width:900px)");
  const isLargeMobileView = useMediaQuery("(max-width:428px)");
  // Controlls how many blog posts can be seen.
  const [postsToShow, setPostsToShow] = useState(1);

  // If user scrolled to the bottom, increment postsToShow.
  const handleScroll = () => {
    if (
      Math.ceil(window.innerHeight + window.scrollY) >=
      document.documentElement.scrollHeight
    ) {
      setPostsToShow((postsToShow) => postsToShow + 1);
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
          Mark Valentino's Tech Blog
        </MainHeading>
        <Post2
          isDesktopView={isDesktopView}
          isLargeMobileView={isLargeMobileView}
        />
        {postsToShow > 1 && (
          <Post1
            isDesktopView={isDesktopView}
            isLargeMobileView={isLargeMobileView}
          />
        )}
      </MainWrapper>
    </>
  );
}
