import React, { useState } from "react";
import Link from "next/link";
import { Button, Grid } from "@mui/material";
import { PrivacyPolicyDialog } from "./privacyPolicyDialog";

/**
 * Component displayed at the bottom of nearly all the pages with
 * buttons.
 * @returns Footer compoenet
 */
export const Footer = () => {
  const [privacyPolicyOpen, setPrivacyPolicyOpen] = useState(false);

  const handlePrivacyPolicyClose = (_event, reason) => {
    if (reason && reason === "backdropClick") {
      return;
    }
    setPrivacyPolicyOpen(false);
  };
  return (
    <Grid container direction="row" justifyContent="center" spacing={1}>
      <Grid item>
        <Button
          LinkComponent={Link}
          href="/humans.txt"
          target="_blank"
          rel="noopener noreferrer"
        >
          humans.txt
        </Button>
      </Grid>
      <Grid item>
        <Button onClick={() => setPrivacyPolicyOpen(true)}>
          Privacy Policy
        </Button>
        <PrivacyPolicyDialog
          handlePrivacyPolicyClose={handlePrivacyPolicyClose}
          privacyPolicyOpen={privacyPolicyOpen}
        />
      </Grid>
      <Grid item>
        <Button
          LinkComponent={Link}
          href="/sitemap.xml"
          target="_blank"
          rel="noopener noreferrer"
        >
          Site Map
        </Button>
      </Grid>
      <Grid item>
        <Button
          LinkComponent={Link}
          href="https://github.com/M-Valentino/M-Valentino_NextJS"
          target="_blank"
          rel="noopener noreferrer"
        >
          Website Source Code
        </Button>
      </Grid>
    </Grid>
  );
};
