import React from "react";
import ProjectPage from "@/components/projectPage";
import { projectContent } from "@/consts/projectContent";

class Test extends React.Component {
  static async getInitialProps({ query }) {
    return { query };
  }
  

  render() {
    return (
      <ProjectPage data={projectContent[this.props.query.projectID]} />
    );
  }
}

export default Test;
