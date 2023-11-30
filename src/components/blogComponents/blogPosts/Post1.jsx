import React from "react";
import { Stack, Typography, useMediaQuery } from "@mui/material";
import EastIcon from "@mui/icons-material/East";
import {
  LANGUAGE_LINKS,
  LANGUAGES,
  PROJECT_TITLES,
} from "@/consts/projectContent";
import { SmartLink } from "@/components/smartLink/SmartLink";

export const Post1 = () => {
  const isDesktopView = useMediaQuery("(min-width:900px)");
  const isMobileView = useMediaQuery("(max-width:500px)");
  const sideBySideImageStyle = {
    width: isMobileView ? "80%" : 400,
    margin: "auto",
  };

  return (
    <>
      <Typography paragraph>
        I recently came across this pretty nifty{" "}
        <SmartLink
          href={LANGUAGE_LINKS[LANGUAGES.marvinJ]}
        >
          JavaScript image processing library called MarvinJ
        </SmartLink>{" "}
        while creating my{" "}
        <SmartLink href={`/project/${PROJECT_TITLES.imageToDivs}`}>
          Image to Divs project
        </SmartLink>
        . MarvinJ can apply Gaussian blur to images, do Prewitt edge detection,
        make images have a sepia effect, ect. I was really impressed by it as
        I'm a web developer who is also really into graphics programming.
      </Typography>
      <Typography paragraph>
        I noticed that MarvinJ was missing some image processing filters that I
        would expect to see in a typical Photoshop-like image editor, and I also
        noticed that it was open source too. I thought that maybe I could
        contribute to the library, but I soon found out that the library hasn't
        been updated in several years with an old pending pull request. I
        decided that if I was going to contribute, I would just make a fork of
        it and start my own library.
      </Typography>
      <Typography paragraph>
        So,{" "}
        <SmartLink
          href="https://github.com/M-Valentino/marvalj"
        >
          I went and made a fork of the library and called it MarvalJ
        </SmartLink>
        , which is a play on words from my actual name. Soon after, I was able
        to add two functions to the library, with one function for adding black
        and white noise to an image, and one for adding color noise to an image.
        These two image processing filters are common in image editors like Gimp
        and Photopea, and I thought they would be useful to have.
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
        I felt pretty accomplished after being able to expand upon an already
        established library, and I knew I could expand upon it more. So, I added
        scan line filter funtions.
      </Typography>
      <img
        src="/blogImages/scanlines.png"
        alt="painting of a landscape with horizontal scanlines applied."
        style={{
          display: "block",
          width: isMobileView ? "80%" : 400,
          margin: "auto",
        }}
      />
      <Typography paragraph>
        After that, I added a color sort function, which is literally a function
        to sort all the pixels in an image by thier brightness. It may sound
        like a feature that is there just for fun, but this function can be used
        in generating color palletes from images.
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
        What I have written is basically the extent of my progress on MarvinJ.
        What is lacking for this to be widely used by others is a website with
        documentation. Additionally, much of web development these days is
        Node.js based, which MarvinJ and MarvalJ don't integrate well with.{" "}
        <SmartLink
          href="https://github.com/davicrystal/marvinj"
        >
          Someone already made an NPM module for MarvinJ
        </SmartLink>
        . Maybe I should do the same.
      </Typography>
    </>
  );
};
