import React from "react";
import { ExternalLink } from "./ExternalLink";
import { InternalLink } from "./InternalLink";

export const SmartLink = ({ href, children }) => {
  return (
    <>
      {href.match(/http.*/) ? (
        <ExternalLink href={href}>{children}</ExternalLink>
      ) : (
        <InternalLink href={href}>{children}</InternalLink>
      )}
    </>
  );
};
