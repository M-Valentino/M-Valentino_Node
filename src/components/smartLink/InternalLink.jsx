import React from "react";
import Link from "next/link";
import { Tooltip } from "@mui/material";

export const InternalLink = ({ href, children }) => {
  return (
    <Tooltip
      title={
        <>
          <img
            src="/favicon.ico"
            style={{
              height: 24,
              display: "block",
              margin: "auto",
              filter: "drop-shadow(0 1px 4px rgba(255, 255, 255, 0.25))",
            }}
          />

          <div style={{ marginTop: 5 }}>mark-valentino.vercel.app</div>
        </>
      }
    >
      <Link href={href}>{children}</Link>
    </Tooltip>
  );
};