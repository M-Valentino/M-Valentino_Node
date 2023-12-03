import React from "react";
import { SMALL_SHADOW, COLORS } from "@/consts/stylingValues";

// This component holds page sections inside the <main> content.
export const CustomPaper = ({ children, isDesktopView }) => {
  return (
    <div
      style={{
        maxWidth: 900,
        margin: "auto",
        marginBottom: 50,
        background: COLORS.offWhiteGradient,
        borderRadius: 4,
        boxShadow: SMALL_SHADOW,
        padding: isDesktopView ? 60 : 10,
      }}
    >
      {children}
    </div>
  );
};
