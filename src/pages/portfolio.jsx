import React, { useState } from "react";
import Image from "next/image";
import {
  Dialog,
  DialogActions,
  DialogContent,
  Grid,
  ImageListItem,
  ImageListItemBar,
  IconButton,
  Typography,
  useMediaQuery,
} from "@mui/material/";
import CloseIcon from "@mui/icons-material/Close";
import { CustomHead } from "@/components/layout/CustomHead";
import { CustomPaper } from "@/components/layout/CustomPaper";
import { MainWrapper } from "@/components/layout/MainWrapper";
import { MainHeading } from "@/components/layout/Headings";
import {
  PORTFOLIO_ITEMS,
  IMAGE_TYPE,
  ORIENTATION_TYPE,
} from "@/consts/portfolioItems";
import { PAGE_TITLES } from "@/consts/pageTitles";
import { SHADOWS, Z_INDEX_ORDER } from "@/consts/stylingValues";

export default function Portfolio() {
  const [showDialog, setShowDialog] = useState(false);
  const [dialogItem, setDialogItem] = useState({});
  const LessThanlargeTabletView = useMediaQuery("(max-width:1100px)");

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
              <Grid item key={portfolioItem.url}>
                <ImageListItem
                  style={{ boxShadow: SHADOWS.small, cursor: "pointer" }}
                  onClick={() => {
                    /**
                     * Images in dialogs are barely smaller than the ImageListItem
                     * on non desktop displays. Opening images in a new tab has a
                     * better UX.
                     */
                    if (LessThanlargeTabletView) {
                      window
                        .open(`/portfolioImages/${portfolioItem.url}`, "_blank")
                        .focus();
                    } else {
                      setShowDialog(true);
                      setDialogItem(portfolioItem);
                    }
                  }}
                >
                  <Image
                    src={`/portfolioImages/${portfolioItem.url}`}
                    alt={portfolioItem.title}
                    quality={
                      portfolioItem.imageType === IMAGE_TYPE.pixelArt ? 100 : 90
                    }
                    width={440}
                    height={320}
                    style={{
                      objectFit: "cover",
                      maxWidth: "100%",
                      imageRendering:
                        portfolioItem.imageType === IMAGE_TYPE.pixelArt
                          ? "pixelated"
                          : "initial",
                    }}
                  />
                  <ImageListItemBar
                    title={portfolioItem.title}
                    subtitle={portfolioItem.programUsed}
                  />
                </ImageListItem>
              </Grid>
            ))}
          </Grid>
        </CustomPaper>
        <Dialog
          open={showDialog}
          onClose={() => setShowDialog(false)}
          fullWidth
          maxWidth="97.5%"
          style={{ zIndex: Z_INDEX_ORDER.dialog }}
        >
          <DialogActions style={{ flexDirection: "row-reverse" }}>
            <Typography style={{ marginLeft: 20, fontSize: 14 }}>
              <b>Made With: </b>
              {dialogItem.programUsed}
            </Typography>
            <Typography
              style={{ fontSize: 17, fontWeight: 500, marginLeft: 20 }}
            >
              {dialogItem.title}
            </Typography>
            <IconButton onClick={() => setShowDialog(false)}>
              <CloseIcon
                color="primary"
                fontSize="large"
                style={{ filter: SHADOWS.minuteSVG }}
              />
            </IconButton>
          </DialogActions>
          <DialogContent>
            <img
              src={`/portfolioImages/${dialogItem.url}`}
              style={{
                width:
                  dialogItem.orientation === ORIENTATION_TYPE.landscape
                    ? "75%"
                    : "45%",
                margin: "auto",
                display: "block",
                imageRendering:
                  dialogItem.imageType === IMAGE_TYPE.pixelArt
                    ? "pixelated"
                    : "initial",
              }}
            />
          </DialogContent>
        </Dialog>
      </MainWrapper>
    </>
  );
}
