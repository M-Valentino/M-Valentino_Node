import React from "react";
import { SmartLink } from "../../smartLink/SmartLink";
import { Typography } from "@mui/material";
import { BASE_64_IMAGES } from "../../../consts/stylingValues";

export const Post4 = () => {
  return (
    <>
      <Typography paragraph>
        HTML5 was initially released all the way back in 2008 and was last
        updated six years ago in 2017. People might think there's not much more
        to improve upon and you can accomplish anything, but I beg to differ. I
        have a few improvements to HTML5 I'm going to share.
      </Typography>
      <Typography variant="h3">Enhanced Base64 compression</Typography>
      <Typography paragraph>
        On the index page of my webpage I have a few base64 images. Two of them
        are for the binary number animations. Since they are so small in size,
        sending an http request to load them would take longer than actually
        encoding them inside the HTML document. So naturally I just encoded them
        in base64. Here are the images:
      </Typography>
      {/* There is CSS specific string data that has to be trimmed */}
      <img
        src={BASE_64_IMAGES.binary.substring(
          5,
          BASE_64_IMAGES.binary.length - 2
        )}
      />
      <img
        src={BASE_64_IMAGES.binaryReverse.substring(
          5,
          BASE_64_IMAGES.binaryReverse.length - 2
        )}
      />
    </>
  );
};
