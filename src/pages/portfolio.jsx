import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Grid,
  ImageListItem,
  ImageListItemBar,
  // IconButton,
  Typography,
} from "@mui/material/";
// import InfoIcon from "@mui/icons-material/Info";
import { CustomHead } from "@/components/layout/CustomHead";
import { CustomPaper } from "@/components/layout/CustomPaper";
import { MainWrapper } from "@/components/layout/MainWrapper";
import { MainHeading } from "@/components/layout/Headings";
import { PORTFOLIO_ITEMS } from "@/consts/portfolioItems";
import { PAGE_TITLES } from "@/consts/pageTitles";
import { SHADOWS } from "@/consts/stylingValues";

export default function Portfolio() {
  return (
    <>
      <CustomHead />
      <MainWrapper activeLink={PAGE_TITLES.portfolio}>
        <CustomPaper>
          <MainHeading>Portfolio</MainHeading>
          <Typography style={{ marginTop: 10, marginBottom: 20 }}>
            This is a curated showcase of my technical art in AutoCAD and
            Inventor. More is to come on this page.
          </Typography>
          <Grid container spacing={1} justifyContent="center">
            {PORTFOLIO_ITEMS.map((portfolioItem) => (
              <Grid item key={portfolioItem.name}>
                <Link href={`/portfolioImages/${portfolioItem.name}`}>
                  <ImageListItem style={{ boxShadow: SHADOWS.small }}>
                    {portfolioItem.imageType === "regular" ? (
                      <Image
                        src={`/portfolioImages/${portfolioItem.name}`}
                        alt={portfolioItem.title}
                        quality={95}
                        width={440}
                        height={320}
                        style={{ objectFit: "cover", maxWidth: "100%" }}
                      />
                    ) : (
                      <img
                        src={`/portfolioImages/${portfolioItem.name}`}
                        alt={portfolioItem.title}
                        style={{
                          width: 440,
                          height: 320,
                          objectFit: "cover",
                          maxWidth: "100%",
                          imageRendering: "pixelated",
                        }}
                      />
                    )}
                    <ImageListItemBar
                      title={portfolioItem.title}
                      subtitle={portfolioItem.programUsed}
                      // actionIcon={
                      //   <IconButton
                      //     sx={{ color: "rgba(255, 255, 255, 0.7)" }}
                      //     aria-label={`info about ${portfolioItem.title}`}
                      //   >
                      //     <InfoIcon />
                      //   </IconButton>
                      // }
                    />
                  </ImageListItem>
                </Link>
              </Grid>
            ))}
          </Grid>
        </CustomPaper>
      </MainWrapper>
    </>
  );
}
