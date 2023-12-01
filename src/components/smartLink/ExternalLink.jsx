import React, { useState } from "react";
import { Tooltip } from "@mui/material";
import getRootDomain from "get-root-domain";
import { LinkInfoWrapper } from "./LinkInfoWrapper";
import { EXTERNAL_FAVICON_STYLES } from "@/consts/stylingValues";

export const ExternalLink = ({ href, children, style, openInNewTab }) => {
  const rootDomain = getRootDomain(href);
  const [imgSrc, setImgSrc] = useState(`http://${rootDomain}/favicon.ico`);
  const onError = () => setImgSrc("/language_material_icon.svg");
  return (
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
      <a
        href={href}
        target={openInNewTab ? "_blank" : ""}
        rel={openInNewTab ? "noopener noreferrer" : ""}
      >
        {children}
      </a>
    </Tooltip>
  );
};
