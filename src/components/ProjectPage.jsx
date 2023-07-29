import React, { useState } from "react";
import {
  Button,
  Stack,
  IconButton,
  Grid,
  Typography,
  useMediaQuery,
} from "@mui/material";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import FullscreenExitIcon from "@mui/icons-material/FullscreenExit";
import GitHubIcon from "@mui/icons-material/GitHub";
import { LanguageChip } from "./LanguageChip";
import { PrivacyPolicyDialog } from "./privacyPolicyDialog";
import {
  MOBILE_WIDTH,
  DESKTOP_WIDTH,
  OFF_WHITE_COLOR,
  XL_ICON_BUTTON_WIDTH_HEIGHT,
  SCREEN_CONTROL_STYLES,
  MINUTE_SHADOW_SVG,
  MINUTE_SHADOW_TEXT,
} from "@/consts/stylingValues";
import { HREF_TYPES } from "@/consts/projectContent";

/**
 * Component that is shown that takes up most of the screen. When a project
 * card or project table entry is clicked, the user is shown this component.
 * This component displays more content about a project than in card or table
 * form. All languages and libraries are shown here as well as a GitHub link
 * to the source code.
 *
 * Some projects can be run in the browser, if they are an iframe containing
 * the project is shown.
 */
export default function ProjectPage(props) {
  const {
    href,
    hrefType,
    imageLink,
    title,
    date,
    description,
    languages,
    gitLink,
  } = props.data;
  const isDesktopView = useMediaQuery("(min-width:900px)");
  const isLargeMobileView = useMediaQuery("(max-width:428px)");
  const isSmallMobileView = useMediaQuery("(max-width:380px)");
  // Handles whether the iframe covers the whole page or not.
  const [iframeFullSize, setIframeFullSize] = useState(false);

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

  const [privacyPolicyOpen, setPrivacyPolicyOpen] = useState(false);

  const handlePrivacyPolicyClose = (_event, reason) => {
    if (reason && reason == "backdropClick") {
        return;
    }
    setPrivacyPolicyOpen(false);
  };

  const getProjectComponent = () => {
    switch (hrefType) {
      case HREF_TYPES.externalLink:
        return <img src={imageLink} width="100%" />;
      case HREF_TYPES.iframe:
        return (
          <>
            <iframe
              src={href}
              title="description"
              style={iframeFullSize ? iframeBigStyle : iframeSmallStyle}
            />
            <IconButton
              onClick={() => setIframeFullSize(!iframeFullSize)}
              style={{
                transform: "translate(7.5px, -60px)",
                zIndex: 99,
                width: XL_ICON_BUTTON_WIDTH_HEIGHT,
                height: XL_ICON_BUTTON_WIDTH_HEIGHT,
              }}
              color="tertiary"
            >
              {iframeFullSize ? (
                <FullscreenExitIcon style={SCREEN_CONTROL_STYLES} />
              ) : (
                <FullscreenIcon style={SCREEN_CONTROL_STYLES} />
              )}
            </IconButton>
          </>
        );
    }
  };
  return (
    <>
      <div
        style={{
          width: "100%",
          backgroundColor: OFF_WHITE_COLOR,
          justifyContent: "space-between",
          marginBottom: 50,
        }}
      >
        <div
          style={{
            width: isDesktopView ? DESKTOP_WIDTH : MOBILE_WIDTH,
            margin: "auto",
            textRendering: "geometricPrecision!important",
            paddingTop: 20,
            paddingBottom: 60,
          }}
        >
          <Stack direction="row" spacing={1}>
            {isDesktopView && (
              <Typography
                variant="h3"
                color="primary"
                style={{ textShadow: MINUTE_SHADOW_TEXT }}
              >
                {date}
              </Typography>
            )}
            <Typography
              variant={isLargeMobileView ? "h4" : "h3"}
              color="text.primary"
              style={{ marginBottom: 20, textShadow: MINUTE_SHADOW_TEXT }}
            >
              {title}
            </Typography>
          </Stack>
          <Grid container spacing={2} justifyContent="space-around">
            <Grid item md={6} xs={12}>
              {getProjectComponent()}
            </Grid>
            <Grid item md={6} lg={5} xs={12}>
              {!isDesktopView && (
                <Typography variant="h5" color="primary">
                  {date}
                </Typography>
              )}
              <Typography
                variant="body1"
                color="text.secondary"
                style={{ textAlign: isDesktopView ? "justify" : "left" }}
              >
                {description}
              </Typography>
              <Typography variant="h5" style={{ marginTop: 20 }}>
                Languages and Libraries used:
              </Typography>
              <Grid container spacing={1} mt={1}>
                {languages.map((props, key) => (
                  <Grid item>
                    <LanguageChip
                      key={key}
                      language={props}
                      size={!isDesktopView ? "small" : "full"}
                      showLink
                    />
                  </Grid>
                ))}
              </Grid>
              <Button
                target="_blank"
                href={gitLink}
                rel="noreferrer"
                style={{
                  width: "100%",
                  height: isSmallMobileView ? 70 : 100,
                  marginTop: 20,
                  fontSize: isSmallMobileView ? 26 : 32,
                  textShadow: MINUTE_SHADOW_TEXT,
                }}
                variant="contained"
                color="primary"
              >
                <GitHubIcon
                  style={{
                    height: isSmallMobileView ? 37 : 45,
                    width: isSmallMobileView ? 37 : 45,
                    marginRight: 10,
                    transform: "translateY(-5px)",
                    filter: MINUTE_SHADOW_SVG,
                  }}
                />
                View Code Source
              </Button>
            </Grid>
          </Grid>
        </div>
      </div>
      <center>
        <Button onClick={() => setPrivacyPolicyOpen(true)}>
          Privacy Policy
        </Button>
      </center>
      <PrivacyPolicyDialog
        handlePrivacyPolicyClose={handlePrivacyPolicyClose}
        privacyPolicyOpen={privacyPolicyOpen}
      />
    </>
  );
}
