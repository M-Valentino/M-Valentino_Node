import React, { FC } from "react";
import { ExternalLink } from "./ExternalLink";
import { InternalLink } from "./InternalLink";

interface SmartLinkProps {
  href: string;
  children: FC | string;
  style?: object;
  openInNewTab?: boolean;
}

export const SmartLink: React.FC<SmartLinkProps> = ({
  href,
  children,
  style,
  openInNewTab,
}) => {
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
