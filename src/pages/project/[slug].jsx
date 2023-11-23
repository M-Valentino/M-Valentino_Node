import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { MainWrapper } from "@/components/layout/MainWrapper";
import ProjectPage from "@/components/ProjectPage";
import { getHeadBoilerPlate } from "@/utils/headBoilerPlate";
import { PROJECT_CONTENT } from "@/consts/projectContent";

// export const dynamic = 'force-dynamic';
/**
 * This is component handles rendering pages for individual projects. Based on the
 * query prop, it determines which project data to show.
 */
export default function ProjectTemplate() {
  const router = useRouter();
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
   router.query.slug
  );

  return (
    <>
      <Head>
        <title>{`Mark Valentino - ${projectToRender?.title}`}</title>
        {getHeadBoilerPlate(projectToRender?.description)}
      </Head>
      <MainWrapper>
        {/* Prevents ProjectPage from reading from an object that isn't there. */}
        {projectToRender && <ProjectPage data={projectToRender} />}
      </MainWrapper>
    </>
  );
}
