import React from "react";
import { SmartLink } from "../../smartLink/SmartLink";
import { Typography } from "@mui/material";
import { BASE_64_IMAGES } from "../../../consts/stylingValues";
import { CodeBlock, dracula } from "react-code-blocks";

export const Post4 = () => {
  // There is CSS specific string data that has to be trimmed
  const trimmedb64String = BASE_64_IMAGES.binary.substring(
    5,
    BASE_64_IMAGES.binary.length - 2
  );
  const menuCode = `<nav>
    <topnav>
      <mi href="/">Home</mi>
      <mi href="/blog">Blog</mi>
      <mi href="/contact">Contact</mi>
    </topnav>
  </nav>`;
  return (
    <>
      <Typography paragraph>
        HTML5 was initially released all the way back in 2008 and was last
        updated six years ago in 2017. People might think there's not much more
        to improve upon and you can accomplish anything, but I beg to differ. I
        have a few improvements to HTML5 I'm sharing.
      </Typography>
      <Typography variant="h5" style={{ fontWeight: "bold" }}>
        Enhanced Base64 Compression
      </Typography>
      <Typography paragraph>
        On the index page of my webpage I have a few base64 images. Two of them
        are for the binary number animations. Since they are so small in size,
        sending an http request to load them would take longer than actually
        encoding them inside the HTML document. So naturally I just encoded them
        in base64. Here is one one of them {"(I upscaled it)"}:
      </Typography>
      <img
        src={trimmedb64String}
        width={88}
        height={56}
        style={{ imageRendering: "pixelated" }}
        alt="animated scrolling pixel art of binary numbers"
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
          showLineNumbers={false}
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
          showLineNumbers={false}
          wrapLongLines
        />
      </div>
      <Typography paragraph>
        '¡' is an upside down exclamation point and the first visible character
        in the extended ASCII table. It is set to be equal to the substring
        repeated five times. Now, if we insert '¡' into the base64 data, the
        data becomes shorter:
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
          showLineNumbers={false}
          wrapLongLines
        />
      </div>
      <Typography paragraph>
        The base64 image has been reduced from 1034 characters to 794
        characters. So, what if there are multiple repeated substrings? We can
        just declare another variable like '¢'. We have 94 single letter
        variables in the extended ASCII table to choose from.
      </Typography>
      <Typography paragraph>
        Since webpages are already typically compressed when being sent over
        HTTP, this might not improve compression all that much, BUT it will
        definitely improve code in codebases where developers won't have to
        scroll so far to the right just to had a semi colon to the end of a base
        64 image string like I had to do when making this blog post.
      </Typography>
      <Typography variant="h5" style={{ fontWeight: "bold" }}>
        Make the Hamburger Menu Easier to Code.
      </Typography>
      <Typography paragraph>
        The hamburger menu has become a defacto standard in designing mobile
        user interfaces, yet it still requires some work to implement while also
        having a different menu for desktop users. Creating a basic hamburger
        menu for a website not only involves HTML, but it also involves CSS and
        JavaScript{" "}
        <SmartLink href="https://www.w3schools.com/howto/howto_js_mobile_navbar.asp">
          as you can see in this example from W3 Schools
        </SmartLink>
        . Now, if you wanted to have both a desktop menu and a mobile hamburger
        menu, you would need to use CSS or javaScript to switch between the
        menus depending on the resolution.
      </Typography>
      <Typography paragraph>
        Due to the learning curve required in creating a responsive user
        interface, beginners to web development will only make a desktop
        friendly menu because they aren't that skilled with CSS or may not know
        a thing with JavaScript. It used to be relatively easy to make an
        acceptable simple website in the early days of the internet because
        people only had to worry about coding for desktop users. I believe HTML
        has some catching up to do with ease of use. That is why I propose there
        should a new HTML element that will easily create a responsive menu with
        JavaScript and CSS being optional.
      </Typography>
      <Typography paragraph>
        Here is how my solution works. A new element called "topnav" will be
        created. topnav elements contain "mi"s which is menu item for short.
        They will simply be text with an optional href or JavaScript event.
      </Typography>
      <div
        style={{
          fontFamily: "monospace",
          overflowY: "scroll",
          marginBottom: 15,
        }}
      >
        <CodeBlock
          text={menuCode}
          language={"javascript"}
          theme={dracula}
          showLineNumbers={true}
          wrapLongLines
        />
      </div>
      <Typography paragraph>
        On desktop screens, it will appear simply as text with underlines
        arranged in a row with some padding between the menu items. If the coder
        wanted the menu to be vertical, a new CSS rule can be applied to change
        the orientation.
      </Typography>
      <Typography paragraph>
        On mobile screens, the menu will be aligned to the right of the screens
        by default and would show a typical hamburger menu icon. Potentially it
        could just be non-selectable text containing this character: "☰", the
        "Trigram for Heaven". Having the icon be text by default would allow for
        browser developers to easily code it into their rendering engine. since
        the hamburger icon could be styled to have a different color, have a
        shadow, etc. When the hamburger menu icon is clicked, simple white box
        below containing the menu items is displayed with each menu item ordered
        vertically.
      </Typography>
      <Typography paragraph>
        Now here is the really interesting part. In order for the switch to
        happen from desktop menus to mobile hamburger menus, the browser chooses
        when this happens. On mobile Safari or on Chrome for Android, the
        browser can just choose to show the hamburger menu. No @media rules are
        necessary, although it would be a good idea to provide CSS options to
        override the default browser behavior.
      </Typography>
      <Typography paragraph>
        This is a real simple solution. Obviously there would need to be a lot
        of additions to the CSS standard being made, but implementing these new
        elements would make HTML5 easier for beginners. The hamburger menu is
        more common on websites than tables or even{" "}
        <SmartLink href="https://www.w3schools.com/tags/tag_meter.asp">
          the obscure meter tag
        </SmartLink>
        , so I believe there is a strong case for it being added to the HTML
        standard.
      </Typography>
    </>
  );
};
