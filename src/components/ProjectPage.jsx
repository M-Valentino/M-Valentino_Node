import React, { useState } from "react";
import { Stack, Grid, Typography, useMediaQuery } from "@mui/material";
import { LanguageChip } from "./LanguageChip";
import { MOBILE_WIDTH, DESKTOP_WIDTH } from "@/consts/stylingValues";
import { HREF_TYPES, PROJECT_HREFS } from "@/consts/projectContent";

export default function ProjectPage(props) {
  const { href, hrefType, imageLink, title, date, description, languages } =
    props.data;
  const isDesktopView = useMediaQuery("(min-width:900px)");

  const getProjectComponent = () => {
    switch (hrefType) {
      case HREF_TYPES.externalLink:
        return <img src={imageLink} height={359} />
      case HREF_TYPES.iframe:
        return <iframe src={href} width="100%" height={500} title="description" />;
    }
  };
  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "#fffdfa",
      }}
      justifyContent="space-between"
    >
      <div
        style={{
          width: isDesktopView ? DESKTOP_WIDTH : MOBILE_WIDTH,
          margin: "auto",
          borderRadius: 4,
          textRendering: "geometricPrecision!important",
        }}
      >
        <Stack direction="row" spacing={1}>
          <Typography variant="h3" color="primary">
            {date}
          </Typography>
          <Typography variant="h3" color="text.primary">
            {title}
          </Typography>
        </Stack>
        {getProjectComponent()}
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
    </div>
  );
}
