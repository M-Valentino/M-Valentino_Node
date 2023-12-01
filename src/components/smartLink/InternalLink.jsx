import React from "react";
import Link from "next/link";
import { Tooltip } from "@mui/material";
import { LinkInfoWrapper } from "./LinkInfoWrapper";
import { EXTERNAL_FAVICON_STYLES } from "@/consts/stylingValues";

export const InternalLink = ({ href, children }) => {
  return (
    <Tooltip
      followCursor
      title={
        <LinkInfoWrapper rootDomain="mark-valentino.vercel.app">
          <img
            src="/favicon.ico"
            alt=""
            style={EXTERNAL_FAVICON_STYLES}
          />
        </LinkInfoWrapper>
      }
    >
      <Link href={href}>{children}</Link>
    </Tooltip>
  );
};
