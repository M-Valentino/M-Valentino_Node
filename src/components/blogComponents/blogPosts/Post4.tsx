import React from "react";
import { SmartLink } from "../../smartLink/SmartLink";
import { Typography } from "@mui/material";
import { BASE_64_IMAGES } from "../../../consts/stylingValues";
import { CodeBlock, dracula } from "react-code-blocks";

export const Post4 = () => {
  const trimmedb64String = BASE_64_IMAGES.binary.substring(
    5,
    BASE_64_IMAGES.binary.length - 2
  );
  return (
    <>
      <Typography paragraph>
        HTML5 was initially released all the way back in 2008 and was last
        updated six years ago in 2017. People might think there's not much more
        to improve upon and you can accomplish anything, but I beg to differ. I
        have a few improvements to HTML5 I'm sharing.
      </Typography>
      <Typography variant="h5" style={{ fontWeight: "bold" }}>
        Enhanced Base64 compression
      </Typography>
      <Typography paragraph>
        On the index page of my webpage I have a few base64 images. Two of them
        are for the binary number animations. Since they are so small in size,
        sending an http request to load them would take longer than actually
        encoding them inside the HTML document. So naturally I just encoded them
        in base64. Here is one one of them {"(I upscaled it)"}:
      </Typography>
      {/* There is CSS specific string data that has to be trimmed */}
      <img
        src={trimmedb64String}
        width={88}
        height={56}
        style={{ imageRendering: "pixelated" }}
      />
      <Typography paragraph>
        Now here is the base64 code for the image:
      </Typography>
      <div
        style={{
          fontFamily: "monospace",
          overflowY: "scroll",
          marginBottom: 15,
        }}
      >
        <CodeBlock
          text={trimmedb64String}
          language={"javascript"}
          theme={dracula}
          showLineNumbers={true}
          wrapLongLines
        />
      </div>
      <Typography paragraph>
        If you look closely, you can see that this substring is repeated 5
        times: "wtJbWFnZU1hZ2ljaw1nYW1tYT0wLjQ1NDU1ACH5BAkKAAEALAAAAAALAAcAAAI".
        In total,
        "wtJbWFnZU1hZ2ljaw1nYW1tYT0wLjQ1NDU1ACH5BAkKAAEALAAAAAALAAcAAAI"
        contains 62 characters. Multiply that by five and you have 310
        characters of redundancy. Since ASCII has 128 possible characters and
        base64 has of course, 64 possible characters, we can use some extra
        characters to define in a base64 string, variables for substrings. Let's
        say, we define the variable space for a base64 variable like this:
      </Typography>
      <div
        style={{
          fontFamily: "monospace",
          overflowY: "scroll",
          marginBottom: 15,
        }}
      >
        <CodeBlock
          text="'data:image/gif;base64,¡=wtJbWFnZU1hZ2ljaw1nYW1tYT0wLjQ1NDU1ACH5BAkKAAEALAAAAAALAAcAAAI,R0lGODlhCw..."
          language={"javascript"}
          theme={dracula}
          showLineNumbers={true}
          wrapLongLines
        />
      </div>
      <Typography paragraph>
        '¡' is an upsite down exclamation point and the first visible character
        in the extended ASCII table. It is set to be equal to the substring
        repeated five times. Now, if we insert '¡' into the base64 data, the data becomes shorter:
      </Typography>
      <div
        style={{
          fontFamily: "monospace",
          overflowY: "scroll",
          marginBottom: 15,
        }}
      >
        <CodeBlock
          text="data:image/gif;base64,¡=wtJbWFnZU1hZ2ljaw1nYW1tYT0wLjQ1NDU1ACH5BAkKAAEALAAAAAALAAcAAAI,R0lGODlhCwAHAPAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh/¡QDIJ2CGuc3JIR2ofzZC26AgAh/¡PRB5guHmr2JPTVdvyjS8XACH/C0ltYWdlTWFnaWNrDWdhbW1hPTAuNDU0NTUAIfkECQoAAQAsAAAAAAsABwAAAg+MA3B4yuhenIbWi2WbvAAAIf8LSW1hZ2VNYWdpY2sNZ2FtbWE9MC40NTQ1NQAh+QQJCgABACwAAAAACwAHAAACEIwBdprRyJZ0s9GLX2QWgQIAIf8LSW1hZ2VNYWdpY2sNZ2FtbWE9MC40NTQ1NQAh+QQJCgABACwAAAAACwAHAAACD0wAZrl9fFx0sEo781MoFQAh/¡QDBBpimvtoEyT2huZeuykAgAh/¡QBIJxiWvpoFST2hsbfI2HAgAh/¡PRB6GpqB5noyrQoonlW4VACH/C0ltYWdlTWFnaWNrDWdhbW1hPTAuNDU0NTUAIfkECQoAAQAsAAAAAAsABwAAAhCMA4eQe93QM7HSeWXWj/UCACH/C0ltYWdlTWFnaWNrDWdhbW1hPTAuNDU0NTUAIfkECQoAAQAsAAAAAAsABwAAAg+MYYeau/Fcm5DWiyUEERUAIf8LSW1hZ2VNYWdpY2sNZ2FtbWE9MC40NTQ1NQAh+QQJCgABACwAAAAACwAHAAACD0xgBqh8mhyTEdqH82ySFQA7"
          language={"javascript"}
          theme={dracula}
          showLineNumbers={true}
          wrapLongLines
        />
      </div>
    </>
  );
};
