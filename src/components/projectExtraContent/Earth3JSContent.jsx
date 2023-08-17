import React from "react";
import Link from "next/link";
import { Typography } from "@mui/material";

export const Earth3JSContent = () => {
  return (
    <>
      <Typography variant="h4" style={{ marginBottom: 10 }}>
        How it was coded
      </Typography>
      <Typography variant="body1" color="text.secondary">
        I used{" "}
        <Link href="https://threejs.org/docs/#api/en/geometries/SphereGeometry">
          SphereGeometry
        </Link>{" "}
        components for coding the earth and moon. For the moon, it was quite
        simple as I essentially needed a simple sphere. However, 
      </Typography>
    </>
  );
};
