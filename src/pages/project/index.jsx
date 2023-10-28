import React from "react";
import Head from "next/head";
import { MainWrapper } from "@/components/layout/MainWrapper";
import ProjectPage from "@/components/ProjectPage";
import { getHeadBoilerPlate } from "@/utils/headBoilerPlate";
import { PROJECT_CONTENT } from "@/consts/projectContent";

/**
 * This is component handles rendering pages for individual projects. Based on the
 * query prop, it determines which project data to show.
 */
class ProjectTemplate extends React.Component {
  static async getInitialProps({ query }) {
    return { query };
  }

  render() {
    /**
     * Function to look through all projects and return only one project that
     * has the same title as projectTitle. This is so that projects can be hyperlinked
     * in the format: .../project/<project title>.
     * @param {*} projectTitle
     * @returns JSON snippet of the project to render.
     */
    const filterProjectMatchingTitle = (projectTitle) => {
      var result = PROJECT_CONTENT.filter((obj) => {
        return obj.title === projectTitle;
      });
      return result[0];
    };

    const projectToRender = filterProjectMatchingTitle(
      this.props.query.projectID
    );

    return (
      <>
        <Head>
          <title>{`Mark Valentino - ${projectToRender.title}`}</title>
          {getHeadBoilerPlate(projectToRender.description)}
        </Head>
        <MainWrapper>
          <ProjectPage data={projectToRender} />
        </MainWrapper>
      </>
    );
  }
}

export default ProjectTemplate;
