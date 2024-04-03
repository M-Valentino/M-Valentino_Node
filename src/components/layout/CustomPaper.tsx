import React, { ReactNode } from "react";
import { GRADIENTS, SHADOWS } from "../../consts/stylingValues";

// This component holds page sections inside the <main> content.
export const CustomPaper = (props: { children: ReactNode; mode?: string }) => {
  const { children, mode } = props;
  return (
    <div
      // For disableing padding when used as a table.
      className={mode === "table" ? "customPaperTable" : "customPaper"}
      style={{
        maxWidth: 900,
        margin: "auto",
        marginBottom: 50,
        background: GRADIENTS.offWhiteGradient,
        borderRadius: 4,
        boxShadow: SHADOWS.minute,
        overflowWrap: "break-word",
      }}
    >
      {children}
    </div>
  );
};
