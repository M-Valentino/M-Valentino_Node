import React, { useState } from "react";
import { Tooltip } from "@mui/material";
import getRootDomain from "get-root-domain";

export const ExternalLink = ({ href, children }) => {
  const rootDomain = getRootDomain(href);
  const [imgSrc, setImgSrc] = useState(`http://${rootDomain}/favicon.ico`);
  const onError = () => setImgSrc("/language_material_icon.svg");
  return (
    <Tooltip
      followCursor
      title={
        <div style={{ height: 55 }}>
          <div
            style={{
              backgroundColor: "#fff",
              height: 22,
              width: 22,
              padding: 6,
              borderRadius: "50%",
              margin: "auto",
            }}
          >
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
          </div>
          <div style={{ marginTop: 5 }}>{rootDomain}</div>
        </div>
      }
    >
      <a href={href}>{children}</a>
    </Tooltip>
  );
};
