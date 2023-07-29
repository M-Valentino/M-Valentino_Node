import React from "react";
import Link from "next/link";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";

export const PrivacyPolicyDialog = (props) => {
  const { handlePrivacyPolicyClose, privacyPolicyOpen } = props;

  return (
    <Dialog onClose={handlePrivacyPolicyClose} open={privacyPolicyOpen}>
      <DialogTitle>Privacy Policy</DialogTitle>
      <DialogContent>
        <Typography>
          This website partners with Microsoft Clarity to capture how you use
          and interact with this website through behavioral metrics, heatmaps,
          and session replay to improve the user expirience of this site.
          Website usage data is captured using first and third-party cookies and
          other tracking technologies to determine the popularity of web pages
          and online activity. Additionally, this site uses this information for
          site optimization, and fraud/security purposes. For more information
          about how Microsoft collects and uses your data, visit the{" "}
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://privacy.microsoft.com/en-US/privacystatement"
          >
            Microsoft Privacy Statement
          </Link>
          .
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={handlePrivacyPolicyClose} variant="contained">Ok</Button>
      </DialogActions>
    </Dialog>
  );
};
