import React, { useState } from "react";
import { Tooltip } from "@mui/material";
import getRootDomain from "get-root-domain";

export const ExternalLink = ({ href, children }) => {
  const handleExternalOrInternalLink = () => {
    if (href.match(/http.*/)) {
      return getRootDomain(href);
    }
    return "mark-valentino.vercel.app"
  }
  const rootDomain = handleExternalOrInternalLink();
  const [imgSrc, setImgSrc] = useState(`http://${rootDomain}/favicon.ico`);
  const onError = () => setImgSrc("/language_material_icon.svg");
  return (
    <Tooltip
      title={
        <>
          <img
            src={imgSrc ? imgSrc : fallback}
            onError={onError}
            alt=""
            style={{
              height: 24,
              display: "block",
              margin: "auto",
              filter: "drop-shadow(0 1px 4px rgba(255, 255, 255, 0.25))",
            }}
          />

          <div style={{ marginTop: 5 }}>{rootDomain}</div>
        </>
      }
    >
      <a href={href}>{children}</a>
    </Tooltip>
  );
};
