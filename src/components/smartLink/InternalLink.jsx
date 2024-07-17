import React from "react";
import Link from "next/link";
import { Tooltip } from "@mui/material";
import { LinkInfoWrapper } from "./LinkInfoWrapper";
import { EXTERNAL_FAVICON_STYLES } from "../../consts/stylingValues";
import { LINKS } from "../../consts/pageTitles";

export const InternalLink = ({ href, children, style, openInNewTab }) => {
  return (
    <Tooltip
      followCursor
      style={style}
      title={
        <LinkInfoWrapper rootDomain={LINKS.domain}>
          <img src="/favicon.ico" alt="" style={EXTERNAL_FAVICON_STYLES} />
        </LinkInfoWrapper>
      }
    >
      <Link
        href={href}
        target={openInNewTab ? "_blank" : ""}
        rel={openInNewTab ? "noopener noreferrer" : ""}
      >
        {children}
      </Link>
    </Tooltip>
  );
};
