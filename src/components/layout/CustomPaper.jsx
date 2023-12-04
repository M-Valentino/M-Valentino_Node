import React from "react";
import { GRADIENTS, SHADOWS } from "@/consts/stylingValues";

// This component holds page sections inside the <main> content.
export const CustomPaper = ({ children, isDesktopView }) => {
  return (
    <div
      style={{
        maxWidth: 900,
        margin: "auto",
        marginBottom: 50,
        background: GRADIENTS.offWhiteGradient,
        borderRadius: 4,
        boxShadow: SHADOWS.small,
        padding: isDesktopView ? 60 : 10,
      }}
    >
      {children}
    </div>
  );
};
