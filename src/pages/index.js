import Head from "next/head";
import Link from "next/link";
import NavBar from "@/components/navbar";
import OrangeEarth from "./OrangeEarth";
import { ThemeProvider } from "@mui/material/styles";
import { MainTheme } from "@/utils/MUITheme";
import {
  MINUTE_SHADOW,
  OFF_WHITE_COLOR,
  MINUTE_SHADOW_TEXT,
} from "@/consts/stylingValues";
import { Button, Grid, Typography, useMediaQuery } from "@mui/material";

export default function Home() {
  const isDesktopView = useMediaQuery("(min-width:900px)");

  const stackIconLabelTextStyle = { textAlign: "center" };

  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <ThemeProvider theme={MainTheme}>
          <NavBar activeLink={0} />
          <div
            style={{
              maxWidth: 900,
              margin: "auto",
              marginBottom: 40,
              backgroundColor: OFF_WHITE_COLOR,
              borderRadius: 4,
              boxShadow: MINUTE_SHADOW,
              padding: isDesktopView ? 60 : 10,
            }}
          >
            <Typography
              variant={isDesktopView ? "h2" : "h4"}
              style={{ textShadow: MINUTE_SHADOW_TEXT }}
            >
              Hi, I'm Mark Valentino.
            </Typography>
            <Typography style={{ marginTop: 15, fontSize: 18 }}>
              Web development, app development, and graphics programming are my
              specialties. I have gotten where I am today through passion,
              perseverance, and curiosity.
            </Typography>
            <Typography
              variant="h4"
              style={{ marginTop: 40, marginBottom: 10, textAlign: "center" }}
            >
              My Tech Stack
            </Typography>
            {/* @TODO Map this grid container from JSON */}
            <Grid container spacing={4} justifyContent="center">
              <Grid item md={2} xs={3}>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" />
                <Typography style={stackIconLabelTextStyle}>AWS</Typography>
              </Grid>
              <Grid item md={2} xs={3}>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg" />
                <Typography style={stackIconLabelTextStyle}>
                  Android Studio
                </Typography>
              </Grid>
              <Grid item md={2} xs={3}>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg" />
                <Typography style={stackIconLabelTextStyle}>Bash</Typography>
              </Grid>
              <Grid item md={2} xs={3}>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" />
                <Typography style={stackIconLabelTextStyle}>C++</Typography>
              </Grid>
              <Grid item md={2} xs={3}>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />
                <Typography style={stackIconLabelTextStyle}>CSS3</Typography>
              </Grid>
              <Grid item md={2} xs={3}>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" />
                <Typography style={stackIconLabelTextStyle}>
                  Firebase
                </Typography>
              </Grid>
              <Grid item md={2} xs={3}>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/handlebars/handlebars-original.svg" />
                <Typography style={stackIconLabelTextStyle}>
                  Handlebars
                </Typography>
              </Grid>
              <Grid item md={2} xs={3}>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
                <Typography style={stackIconLabelTextStyle}>Html5</Typography>
              </Grid>
              <Grid item md={2} xs={3}>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" />
                <Typography style={stackIconLabelTextStyle}>Java</Typography>
              </Grid>
              <Grid item md={2} xs={3}>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
                <Typography style={stackIconLabelTextStyle}>
                  Javascript
                </Typography>
              </Grid>
              <Grid item md={2} xs={3}>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg" />
                <Typography style={stackIconLabelTextStyle}>Jest</Typography>
              </Grid>
              <Grid item md={2} xs={3}>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original-wordmark.svg" />
                <Typography style={{ textAlign: "center", fontSize: 14 }}>
                  Jupyter Notebook
                </Typography>
              </Grid>
              <Grid item md={2} xs={3}>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg" />
                <Typography style={stackIconLabelTextStyle}>
                  Material UI
                </Typography>
              </Grid>
              <Grid item md={2} xs={3}>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" />
                <Typography style={stackIconLabelTextStyle}>MySQL</Typography>
              </Grid>
              <Grid item md={2} xs={3}>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" />
                <Typography style={stackIconLabelTextStyle}>Next JS</Typography>
              </Grid>
              <Grid item md={2} xs={3}>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" />
                <Typography style={stackIconLabelTextStyle}>Node JS</Typography>
              </Grid>
              <Grid item md={2} xs={3}>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" />
                <Typography style={stackIconLabelTextStyle}>NumPy</Typography>
              </Grid>
              <Grid item md={2} xs={3}>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" />
                <Typography style={stackIconLabelTextStyle}>Pandas</Typography>
              </Grid>
              <Grid item md={2} xs={3}>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" />
                <Typography style={stackIconLabelTextStyle}>Python</Typography>
              </Grid>
              <Grid item md={2} xs={3}>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
                <Typography style={stackIconLabelTextStyle}>
                  React Native
                </Typography>
              </Grid>
              <Grid item md={2} xs={3}>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original.svg" />
                <Typography style={stackIconLabelTextStyle}>
                  three.js
                </Typography>
              </Grid>
            </Grid>
            <center>
              <Link href="/projects" style={{textDecoration: "none"}}>
                <Button
                  variant="contained"
                  color="primary"
                  style={{
                    display: "flex",
                    justifySelf: "center",
                    marginTop: 40,
                    fontSize: isDesktopView ? 30 : 18,
                    
                  }}
                >
                  <OrangeEarth /> Checkout my projects!
                </Button>
              </Link>
            </center>
            {/*  */}
          </div>
        </ThemeProvider>
      </main>
    </>
  );
}
