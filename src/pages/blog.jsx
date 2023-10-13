import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import NavBar from "@/components/navbar";
import { getHeadBoilerPlate } from "@/utils/headBoilerPlate";
import { Footer } from "@/components/footerComponents/footer";
import { ThemeProvider } from "@mui/material/styles";
import { MainTheme } from "@/utils/MUITheme";
import {
  MINUTE_SHADOW,
  OFF_WHITE_COLOR,
  MINUTE_SHADOW_TEXT,
} from "@/consts/stylingValues";
import { Typography, useMediaQuery } from "@mui/material";
import {
  LANGUAGE_LINKS,
  LANGUAGES,
  PROJECT_TITLES,
} from "@/consts/projectContent";

export default function Home() {
  const isDesktopView = useMediaQuery("(min-width:900px)");
  const isLargeMobileView = useMediaQuery("(max-width:428px)");

  return (
    <>
      <Head>
        <title>Mark Valentino - Home</title>
        {getHeadBoilerPlate(
          "The personal website of Mark Valentino, a software engineer."
        )}
        ;
      </Head>

      <ThemeProvider theme={MainTheme}>
        <NavBar activeLink={0} />
        <main>
          <div
            style={{
              maxWidth: 900,
              margin: "auto",
              marginBottom: 50,
              backgroundColor: OFF_WHITE_COLOR,
              borderRadius: 4,
              boxShadow: MINUTE_SHADOW,
              padding: isDesktopView ? 60 : 10,
            }}
          >
            <Typography
              variant={isLargeMobileView ? "h5" : "h4"}
              color="text.primary"
              style={{
                marginBottom: 20,
                textShadow: MINUTE_SHADOW_TEXT,
                fontWeight: "bolder",
              }}
            >
              MarvinJ Might get Dethroned by MarvalJ
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              style={{ textAlign: isDesktopView ? "justify" : "left" }}
            >
              I recently came across this pretty nifty{" "}
              <Link href={LANGUAGE_LINKS[LANGUAGES.marvinJ]}>
                JavaScript image processing library called MarvinJ
              </Link>
              . It was really useful in creating my{" "}
              <Link href={`/project/${PROJECT_TITLES.imageToDivs}`}>
                Image to Divs project
              </Link>
              .
            </Typography>
          </div>
        </main>
        <Footer />
      </ThemeProvider>
    </>
  );
}
