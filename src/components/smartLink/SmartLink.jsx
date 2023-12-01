import React from "react";
import { ExternalLink } from "./ExternalLink";
import { InternalLink } from "./InternalLink";

export const SmartLink = ({ href, children, style, openInNewTab }) => {
  return (
    <>
      {href.match(/http.*/) ? (
        <ExternalLink href={href} style={style} openInNewTab={openInNewTab}>
          {children}
        </ExternalLink>
      ) : (
        <InternalLink href={href} style={style} openInNewTab={openInNewTab}>
          {children}
        </InternalLink>
      )}
    </>
  );
};
