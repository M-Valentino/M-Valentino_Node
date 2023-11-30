import React from "react";
import { ExternalLink } from "./ExternalLink";
import { InternalLink } from "./InternalLink";

export const SmartLink = ({ href, children }) => {
  return (
    <>
      {href.match(/http.*/) ? (
        <ExternalLink href={href} children={children} />
      ) : (
        <InternalLink href={href} children={children} />
      )}
    </>
  );
};
