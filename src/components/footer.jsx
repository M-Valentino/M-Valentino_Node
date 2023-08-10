import React, { useState } from "react";
import { Button } from "@mui/material";
import { PrivacyPolicyDialog } from "./privacyPolicyDialog";

export const Footer = () => {
  const [privacyPolicyOpen, setPrivacyPolicyOpen] = useState(false);

  const handlePrivacyPolicyClose = (_event, reason) => {
    if (reason && reason == "backdropClick") {
      return;
    }
    setPrivacyPolicyOpen(false);
  };
  return (
    <>
      <Button
        style={{
          margin: "auto",
          display: "block",
        }}
        onClick={() => setPrivacyPolicyOpen(true)}
      >
        Privacy Policy
      </Button>
      <PrivacyPolicyDialog
        handlePrivacyPolicyClose={handlePrivacyPolicyClose}
        privacyPolicyOpen={privacyPolicyOpen}
      />
    </>
  );
};
