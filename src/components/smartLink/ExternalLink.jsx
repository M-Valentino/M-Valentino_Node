import React, { useState } from "react";
import { Tooltip } from "@mui/material";
import getRootDomain from "get-root-domain";
import { LinkInfoWrapper } from "./LinkInfoWrapper";

export const ExternalLink = ({ href, children }) => {
  const rootDomain = getRootDomain(href);
  const [imgSrc, setImgSrc] = useState(`http://${rootDomain}/favicon.ico`);
  const onError = () => setImgSrc("/language_material_icon.svg");
  return (
    <Tooltip
      followCursor
      title={
        <LinkInfoWrapper rootDomain={rootDomain}>
          <img
            src={imgSrc ? imgSrc : fallback}
            onError={onError}
            alt=""
            style={{
              height: "100%",
              width: "100%",
              margin: "auto",
            }}
          />
        </LinkInfoWrapper>
      }
    >
      <a href={href}>{children}</a>
    </Tooltip>
  );
};
