import React from "react";
import { Grid, Typography } from "@mui/material";
import { SmartLink } from "../smartLink/SmartLink";

export const ISpyShopperContent = ({ isDesktopView }) => {
  const screenshotStyles = {
    display: "block",
    margin: "auto",
    width: isDesktopView ? "80%" : "50%",
  };
  return (
    <>
      <Typography variant="h4" gutterBottom>
        My Contributions
      </Typography>
      <Typography paragraph>
        Making this app was a team effort and work was divided amongst
        ourselves. The largest contributions I made were implementing Firebase,
        implementing the navigation bar, and implementing form validation.{" "}
        <SmartLink href="https://sccapstone.github.io/I_Spy_A-Eye/">
          I also coded the app's GitHub website
        </SmartLink>
        , which has even more information about I Spy Shopper.
      </Typography>
      <Typography variant="h4" gutterBottom>
        Screenshots
      </Typography>
      <Grid container justifyContent="center" spacing={1}>
        <Grid item xs={12} md={6}>
          <img
            src="/projectImages/extra/searchscreen1.png"
            style={screenshotStyles}
            alt="screenshot of of I Spy Shopper's search screen"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <img
            src="/projectImages/extra/settingsscreen1.png"
            style={screenshotStyles}
            alt="screenshot of of I Spy Shopper's settings screen"
          />
        </Grid>
      </Grid>
    </>
  );
};
