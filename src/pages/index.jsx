import React from "react";
import Link from "next/link";
import Image from "next/image";
import OrangeEarth from "../components/OrangeEarth";
import { CustomPaper } from "@/components/layout/CustomPaper";
import { SubHeading } from "@/components/layout/Headings";
import { CustomHead } from "@/components/layout/CustomHead";
import { MainWrapper } from "@/components/layout/MainWrapper";
import ProjectCard from "@/components/ProjectsPage/ProjectCard";
import { PROJECT_CONTENT } from "@/consts/projectContent";
import { COLORS, SHADOWS } from "@/consts/stylingValues";
import { TECH_STACK } from "@/consts/techStack";
import { Button, Grid, Stack, Typography, useMediaQuery } from "@mui/material";
import { TypeAnimation } from "react-type-animation";
import { PAGE_TITLES } from "@/consts/pageTitles";

export default function Home() {
  const isDesktopView = useMediaQuery("(min-width:900px)");

  return (
    <>
      <CustomHead
        descriptionText="The personal website of Mark Valentino, a software engineer."
        title="Mark Valentino - Home"
        keywords="professional site, software engineer, web developer"
        loadClarity
      />
      <MainWrapper activeLink={PAGE_TITLES.home}>
        <CustomPaper isDesktopView={isDesktopView}>
          <TypeAnimation
            sequence={["Hi, I'm Mark Valentino."]}
            wrapper="span"
            speed={50}
            style={{
              fontSize: 38,
              display: "inline-block",
              fontFamily: "sans-serif",
              textShadow: SHADOWS.minute,
              color: COLORS.mainOrange,
              fontWeight: 600,
            }}
            repeat={1}
            cursor={false}
            aria-hidden="true"
          />
          {/* This span is not visible but is for making the Typing text accessible to screen readers. */}
          <span
            style={{
              clip: "rect(1px, 1px, 1px, 1px)",
              clipPath: "inset(50%)",
              height: "1px",
              width: "1px",
              margin: "-1px",
              overflow: "hidden",
              padding: "0",
              position: "absolute",
            }}
          >
            Hi, I'm Mark Valentino.
          </span>
          <Typography style={{ marginTop: 15, fontSize: 18 }}>
            Web development, app development, and graphics programming are my
            specialties. I have gotten where I am today through passion,
            perseverance, and curiosity.
          </Typography>
          <div
            style={{
              width: "100%",
              height: 150,
              marginTop: 20,
              marginBottom: 40,
            }}
          >
            <Image
              width={130}
              height={130}
              quality={95}
              style={{
                position: "relative",
                top: 0,
                left: "calc(50% - 75px)",
                borderRadius: 999,
                height: "auto",
                border: `10px solid ${COLORS.mainOrange}`,
                boxShadow: `${SHADOWS.minute}, inset ${SHADOWS.minute}`,
                zIndex: 500,
              }}
              alt="Professional portrait of me in a suite and tie."
              src="/githubAvatar.png"
            />
            <div
              style={{
                position: "relative",
                top: -110,
                imageRendering: "pixelated",
                filter: `opacity(0.5)`,
              }}
            >
              {Array.from({ length: 2 }, (_, i) => (
                <span key={i}>
                  <div
                    style={{
                      width: "100%",
                      height: 14,
                      marginBottom: 2,
                      backgroundImage: "url(/animated-binary.gif)",
                      backgroundSize: "22px 14px",
                    }}
                  />
                  <div
                    style={{
                      width: "100%",
                      height: 14,
                      marginBottom: 2,
                      backgroundImage: "url(/animated-binary-reverse.gif)",
                      backgroundSize: "22px 14px",
                    }}
                  />
                </span>
              ))}
            </div>
          </div>
          <SubHeading shrinkFontOn={!isDesktopView}>My Tech Stack</SubHeading>
          <Grid container spacing={4} justifyContent="center">
            {TECH_STACK.map((data, key) => (
              <Grid item sm={1.7} xs={3} key={key}>
                <img role="img" src={data.src} alt={data.alt} />
                <Typography
                  style={{
                    textAlign: "center",
                    fontWeight: "bold",
                    fontSize: data.smallFontSize ? 14 : 16,
                  }}
                >
                  {data.label}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </CustomPaper>
        <SubHeading shrinkFontOn={!isDesktopView}>Featured Projects</SubHeading>
        <Stack
          direction={isDesktopView ? "row" : "column"}
          justifyContent="space-evenly"
          style={{ maxWidth: 900, margin: "auto" }}
          spacing={2}
        >
          <ProjectCard data={PROJECT_CONTENT[0]} />
          <ProjectCard data={PROJECT_CONTENT[1]} />
        </Stack>
        <Button
          variant="contained"
          color="primary"
          LinkComponent={Link}
          href="/projects"
          style={{
            width: "fit-content",
            margin: "auto",
            display: "block",
            marginTop: 30,
            marginBottom: 50,
            fontSize: isDesktopView ? 30 : 18,
          }}
        >
          <Stack direction="row" style={{ alignItems: "center" }}>
            <OrangeEarth /> See More Projects
          </Stack>
        </Button>
      </MainWrapper>
    </>
  );
}
