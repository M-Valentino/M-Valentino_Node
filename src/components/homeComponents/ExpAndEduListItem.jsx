import React from "react";
import Image from "next/image";
import {
  Grid,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

export const ExpAndEduListItem = (props) => {
  const { imgSRC, imgAlt, primaryText, secondaryText, url } = props;
  return (
    <Grid item xs={12} md={6}>
      <ListItem disablePadding>
        <ListItemButton href={url}>
          <ListItemIcon>
            {/* Generates a smaller image but optimized for 200% dpi scaling */}
            <Image
              src={imgSRC}
              alt={imgAlt}
              width={150}
              height={150}
              quality={90}
              style={{ borderRadius: "25%", width: 75, height: 75 }}
            />
          </ListItemIcon>
          <ListItemText
            primary={primaryText}
            secondary={secondaryText}
            style={{ marginLeft: 10 }}
          />
        </ListItemButton>
      </ListItem>
    </Grid>
  );
};
