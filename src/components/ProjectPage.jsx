import React, { useState } from "react";
import {
  Stack,
  IconButton,
  Grid,
  Typography,
  useMediaQuery,
} from "@mui/material";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import FullscreenExitIcon from "@mui/icons-material/FullscreenExit";
import { LanguageChip } from "./LanguageChip";
import { MOBILE_WIDTH, DESKTOP_WIDTH } from "@/consts/stylingValues";
import { HREF_TYPES } from "@/consts/projectContent";

export default function ProjectPage(props) {
  const { href, hrefType, imageLink, title, date, description, languages } =
    props.data;
  const isDesktopView = useMediaQuery("(min-width:900px)");
  const [iframeFullScreen, setIframeFullScreen] = useState(false);

  const iframeSmallStyle = {
    width: "100%",
    height: 500,
    border: "none",
  };

  const iframeBigStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    width: "100%",
    height: "100%",
    border: "none",
    margin: 0,
    padding: 0,
    overflow: "hidden",
    zIndex: 9,
  };

  const getProjectComponent = () => {
    switch (hrefType) {
      case HREF_TYPES.externalLink:
        return <img src={imageLink} height={359} />;
      case HREF_TYPES.iframe:
        return (
          <>
            <iframe
              src={href}
              title="description"
              style={iframeFullScreen ? iframeBigStyle : iframeSmallStyle}
            />
            <IconButton
              onClick={() => setIframeFullScreen(!iframeFullScreen)}
              style={{ transform: "translate(7.5px, -60px)", zIndex: 99, width: 50, height: 50 }}
              color="primary"
            >
              {iframeFullScreen ? <FullscreenExitIcon style={{width: 40, height: 40}}/> : <FullscreenIcon style={{width: 40, height: 40}} />}
            </IconButton>
          </>
        );
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
        <Grid container>
          <Grid item md={6} xs={12}>
            {getProjectComponent()}
          </Grid>
          <Grid item md={6} xs={12}>
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
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
