import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ExpAndEduListItem } from "../components/homeComponents/ExpAndEduListItem";
import OrangeEarth from "../components/OrangeEarth";
import { CustomPaper } from "../components/layout/CustomPaper";
import { SubHeading } from "../components/layout/Headings";
import { CustomHead } from "../components/layout/CustomHead";
import { MainWrapper } from "../components/layout/MainWrapper";
import ProjectCard from "../components/ProjectsPage/ProjectCard";
import { PROJECT_CONTENT } from "../consts/projectContent";
import {
  BASE_64_IMAGES,
  COLORS,
  SHADOWS,
  Z_INDEX_ORDER,
} from "../consts/stylingValues";
import { TECH_STACK } from "../consts/techStack";
import { Button, Grid, Stack, Typography } from "@mui/material";
import { TypeAnimation } from "react-type-animation";
import { PAGE_TITLES } from "../consts/pageTitles";

export default function Home() {
  return (
    <>
      <CustomHead
        descriptionText="The personal website of Mark Valentino, a software engineer."
        title="Mark Valentino - Home"
        keywords="professional site, software engineer, web developer"
        loadClarity
      />
      <MainWrapper activeLink={PAGE_TITLES.home}>
        <CustomPaper>
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
            I’m a highly motivated and highly knowledgeable software engineer
            who is passionate about web development, app development, and
            graphics programming. I excel at applying creative solutions. I’m a
            perfectionist in what I do. I have gotten where I am today through
            passion, perseverance, and curiosity.
          </Typography>
          <div
            style={{
              width: "100%",
              height: 150,
              marginTop: 20,
              marginBottom: 40,
            }}
          >
            <img
              width={130}
              height={130}
              style={{
                position: "relative",
                top: 0,
                left: "calc(50% - 75px)",
                borderRadius: 999,
                height: "auto",
                border: `10px solid ${COLORS.mainOrange}`,
                boxShadow: `${SHADOWS.minute}, inset ${SHADOWS.minute}`,
                zIndex: Z_INDEX_ORDER.avatar,
                animation: "rotateAvatar 1s",
                animationTimingFunction: "ease-out",
              }}
              alt="Professional portrait of me in a suite and tie."
              // Encoded as base64 so the image is already loaded when animation starts.
              src={BASE_64_IMAGES.gitHubAvatar}
            />
            <div
              style={{
                position: "relative",
                top: -110,
                imageRendering: "pixelated",
                filter: `opacity(0)`,
                animation: "binaryFadeIn 1s",
                animationFillMode: "forwards",
                animationDelay: "1s",
              }}
            >
              {Array.apply(null, { length: 4 }).map((_, index) => (
                <div
                  key={index}
                  style={{
                    width: "100%",
                    height: 14,
                    marginBottom: 2,
                    backgroundImage:
                      index % 2 === 0
                        ? BASE_64_IMAGES.binary
                        : BASE_64_IMAGES.binaryReverse,
                    backgroundSize: "22px 14px",
                  }}
                />
              ))}
            </div>
          </div>
          <SubHeading>Experience & Education</SubHeading>
          <Grid container style={{ marginBottom: 40 }}>
            <ExpAndEduListItem
              imgSRC="/home/landIntelligencePin.png"
              imgAlt="Land Intelligence Pin Logo"
              primaryText="Full Stack Developer & Data Technician"
              secondaryText="Land Intelligence, Sept. 2022 - Nov. 2023"
              url="https://web.archive.org/web/20230106061229/https://landintelligence.net"
            />
            <ExpAndEduListItem
              imgSRC="/home/uscLogo.png"
              imgAlt="University of South Carolina Gamecocks logo"
              primaryText="Bachelor of Science in Computer Science"
              secondaryText="University of South Carolina, Jun. 2021 - May 2023"
              url="https://sc.edu"
            />
          </Grid>
          <SubHeading>My Tech Stack</SubHeading>
          <Grid container spacing={4} justifyContent="center">
            {TECH_STACK.map((data, key) => (
              <Grid item md={1.3} sm={1.6} xs={3} key={key}>
                <img role="img" src={data.src} alt={data.alt} />
                <Typography
                  style={{
                    textAlign: "center",
                    fontWeight: "bold",
                    fontSize: data.smallFontSize ? 13 : 14,
                  }}
                >
                  {data.label}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </CustomPaper>
        <SubHeading>Featured Projects</SubHeading>
        <Stack
          direction={{ sm: "column", md: "row" }}
          justifyContent="space-evenly"
          style={{ maxWidth: 900, margin: "auto" }}
          spacing={{ xs: 3, md: 4 }}
        >
          <ProjectCard data={PROJECT_CONTENT[0]} />
          <ProjectCard data={PROJECT_CONTENT[2]} />
        </Stack>
        <Button
          className="seeMoreButton"
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
