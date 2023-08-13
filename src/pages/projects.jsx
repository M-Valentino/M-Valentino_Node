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
import { getHeadBoilerPlate } from "@/components/headBoilerPlate";
import { PROJECT_CONTENT } from "@/consts/projectContent";
import { Footer } from "@/components/footer";
import {
  DESKTOP_WIDTH,
  MOBILE_WIDTH,
  MINUTE_SHADOW,
  MINUTE_SHADOW_SVG,
  MINUTE_SHADOW_TEXT,
} from "@/consts/stylingValues";

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
  const [projectResults, setProjectResults] = useState(PROJECT_CONTENT);
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
   * PROJECT_CONTENT object which contain the default values.
   */
  const filterProjects = () => {
    setProjectResults(
      PROJECT_CONTENT.filter(
        (data) =>
          JSON.stringify(data)
            .toLowerCase()
            .indexOf(searchInputValue.toLowerCase()) !== -1
      )
    );
  };

  // Function to load the default project values and clear what the user typed.
  const handleResetFilter = () => {
    setProjectResults(PROJECT_CONTENT);
    setSearchInputValue("");
  };

  return (
    <>
      <Head>
        <title>Mark Valentino - Projects</title>
        {getHeadBoilerPlate("Mark Valentino's coding projects.")}
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
                  style={{ whiteSpace: "nowrap", boxShadow: MINUTE_SHADOW }}
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
                        filter: MINUTE_SHADOW_SVG,
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
                        filter: MINUTE_SHADOW_SVG,
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
              }}
            >
              <Typography
                variant={isTabletView ? "h4" : "h3"}
                fontWeight={600}
                textAlign={"center"}
                style={{ textShadow: MINUTE_SHADOW_TEXT }}
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
                  aria-label="search"
                >
                  <SearchIcon style={{ filter: MINUTE_SHADOW_SVG }} />
                </Button>
                <Tooltip title="Shows all projects again.">
                  <Button
                    color="secondary"
                    variant="outlined"
                    sx={{ boxShadow: 1, marginLeft: 1 }}
                    onClick={() => handleResetFilter()}
                    aria-label="reset search"
                  >
                    Reset
                  </Button>
                </Tooltip>
              </Stack>
            </Grid>
          </Grid>
          <div style={{ width: "fit-content", margin: "auto" }}>
            <Typography
              style={{
                fontSize: 13,
                color: "#555",
                marginBottom: 5,
                marginLeft: 5,
                marginRight: 5,
                textAlign: "justify",
              }}
            >
              {isDesktopView ? "Click " : "Select "}
              {view === "cardView" ? "a card" : "an entry"} to view more
              details. Each project has a link to a GitHub repo as well as full
              list of languages and libraries used.
            </Typography>
          </div>
          {view === "cardView" && (
            <Grid
              container
              justifyContent="center"
              spacing={3}
              direction="row"
              style={{ marginBottom: 50 }}
            >
              {projectResults.map((props, key) => (
                <Grid item key={key}>
                  <Link
                    style={{ textDecoration: "none" }}
                    href={`/project/${props.title}`}
                  >
                    <ProjectCard data={props} />
                  </Link>
                </Grid>
              ))}
            </Grid>
          )}
          {view === "tableView" && (
            <ProjectTable
              PROJECT_CONTENT={projectResults}
              key={projectResults}
            />
          )}
          <Footer />
        </ThemeProvider>
      </main>
    </>
  );
}
