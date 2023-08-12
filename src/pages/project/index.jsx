import React from "react";
import NavBar from "@/components/navbar";
import { ThemeProvider } from "@mui/material/styles";
import { MainTheme } from "@/utils/MUITheme";
import ProjectPage from "@/components/ProjectPage";
import { PROJECT_CONTENT } from "@/consts/projectContent";
// todo change function name
class Test extends React.Component {
  static async getInitialProps({ query }) {
    return { query };
  }

  render() {
    return (
      <ThemeProvider theme={MainTheme}>
        <NavBar />
        <ProjectPage data={PROJECT_CONTENT[this.props.query.projectID]} />
      </ThemeProvider>
    );
  }
}

export default Test;
