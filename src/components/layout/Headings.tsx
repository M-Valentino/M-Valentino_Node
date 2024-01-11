import React, { ReactNode } from "react";
import { Typography } from "@mui/material";
import { SHADOWS } from "../../consts/stylingValues";

interface MainHeadingProps {
  children: ReactNode;
  addMarginBottomOn?: boolean;
}

export const MainHeading: React.FC<MainHeadingProps> = ({
  children,
  addMarginBottomOn,
}) => {
  return (
    <Typography
      className="mainHeading"
      variant="h1"
      fontWeight={600}
      textAlign={"center"}
      style={{
        textShadow: SHADOWS.small,
        marginBottom: !addMarginBottomOn ? 0 : 20,
      }}
    >
      {children}
    </Typography>
  );
};

interface SubHeadingProps {
  children: ReactNode;
}

export const SubHeading: React.FC<SubHeadingProps> = ({ children }) => {
  return (
    <Typography
      className="subHeading"
      color="text.primary"
      variant="h2"
      style={{
        marginBottom: 15,
        textShadow: SHADOWS.minute,
        fontWeight: "bolder",
        textAlign: "center",
      }}
    >
      {children}
    </Typography>
  );
};
