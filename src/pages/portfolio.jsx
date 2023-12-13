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
            {itemData.map((item) => (
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
                    subtitle={item.author}
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

const itemData = [
  {
    name: "cad_car_isometric.png",
    title: "Breakfast",
    author: "@bkristastucchio",
  },
  {
    name: "comming_soon_to_a_store_near_you.png",
    title: "Burger",
    author: "@rollelflex_graphy726",
  },
  {
    name: "headphones_housing_inventor_assembly.png",
    title: "Camera",
    author: "@helloimnik",
  },
  {
    name: "sturdy_computer_desk.png",
    title: "Coffee",
    author: "@nolanissac",
  },
];
