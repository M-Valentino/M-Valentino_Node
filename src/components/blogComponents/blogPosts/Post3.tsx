import React from "react";
import { SmartLink } from "../../smartLink/SmartLink";
import { Typography } from "@mui/material";
import { CodeBlock, dracula } from "react-code-blocks";

export const Post3 = () => {
  const ExternalLinkCode = `import React, { useState } from "react";
import { Tooltip } from "@mui/material";
import getRootDomain from "get-root-domain";
import { LinkInfoWrapper } from "./LinkInfoWrapper";
import { EXTERNAL_FAVICON_STYLES } from "../consts/stylingValues";

export const ExternalLink = ({ href, children, style, openInNewTab }) => {
  const rootDomain = getRootDomain(href);
  // Default state points to where most websites store favicons.
  const [imgSrc, setImgSrc] = useState(\`https://\${rootDomain}/favicon.ico\`);
  ⧸**
   * If website doesn't have favicon in root directory, Google will have it, albeit at
   * a lower image quality.
   * @returns 16x16 favicon.
   */
  const onError = () =>
  setImgSrc(
    \`https://s2.googleusercontent.com/s2/favicons?domain=https://\${rootDomain}\`
  );
  
  return (
    <>
      {/* These invisble 0.1x0.1 images force prefetching for fast favicon loading. */}
      <img
        src={\`https://\${rootDomain}/favicon.ico\`}
        alt=""
        style={{ height: 0.1, width: 0.1 }}
      />
      <img
        src={\`https://s2.googleusercontent.com/s2/favicons?domain=https://\${rootDomain}\`}
        alt=""
        style={{ height: 0.1, width: 0.1 }}
      />
      <Tooltip
        followCursor
        style={style}
        title={
          <LinkInfoWrapper rootDomain={rootDomain}>
            <img
              src={imgSrc ? imgSrc : fallback}
              onError={onError}
              alt=""
              style={EXTERNAL_FAVICON_STYLES}
            />
          </LinkInfoWrapper>
        }
      >
        {/* no prefetching the page itself is needed so anchor is used instead of Link */}
        <a
          href={href}
          target={openInNewTab ? "_blank" : ""}
          rel={openInNewTab ? "noopener noreferrer" : ""}
        >
          {children}
        </a>
      </Tooltip>
    </>
  );
};
`;
  return (
    <>
      <Typography paragraph>
        Have you ever encountered a link{" "}
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
          like this where you don't know where it goes to
        </a>
        ? Surely you have. Not a whole not of people know this, but if you hover
        over a link in a typical desktop browser you can see the link appear in
        the bottom left corner, but it is so tiny and you have to move your eyes
        quite a bit to see it. You'll also be shown the whole URL too, and it is
        difficult to immediately know what the name of the website is in the
        URL. Lastly, this tiny box in the bottom left corner can be covered up
        by other windows opened on your desktop.
      </Typography>
      <Typography paragraph>
        I have a solution to this problem - Smart Links. In the link I posted
        above, I simply coded it with an anchor tag. However,{" "}
        <SmartLink href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
          with this link I coded it with my own custom component.
        </SmartLink>{" "}
        Hover over it (if you're using a touch screen, press and hold). As you
        can see, a tooltip appears containing the domain name and favicon. You
        can immediately tell where the link goes to. Adding a picture associated
        with the website really helps as{" "}
        <SmartLink href="https://movableink.com/blog/29-incredible-stats-that-prove-the-power-of-visual-marketing">
          your brain processes pictures faster than words.
        </SmartLink>
      </Typography>
      <Typography paragraph>
        Below is the primary code I made for creating Smart Links. How it works
        is that I used a{" "}
        <SmartLink href="https://github.com/datasaucer/get-root-domain">
          library to trim URLS down to the root domain
        </SmartLink>
        . Then I loaded favicons from the domain's root directory if they exist
        (most favicons seem to be stored there). If they don't exist, they are
        loaded from googleusercontent.com, which guarantees to have a favicon
        image if Google indexed the site, albeit at a lower quality. Also if a
        website had no favicon, googleusercontent.com will return a placeholder
        favicon. The root domain and the favicon are then wrapped inside a
        tooltip.
      </Typography>
      <div
        className="codeBlock"
        style={{
          fontFamily: "monospace",
          overflowY: "scroll",
          marginBottom: 15,
        }}
      >
        <CodeBlock
          text={ExternalLinkCode}
          language={"javascript"}
          theme={dracula}
          showLineNumbers={true}
        />
      </div>
      <Typography paragraph>
        For internal links across my site, I mostly did the same thing, except I
        didn't have to do error handling for my own favicon or use a library to
        extract root domains.{" "}
        <SmartLink href="https://github.com/M-Valentino/M-Valentino_NextJS/tree/main/src/components/smartLink">
          You can see the rest of my code here
        </SmartLink>
        . Maybe this invention of mine will take off. Who knows.
      </Typography>
    </>
  );
};
