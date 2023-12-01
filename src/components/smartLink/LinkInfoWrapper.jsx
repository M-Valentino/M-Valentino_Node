import React from "react";
import { OFF_WHITE_COLOR, MINUTE_SHADOW } from "@/consts/stylingValues";

export const LinkInfoWrapper = ({ children, rootDomain }) => {
  return (
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
        {children}
      </div>
      <div style={{ marginTop: 5 }}>{rootDomain}</div>
    </div>
  );
};
