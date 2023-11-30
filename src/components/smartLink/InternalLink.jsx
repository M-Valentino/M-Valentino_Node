import React from "react";
import Link from "next/link";
import { Tooltip } from "@mui/material";

export const InternalLink = ({ href, children }) => {
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
              src="/favicon.ico"
              style={{
                height: 24,
                display: "block",
                margin: "auto",
                filter: "drop-shadow(0 1px 4px rgba(255, 255, 255, 0.25))",
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
