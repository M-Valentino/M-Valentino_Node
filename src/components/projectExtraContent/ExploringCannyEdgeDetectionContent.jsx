import React from "react";
import { Typography } from "@mui/material";

export const ExploringCannyEdgeDetectionContent = ({ isDesktopView }) => {
  return (
    <>
      <Typography variant="h4" gutterBottom>
        My Submission
      </Typography>
      <iframe
        style={{
          width: isDesktopView ? "108%" : "100%",
          transform: isDesktopView ? "translateX(-4%)" : "none",
          height: "90vh",
          overflow: "visible",
          border: "none",
          boxShadow:
            "0px 1px 2px #00000015, 0px 0.5px 4px #00000020, 0px 0.25px 12px #00000029",
          scrollbarGutter: "stable",
        }}
        src="/CannyEdgeDetectionJupyterNotebook.html"
      />
    </>
  );
};
