import React from "react";
import Head from "next/head";
import Link from "next/link";
import NavBar from "@/components/navbar";
import { getHeadBoilerPlate } from "@/utils/headBoilerPlate";
import { Footer } from "@/components/footerComponents/footer";
import { ThemeProvider } from "@mui/material/styles";
import { MainTheme } from "@/utils/MUITheme";
import {
  MINUTE_SHADOW,
  OFF_WHITE_COLOR,
  MINUTE_SHADOW_TEXT,
} from "@/consts/stylingValues";
import { Stack, Typography, useMediaQuery } from "@mui/material";
import EastIcon from "@mui/icons-material/East";
import {
  LANGUAGE_LINKS,
  LANGUAGES,
  PROJECT_TITLES,
} from "@/consts/projectContent";

export default function Home() {
  const isDesktopView = useMediaQuery("(min-width:900px)");
  const isLargeMobileView = useMediaQuery("(max-width:428px)");
  const sideBySideImageStyle = { width: "70%", height: "70%", margin: "auto" };

  return (
    <>
      <Head>
        <title>Mark Valentino's Tech Blog</title>
        {getHeadBoilerPlate(
          "The tech blog of Mark Valentino - a software engineer."
        )}
        ;
      </Head>

      <ThemeProvider theme={MainTheme}>
        <NavBar activeLink={2} />
        <main>
          <Typography
            variant={!isDesktopView ? "h4" : "h3"}
            fontWeight={600}
            textAlign="center"
            style={{
              textShadow: MINUTE_SHADOW_TEXT,
              marginBottom: 20
            }}
          >
            Mark Valentino's Tech Blog
          </Typography>
          <div
            style={{
              maxWidth: 900,
              margin: "auto",
              marginBottom: 50,
              backgroundColor: OFF_WHITE_COLOR,
              borderRadius: 4,
              boxShadow: MINUTE_SHADOW,
              padding: isDesktopView ? 60 : 10,
            }}
          >
            <Typography
              variant={isLargeMobileView ? "h5" : "h4"}
              color="text.primary"
              style={{
                marginBottom: 20,
                textShadow: MINUTE_SHADOW_TEXT,
                fontWeight: "bolder",
              }}
            >
              Could My Image Processing Library Replace MarvinJ?
            </Typography>
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
              that I would expect to see in a typical Photoshop-like image
              editor, and I also noticed that it was open source too. I thought
              that maybe I could contribute to the library, but I soon found out
              that the library hasn't been updated in several years with an old
              pending pull request. I decided that if I was going to contribute,
              I would just make a fork of it and start my own library.
            </Typography>
            <Typography paragraph>
              So,{" "}
              <Link href="https://github.com/M-Valentino/marvalj">
                I went and made a fork of the library and called it MarvalJ
              </Link>
              , which is a play on words from my actual name. Soon after, I was
              able to add two functions to the library, with one function for
              adding black and white noise to an image, and one for adding color
              noise to an image. These two image processing filters are common
              in image editors like Gimp and Photopea, and I thought they would
              be useful to have.
            </Typography>
            <Stack direction={isDesktopView ? "row" : "column"}>
              <img
                src="/blogImages/blackAndWhiteNoise.png"
                style={sideBySideImageStyle}
              />
              <img
                src="/blogImages/colorNoise.png"
                style={sideBySideImageStyle}
              />
            </Stack>
            <Typography paragraph>
              I felt pretty accomplished after being able to expand upon an
              already established library, and I knew I could expand upon it
              more. So, I added scan line filter funtions.
            </Typography>
            <img
              src="/blogImages/scanlines.png"
              style={{
                display: "block",
                width: "50%",
                height: "50%",
                margin: "auto",
              }}
            />
            <Typography paragraph>
              After that, I added a color sort function, which is literally a
              function to sort all the pixels in an image by thier brightness.
              It may sound like a feature that is there just for fun, but this
              function can be used in generating color palletes from images.
            </Typography>
            <Stack direction="row">
              <img
                src="/blogImages/originalImage.png"
                style={sideBySideImageStyle}
              />
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <EastIcon />
              </div>
              <img
                src="/blogImages/colorSort.png"
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
          </div>
        </main>
        <Footer />
      </ThemeProvider>
    </>
  );
}
