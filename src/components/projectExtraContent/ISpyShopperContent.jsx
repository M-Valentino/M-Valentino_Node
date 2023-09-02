import React from "react";
import { Typography } from "@mui/material";
import Link from "next/link";

export const ISpyShopperContent = () => {
  return (
    <>
      <Typography variant="h4" gutterBottom>
        My Contributions
      </Typography>
      <Typography paragraph>
        Making this app was a team effort and work was divided amongst
        ourselves. The largest contributions I made were implementing Firebase,
        implementing the navigation bar, and implementing form validation.{" "}
        <Link href="https://sccapstone.github.io/I_Spy_A-Eye/">
          I also coded the app's GitHub website
        </Link>
        , which has even more information about I Spy Shopper.
      </Typography>
    </>
  );
};
