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
import { SHADOWS, Z_INDEX_ORDER } from "../../../consts/stylingValues";
import { PAGE_TITLES } from "../../../consts/pageTitles";

/**
 * Dialog that opens when the Privacy Policy button is clicked.
 * @param {*} props
 * @returns component
 */
export const PrivacyPolicyDialog = (props) => {
  const { handlePrivacyPolicyClose, privacyPolicyOpen } = props;

  return (
    <Dialog
      onClose={handlePrivacyPolicyClose}
      open={privacyPolicyOpen}
      style={{ zIndex: Z_INDEX_ORDER.dialog }}
    >
      <DialogTitle
        fontWeight={600}
        style={{ fontSize: 24, textAlign: "center", boxShadow: SHADOWS.minute }}
      >
        Privacy Policy
      </DialogTitle>
      <DialogContent>
        <Typography
          style={{ fontSize: 15, marginBottom: 10, fontStyle: "italic" }}
        >
          Last Updated: August 20, 2023
        </Typography>
        <Typography style={{ color: "#222" }} paragraph>
          This document outlines how my site gathers, stores, uses, and possibly
          shares your information when you use my services, including visiting
          my website at{" "}
          <Link href={`https://${PAGE_TITLES.domain}`}>
            {PAGE_TITLES.domain}
          </Link>
          . By using my website, you agree to the terms laid out in this policy.
          If you have questions or concerns, reading this policy will provide
          insights into your privacy rights and options. If you disagree with my
          practices, kindly refrain from using my website. For inquiries, reach
          me at mark_valentino_jr@outlook.com.
        </Typography>
        <Typography variant="h6">INFORMATION COLLECTION</Typography>
        <Typography style={{ color: "#222" }} paragraph>
          I gather personal information you willingly provide, including when
          interact with my website or contact me.
        </Typography>
        <Typography style={{ color: "#222" }} paragraph>
          When you access my services, certain data like your IP address and
          device characteristics are collected automatically for security,
          analytics, and reporting purposes. I employ cookies and similar tech
          for data collection.
        </Typography>
        <Typography variant="h6">INFORMATION PROCESSING</Typography>
        <Typography style={{ color: "#222" }} paragraph>
          I process my data to enhance and manage my services, communicate with
          you, prevent fraud, and comply with legal requirements. I may also
          process your data with your consent or for other specified purposes.
        </Typography>
        <Typography variant="h6">SHARING INFORMATION</Typography>
        <Typography style={{ color: "#222" }} paragraph>
          I may share information with third-party vendors, service providers,
          and agents who support my operations. Specific third parties include:
          Vercel (for cloud computing and hosting services) and Microsoft
          Clarity (for performance and user interaction analytics).
          Additionally, I might share your data as required by law.
        </Typography>
        <Typography variant="h6">COOKIES AND TRACKING</Typography>
        <Typography style={{ color: "#222" }} paragraph>
          I employ cookies and tracking technologies to collect and store data.
          If you disable the use of cookies on your browser, some services on
          this website may not function.
        </Typography>
        <Typography variant="h6">DATA RETENTION</Typography>
        <Typography style={{ color: "#222" }} paragraph>
          I store my data only as long as needed to fulfill the purposes
          mentioned in this policy, unless extended by law.
        </Typography>
        <Typography variant="h6">MINORS' DATA</Typography>
        <Typography style={{ color: "#222" }} paragraph>
          I do not knowingly collect data from individuals under 18 years of
          age. If such data is inadvertently collected, I take measures to
          remove it. By using this site, you represent that you are at least 18
          years of age or older and or have permission from a parent or guardian
          to use this site.
        </Typography>
        <Typography variant="h6">
          PRIVACY RIGHTS DO-NOT-TRACK FEATURES
        </Typography>
        <Typography style={{ color: "#222" }} paragraph>
          While I don't respond to Do-Not-Track browser signals, I might keep
          you informed if I adopt such practices in the future.
        </Typography>
        <Typography variant="h6">CALIFORNIA RESIDENTS' RIGHTS</Typography>
        <Typography style={{ color: "#222" }} paragraph>
          California residents can inquire about personal information disclosure
          and request removal of certain data.
        </Typography>
        <Typography variant="h6">UPDATES TO POLICY</Typography>
        <Typography style={{ color: "#222" }} paragraph>
          I may update this policy in response to legal changes. Check back
          regularly for updates.
        </Typography>
        <Typography variant="h6">DATA ACCESS REQUEST</Typography>
        <Typography style={{ color: "#222" }} paragraph>
          Depending on your location, you can request access to, modification
          of, or deletion of your personal information by submitting a data
          subject access request.
        </Typography>
        <Typography variant="h6">MICROSOFT CLARITY</Typography>
        <Typography style={{ color: "#222" }} paragraph>
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
        <Button
          onClick={handlePrivacyPolicyClose}
          variant="contained"
          style={{ margin: "auto" }}
        >
          Ok
        </Button>
      </DialogActions>
    </Dialog>
  );
};
