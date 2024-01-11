import React from "react";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";
import { Typography } from "@mui/material";
import { SHADOWS } from "../../consts/stylingValues";

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
          filter: SHADOWS.minuteSVG,
        }}
      />
      <Typography>
        Please search again. You can click the reset button to see all projects.
      </Typography>
    </div>
  );
};
