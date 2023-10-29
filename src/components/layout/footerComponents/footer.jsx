import React, { useState } from "react";
import Link from "next/link";
import { Button, Stack } from "@mui/material";
import { PrivacyPolicyDialog } from "./privacyPolicyDialog";

/**
 * Component displayed at the bottom of nearly all the pages with
 * buttons.
 * @returns Footer compoenet
 */
export const Footer = () => {
  const [privacyPolicyOpen, setPrivacyPolicyOpen] = useState(false);

  const handlePrivacyPolicyClose = (_event, reason) => {
    if (reason && reason == "backdropClick") {
      return;
    }
    setPrivacyPolicyOpen(false);
  };
  return (
    <Stack direction="row" justifyContent="center">
      <Button
        LinkComponent={Link}
        href="/humans.txt"
        target="_blank"
        rel="noopener noreferrer"
      >
        humans.txt
      </Button>
      <Button onClick={() => setPrivacyPolicyOpen(true)}>Privacy Policy</Button>
      <PrivacyPolicyDialog
        handlePrivacyPolicyClose={handlePrivacyPolicyClose}
        privacyPolicyOpen={privacyPolicyOpen}
      />
      <Button
        LinkComponent={Link}
        href="/sitemap.xml"
        target="_blank"
        rel="noopener noreferrer"
      >
        Site Map
      </Button>
    </Stack>
  );
};
