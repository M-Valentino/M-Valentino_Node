import React from "react";
import Image from "next/image";
import {
  Grid,
  ImageListItem,
  ImageListItemBar,
  IconButton,
  Typography,
} from "@mui/material/";
import InfoIcon from "@mui/icons-material/Info";
import { CustomHead } from "@/components/layout/CustomHead";
import { CustomPaper } from "@/components/layout/CustomPaper";
import { MainWrapper } from "@/components/layout/MainWrapper";
import { MainHeading } from "@/components/layout/Headings";
import { PORTFOLIO_ITEMS } from "@/consts/portfolioItems";

export default function Portfolio() {
  return (
    <>
      <CustomHead />
      <MainWrapper>
        <CustomPaper>
          <MainHeading>Portfolio</MainHeading>
          <Typography gutterBottom>
            This is a curated showcase of my technical art in AutoCAD and
            Inventor.
          </Typography>
          <Grid container spacing={1} justifyContent="center">
            {PORTFOLIO_ITEMS.map((item) => (
              <Grid item>
                <ImageListItem key={item.name}>
                  <Image
                    src={`/portfolioImages/${item.name}`}
                    alt={item.title}
                    quality={95}
                    width={440}
                    height={320}
                    style={{ objectFit: "cover", maxWidth: "100%" }}
                  />
                  <ImageListItemBar
                    title={item.title}
                    subtitle={item.programUsed}
                    actionIcon={
                      <IconButton
                        sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                        aria-label={`info about ${item.title}`}
                      >
                        <InfoIcon />
                      </IconButton>
                    }
                  />
                </ImageListItem>
              </Grid>
            ))}
          </Grid>
        </CustomPaper>
      </MainWrapper>
    </>
  );
}
