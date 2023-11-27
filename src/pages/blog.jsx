import React from "react";
import Link from "next/link";
import { MainWrapper } from "@/components/layout/MainWrapper";
import { CustomHead } from "@/components/layout/CustomHead";
import { CustomPaper } from "@/components/layout/CustomPaper";
import { MainHeading, SubHeading } from "@/components/layout/Headings";
import { Stack, Typography, useMediaQuery } from "@mui/material";
import EastIcon from "@mui/icons-material/East";
import {
  LANGUAGE_LINKS,
  LANGUAGES,
  PROJECT_TITLES,
} from "@/consts/projectContent";
import { PAGE_TITLES } from "@/consts/pageTitles";

export default function Home() {
  const isDesktopView = useMediaQuery("(min-width:900px)");
  const isLargeMobileView = useMediaQuery("(max-width:428px)");
  const sideBySideImageStyle = { width: "70%", height: "70%", margin: "auto" };

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
        <CustomPaper isDesktopView={isDesktopView}>
          <SubHeading shrinkFontOn={isLargeMobileView}>
            I Don't Quite Like the Design of My Site
          </SubHeading>
          <Typography
            variant="h6"
            gutterBottom
            color="secondary"
            style={{ fontStyle: "italic" }}
          >
            Published November 26, 2023
          </Typography>
          <Typography paragraph>
            I'm sure this sounds shocking to people reading this blog, but I'm
            not the most fond of how my website looks. So, why did I make the
            site look like this in the first place? The short answer is:
            marketability.
          </Typography>
          <Typography paragraph>
            My taste in design is kinda out there. I like maximalism instead of
            minimalist. I like noncomfornity over conformity. There is nothing
            wrong with my tastes, however, I can't just design a website
            according to what I think looks good. Most people would either
            dislike it or think of me as not having good web design skills.
          </Typography>
          <Typography paragraph>
            Below is an example of an old "professional" website I created where
            I completely ignored nearly every convention in web design and made
            what I wanted to make:
          </Typography>
          <img
            src="/blogImages/neocities_professional_website.webp"
            style={{ width: "100%" }}
          />
          <Typography paragraph>
            I don't think many hiring managers would take that website too
            seriously.
          </Typography>
          <Typography paragraph>
            So, going back to my current website, people have told me my website
            looks great, and I know it looks modern. The reason why is because
            I'm following web design trends, and I'm using Material UI and
            custom components resembling what they use. Part of me does like the
            design, but I feel a little empty inside looking at it. To me my
            site looks boring, sterile, and not unique enough. Part of it is
            because I haven't fully decorated it all the way, but even when I
            achieve that, I still wouldn't fully be proud of it.
          </Typography>
          <Typography paragraph>
            All is not doom and gloom. Coding whatever I wanted to code, has
            exposed me to a lot of facets of CSS and JS that I wouldn't have
            even touched otherwise.{" "}
            <Link href="https://neocities.org/browse">Neocities</Link> exists
            too where going against the grain is even celebrated.
          </Typography>
        </CustomPaper>

        <CustomPaper isDesktopView={isDesktopView}>
          <SubHeading shrinkFontOn={isLargeMobileView}>
            Could My Image Processing Library Replace MarvinJ?
          </SubHeading>
          <Typography
            variant="h6"
            gutterBottom
            color="secondary"
            style={{ fontStyle: "italic" }}
          >
            Published October 15, 2023
          </Typography>
          <Typography paragraph>
            I recently came across this pretty nifty{" "}
            <Link href={LANGUAGE_LINKS[LANGUAGES.marvinJ]}>
              JavaScript image processing library called MarvinJ
            </Link>{" "}
            while creating my{" "}
            <Link href={`/project/${PROJECT_TITLES.imageToDivs}`}>
              Image to Divs project
            </Link>
            . MarvinJ can apply Gaussian blur to images, do Prewitt edge
            detection, make images have a sepia effect, ect. I was really
            impressed by it as I'm a web developer who is also really into
            graphics programming.
          </Typography>
          <Typography paragraph>
            I noticed that MarvinJ was missing some image processing filters
            that I would expect to see in a typical Photoshop-like image editor,
            and I also noticed that it was open source too. I thought that maybe
            I could contribute to the library, but I soon found out that the
            library hasn't been updated in several years with an old pending
            pull request. I decided that if I was going to contribute, I would
            just make a fork of it and start my own library.
          </Typography>
          <Typography paragraph>
            So,{" "}
            <Link href="https://github.com/M-Valentino/marvalj">
              I went and made a fork of the library and called it MarvalJ
            </Link>
            , which is a play on words from my actual name. Soon after, I was
            able to add two functions to the library, with one function for
            adding black and white noise to an image, and one for adding color
            noise to an image. These two image processing filters are common in
            image editors like Gimp and Photopea, and I thought they would be
            useful to have.
          </Typography>
          <Stack direction={isDesktopView ? "row" : "column"}>
            <img
              src="/blogImages/blackAndWhiteNoise.png"
              alt="painting of a landscape with black and white noise applied."
              style={sideBySideImageStyle}
            />
            <img
              src="/blogImages/colorNoise.png"
              alt="painting of a landscape with color noise applied."
              style={sideBySideImageStyle}
            />
          </Stack>
          <Typography paragraph>
            I felt pretty accomplished after being able to expand upon an
            already established library, and I knew I could expand upon it more.
            So, I added scan line filter funtions.
          </Typography>
          <img
            src="/blogImages/scanlines.png"
            alt="painting of a landscape with horizontal scanlines applied."
            style={{
              display: "block",
              width: isDesktopView ? "50%" : "70%",
              height: isDesktopView ? "50%" : "70%",
              margin: "auto",
            }}
          />
          <Typography paragraph>
            After that, I added a color sort function, which is literally a
            function to sort all the pixels in an image by thier brightness. It
            may sound like a feature that is there just for fun, but this
            function can be used in generating color palletes from images.
          </Typography>
          <Stack direction={isDesktopView ? "row" : "column"}>
            <img
              src="/blogImages/originalImage.png"
              alt="The original painting of a landscape."
              style={sideBySideImageStyle}
            />
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transform: isDesktopView ? "rotate(0)" : "rotate(90deg)",
              }}
            >
              <EastIcon />
            </div>
            <img
              src="/blogImages/colorSort.png"
              alt="painting of a landscape with all it's colors sorted from darkest to lightest."
              style={sideBySideImageStyle}
            />
          </Stack>
          <Typography paragraph>
            What I have written is basically the extent of my progress on
            MarvinJ. What is lacking for this to be widely used by others is a
            website with documentation. Additionally, much of web development
            these days is Node.js based, which MarvinJ and MarvalJ don't
            integrate well with.{" "}
            <Link href="https://github.com/davicrystal/marvinj">
              Someone already made an NPM module for MarvinJ
            </Link>
            . Maybe I should do the same.
          </Typography>
        </CustomPaper>
      </MainWrapper>
    </>
  );
}
