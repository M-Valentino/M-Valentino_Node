import React, { useState } from "react";
import { Tooltip } from "@mui/material";
import getRootDomain from "get-root-domain";
import { LinkInfoWrapper } from "./LinkInfoWrapper";
import { EXTERNAL_FAVICON_STYLES } from "@/consts/stylingValues";

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
            style={EXTERNAL_FAVICON_STYLES}
          />
        </LinkInfoWrapper>
      }
    >
      <a href={href}>{children}</a>
    </Tooltip>
  );
};
