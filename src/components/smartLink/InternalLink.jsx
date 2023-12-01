import React from "react";
import Link from "next/link";
import { Tooltip } from "@mui/material";
import { OFF_WHITE_COLOR, MINUTE_SHADOW } from "@/consts/stylingValues";

export const InternalLink = ({ href, children }) => {
  return (
    <Tooltip
      followCursor
      title={
        <div style={{ height: 55 }}>
          <div
            style={{
              backgroundColor: OFF_WHITE_COLOR,
              height: 22,
              width: 22,
              padding: 6,
              borderRadius: "50%",
              margin: "auto",
              boxShadow: MINUTE_SHADOW,
            }}
          >
            <img
              src="/favicon.ico"
              alt=""
              style={{
                height: "100%",
                width: "100%",
                margin: "auto",
              }}
            />
          </div>
          <div style={{ marginTop: 5 }}>mark-valentino.vercel.app</div>
        </div>
      }
    >
      <Link href={href}>{children}</Link>
    </Tooltip>
  );
};
