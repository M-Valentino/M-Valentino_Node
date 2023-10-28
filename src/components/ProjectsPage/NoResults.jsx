import React from "react";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";
import { Typography } from "@mui/material";
import { MINUTE_SHADOW_SVG } from "@/consts/stylingValues";

export const NoResults = () => {
  return (
    <div style={{ marginTop: 150, marginBottom: 150, textAlign: "center" }}>
      <Typography variant="h4">No Results</Typography>
      <SentimentDissatisfiedIcon
        style={{
          width: 75,
          height: 75,
          display: "block",
          margin: "auto",
          filter: MINUTE_SHADOW_SVG,
        }}
      />
      <Typography>
        Please search again. You can click the reset button to see all projects.
      </Typography>
    </div>
  );
};
