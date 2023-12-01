import React from "react";
import Link from "next/link";
import { Tooltip } from "@mui/material";
import { LinkInfoWrapper } from "./LinkInfoWrapper";

export const InternalLink = ({ href, children }) => {
  return (
    <Tooltip
      followCursor
      title={
        <LinkInfoWrapper rootDomain="mark-valentino.vercel.app">
          <img
            src="/favicon.ico"
            alt=""
            style={{
              height: "100%",
              width: "100%",
              margin: "auto",
            }}
          />
        </LinkInfoWrapper>
      }
    >
      <Link href={href}>{children}</Link>
    </Tooltip>
  );
};
