import React from "react";
import NavBar from "@/components/navbar";
import { ThemeProvider } from "@mui/material/styles";
import { MainTheme } from "@/utils/MUITheme";
import ProjectPage from "@/components/projectPage";
import { projectContent } from "@/consts/projectContent";

class Test extends React.Component {
  static async getInitialProps({ query }) {
    return { query };
  }

  render() {
    return (
      <ThemeProvider theme={MainTheme}>
        <NavBar />
        <ProjectPage data={projectContent[this.props.query.projectID]} />
      </ThemeProvider>
    );
  }
}

export default Test;
