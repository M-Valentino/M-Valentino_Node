import React, { useState } from "react";
import { Tooltip } from "@mui/material";
import getRootDomain from "get-root-domain";
import { LinkInfoWrapper } from "./LinkInfoWrapper";
import { EXTERNAL_FAVICON_STYLES } from "@/consts/stylingValues";

export const ExternalLink = ({ href, children, style, openInNewTab }) => {
  const rootDomain = getRootDomain(href);
  // Default state points to where most websites store favicons.
  const [imgSrc, setImgSrc] = useState(`https://${rootDomain}/favicon.ico`);
  /**
   * If website doesn't have favicon in root directory, Google will have it, albeit at
   * a lower image quality.
   * @returns 16x16 favicon.
   */
  const onError = () =>
    setImgSrc(
      `https://s2.googleusercontent.com/s2/favicons?domain=https://${rootDomain}`
    );
  return (
    <>
      {/* These invisble 0.1x0.1 images force prefetching for fast favicon loading. */}
      <img
        src={`https://${rootDomain}/favicon.ico`}
        alt=""
        style={{ height: 0.1, width: 0.1 }}
      />
      <img
        src={`https://s2.googleusercontent.com/s2/favicons?domain=https://${rootDomain}`}
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
