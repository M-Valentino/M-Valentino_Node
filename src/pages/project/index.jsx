import React from "react";
import Head from "next/head";
import NavBar from "@/components/navbar";
import { ThemeProvider } from "@mui/material/styles";
import { MainTheme } from "@/utils/MUITheme";
import ProjectPage from "@/components/ProjectPage";
import { getHeadBoilerPlate } from "@/components/headBoilerPlate";
import { filterProjectMatchingTitle } from "@/utils/routerFunctions";

class ProjectTemplate extends React.Component {
  static async getInitialProps({ query }) {
    return { query };
  }

  render() {
    const projectToRender = filterProjectMatchingTitle(
      this.props.query.projectID
    )[0];
    return (
      <>
        <Head>
          <title>{`Mark Valentino - ${projectToRender.title}`}</title>
          {getHeadBoilerPlate(projectToRender.description)}
        </Head>
        <ThemeProvider theme={MainTheme}>
          <NavBar />
          <ProjectPage data={projectToRender} />
        </ThemeProvider>
      </>
    );
  }
}

export default ProjectTemplate;
