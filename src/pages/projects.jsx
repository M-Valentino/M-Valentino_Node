import Head from "next/head";
import React, { useState } from "react";
import { Grid, Stack, TextField } from "@mui/material";
import Typography from "@mui/material/Typography";
import { ThemeProvider } from "@mui/material/styles";
import { MainTheme } from "@/utils/MUITheme";
import NavBar from "@/components/navbar";
import ProjectCard from "@/components/ProjectCard";
import ProjectTable from "@/components/ProjectTable";
import { projectContent } from "@/consts/projectContent";
import ViewListIcon from "@mui/icons-material/ViewList";
import ViewModuleIcon from "@mui/icons-material/ViewModule";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

export default function projects() {
  const [view, setView] = useState("cardView");

  const handleChange = (event, nextView) => {
    setView(nextView);
  };

  return (
    <>
      <Head>
        <title>Projects</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <ThemeProvider theme={MainTheme}>
          <NavBar activeLink={1} />
          <Typography
            variant="h3"
            fontWeight={500}
            gutterBottom
            textTransform={"uppercase"}
            textAlign={"center"}
          >
            Projects
          </Typography>
          <Stack direction="row" justifyContent="center">
            <ToggleButtonGroup
              orientation="horizontal"
              value={view}
              exclusive
              onChange={handleChange}
            >
              <ToggleButton
                value="cardView"
                aria-label="cardView"
                disabled={view === "cardView"}
              >
                <ViewModuleIcon /> Card View
              </ToggleButton>
              <ToggleButton
                value="tableView"
                aria-label="tableView"
                disabled={view === "tableView"}
              >
                <ViewListIcon /> Table View
              </ToggleButton>
            </ToggleButtonGroup>
            <TextField
              label="Helper text"
              variant="standard"
              fullWidth
            />
          </Stack>
          {view === "cardView" && (
            <Grid
              container
              justifyContent="center"
              spacing={3}
              direction="row"
              style={{ marginBottom: 50 }}
            >
              {projectContent.map((props, index) => (
                <Grid item>
                  <ProjectCard index={index} data={props} style />
                </Grid>
              ))}
            </Grid>
          )}
          {view === "tableView" && <ProjectTable />}
        </ThemeProvider>
      </main>
    </>
  );
}
