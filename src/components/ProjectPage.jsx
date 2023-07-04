import React, { useState } from "react";
import { Stack, Grid, Typography, useMediaQuery } from "@mui/material";
import { LanguageChip } from "./LanguageChip";
import { MOBILE_WIDTH, DESKTOP_WIDTH } from "@/consts/stylingValues";
import Earth3JS from "@/pages/Earth3JS";

export default function ProjectPage(props) {
  const {
    href,
    imageLink,
    title,
    smallerTitleFontNeeded,
    date,
    description,
    languages,
  } = props.data;
  const isDesktopView = useMediaQuery("(min-width:900px)");
  return (
    <Grid container style={{width: isDesktopView ? DESKTOP_WIDTH : MOBILE_WIDTH, margin: "auto"}} justifyContent="space-between">
      <Grid item xs={6}>
        <div
          style={{
            backgroundColor: "#fffdfa",
            padding: 24,
            margin: "auto",
            borderRadius: 4,
            textRendering: "geometricPrecision!important",
          }}
        >
          <img
            src={imageLink}
            style={{
              width: "100%",
              borderRadius: 2,
              boxShadow: "0 1px 1px rgba(0, 0, 0, 0.1)",
            }}
          ></img>
          <Stack direction="row" spacing={1}>
            <Typography variant="h6" color="primary">
              {date}
            </Typography>
            <Typography
              variant={smallerTitleFontNeeded ? "h6" : "h5"}
              color="text.primary"
            >
              {title}
            </Typography>
          </Stack>
          <div style={{ height: 145 }}>
            <Typography
              variant="body2"
              color="text.secondary"
              style={{ textAlign: "justify" }}
            >
              {description}
            </Typography>
          </div>
          <Stack direction="row" spacing={1} mt={1}>
            {languages.map((props, index) => (
              <LanguageChip index={index} language={props} size="full" />
            ))}
          </Stack>
        </div>
      </Grid>
      <Grid item xs={6}>
        <Earth3JS />
      </Grid>
    </Grid>
  );
}
