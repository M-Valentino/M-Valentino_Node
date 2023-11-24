import React from "react";
import Head from "next/head";
import { MainWrapper } from "@/components/layout/MainWrapper";
import ProjectPage from "@/components/ProjectPage";
import { getHeadBoilerPlate } from "@/utils/headBoilerPlate";
import { PROJECT_CONTENT } from "@/consts/projectContent";

export const getStaticPaths = async () => {
  const paths = PROJECT_CONTENT.map((key) => {
    return { params: { projectTitle: key.title } };
  });

  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const projectTitle = context.params.projectTitle;
  const project = PROJECT_CONTENT.find((obj) => obj.title === projectTitle);
  return { props: { project: project } };
};

export default function ProjectTemplate({ project }) {
  return (
    <>
      <Head>
        <title>{`Mark Valentino - ${project.title}`}</title>
        {getHeadBoilerPlate(project.description)}
      </Head>
      <MainWrapper>
        <ProjectPage data={project} />
      </MainWrapper>
    </>
  );
}
