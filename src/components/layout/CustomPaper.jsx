import React from "react";
import { MINUTE_SHADOW, OFF_WHITE_COLOR } from "@/consts/stylingValues";

export const CustomPaper = ({children, isDesktopView}) => {
  return (
    <div
      style={{
        maxWidth: 900,
        margin: "auto",
        marginBottom: 50,
        backgroundColor: OFF_WHITE_COLOR,
        borderRadius: 4,
        boxShadow: MINUTE_SHADOW,
        padding: isDesktopView ? 60 : 10,
      }}
    >
      {children}
    </div>
  );
};
