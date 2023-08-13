import React from "react";
import Head from "next/head";
import NavBar from "@/components/navbar";
import { ThemeProvider } from "@mui/material/styles";
import { MainTheme } from "@/utils/MUITheme";
import ProjectPage from "@/components/ProjectPage";
import { getHeadBoilerPlate } from "@/components/headBoilerPlate";
import { PROJECT_CONTENT } from "@/consts/projectContent";

class ProjectTemplate extends React.Component {
  static async getInitialProps({ query }) {
    return { query };
  }

  render() {
    return (
      <>
        <Head>
          <title>
            {`Mark Valentino - ${
              PROJECT_CONTENT[this.props.query.projectID].title
            }`}
          </title>
          {getHeadBoilerPlate(
            PROJECT_CONTENT[this.props.query.projectID].description
          )}
        </Head>
        <ThemeProvider theme={MainTheme}>
          <NavBar />
          <ProjectPage data={PROJECT_CONTENT[this.props.query.projectID]} />
        </ThemeProvider>
      </>
    );
  }
}

export default ProjectTemplate;
