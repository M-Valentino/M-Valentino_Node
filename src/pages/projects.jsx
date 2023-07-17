import Head from "next/head";
import Link from "next/link";
import React, { useState } from "react";
import {
  Button,
  Grid,
  Stack,
  TextField,
  ThemeProvider,
  Tooltip,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
  useMediaQuery,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ViewListIcon from "@mui/icons-material/ViewList";
import ViewModuleIcon from "@mui/icons-material/ViewModule";
import { MainTheme } from "@/utils/MUITheme";
import NavBar from "@/components/navbar";
import ProjectCard from "@/components/ProjectCard";
import ProjectTable from "@/components/ProjectTable";
import { projectContent } from "@/consts/projectContent";
import { DESKTOP_WIDTH, MOBILE_WIDTH } from "@/consts/stylingValues";

/**
 * This component shows all projects in either a card view or a table view.
 * Users can toggle between card and table view as well as search for projects.
 */
export default function Projects() {
  const isDesktopView = useMediaQuery("(min-width:1000px)");
  const isTabletView = useMediaQuery("(max-width:899px)");
  /**
   * For if the projects are shown in a card or table view. Mobile devices will
   * be shown the table view by default while desktop devices will be shown the
   * card view by default.
   */
  const [view, setView] = useState("cardView");
  // For managing the project search results
  const [projectResults, setProjectResults] = useState(projectContent);
  // For managing the search input from the user
  const [searchInputValue, setSearchInputValue] = useState("");

  /**
   * Function to handle changing the state of the view. It is called by the
   * ToggleButtonGroup.
   * @param {*} _event
   * @param {*} nextView the view to be set
   */
  const handleSetView = (_event, nextView) => {
    setView(nextView);
  };

  /**
   * Handles the current value of the TextField
   * @param {*} event
   */
  const onChangeHandler = (event) => {
    setSearchInputValue(event.target.value);
  };

  /**
   * Function filter out projects that don't contain a string from the TextField
   * input and update the projects shown on the screen. It filters from the
   * projectContent object which contain the default values.
   */
  const filterProjects = () => {
    setProjectResults(
      projectContent.filter(
        (data) =>
          JSON.stringify(data)
            .toLowerCase()
            .indexOf(searchInputValue.toLowerCase()) !== -1
      )
    );
  };

  // Function to load the default project values and clear what the user typed.
  const handleResetFilter = () => {
    setProjectResults(projectContent);
    setSearchInputValue("");
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
          <Grid
            container
            justifyContent="space-between"
            style={{
              width: isDesktopView ? DESKTOP_WIDTH : MOBILE_WIDTH,
              margin: "auto",
              marginTop: 40,
              marginBottom: 20,
            }}
          >
            <Grid item md={4} xs={12}>
              {/* Suprisingly, this is the only way to align the toggle buttons other than <center>  */}
              <div style={{ textAlign: isTabletView ? "center" : "left" }}>
                <ToggleButtonGroup
                  orientation="horizontal"
                  value={view}
                  exclusive
                  onChange={handleSetView}
                  style={{ whiteSpace: "nowrap" }}
                >
                  <ToggleButton
                    value="cardView"
                    aria-label="cardView"
                    disabled={view === "cardView"}
                    color="primary"
                  >
                    <ViewModuleIcon
                      style={{
                        transform: "translateY(-1.5px)",
                        marginRight: 2,
                      }}
                    />
                    Card View
                  </ToggleButton>
                  <ToggleButton
                    value="tableView"
                    aria-label="tableView"
                    disabled={view === "tableView"}
                    color="primary"
                  >
                    <ViewListIcon
                      style={{
                        transform: "translateY(-1.5px)",
                        marginRight: 2,
                      }}
                    />
                    Table View
                  </ToggleButton>
                </ToggleButtonGroup>
              </div>
            </Grid>
            <Grid
              item
              md={4}
              xs={12}
              style={{
                marginTop: isTabletView ? 20 : 0,
                marginBottom: isTabletView ? 20 : 0,
              }}
            >
              <Typography
                variant={isTabletView ? "h4" : "h3"}
                fontWeight={500}
                textTransform={"uppercase"}
                textAlign={"center"}
              >
                Projects
              </Typography>
            </Grid>
            <Grid item md={4} xs={12}>
              <Stack direction="row">
                <TextField
                  label="Search Projects"
                  variant="outlined"
                  fullWidth
                  onChange={onChangeHandler}
                  value={searchInputValue}
                />

                <Button
                  variant="contained"
                  sx={{ boxShadow: 1, marginLeft: 1 }}
                  onClick={() => filterProjects()}
                >
                  <SearchIcon />
                </Button>
                <Tooltip title="Shows all projects again.">
                  <Button
                    color="secondary"
                    variant="outlined"
                    sx={{ boxShadow: 1, marginLeft: 1 }}
                    onClick={() => handleResetFilter()}
                  >
                    Reset
                  </Button>
                </Tooltip>
              </Stack>
            </Grid>
          </Grid>

          {view === "cardView" && (
            <Grid
              container
              justifyContent="center"
              spacing={3}
              direction="row"
              style={{ marginBottom: 50 }}
            >
              {/* Projects are mapped in reverse so that a new project can be shown as the first 
              card without changing the url of all the cards.  */}
              {projectResults.slice(0).reverse().map((props, key) => (
                <Grid item>
                  <Link
                    style={{ textDecoration: "none" }}
                    href={`/project/${projectResults.length - key - 1}`}
                  >
                    <ProjectCard key={key} data={props} />
                  </Link>
                </Grid>
              ))}
            </Grid>
          )}
          {view === "tableView" && (
            <ProjectTable projectContent={projectResults} />
          )}
        </ThemeProvider>
      </main>
    </>
  );
}
