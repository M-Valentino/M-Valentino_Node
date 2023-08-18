import React from "react";
import { PROJECT_TITLES } from "@/consts/projectContent";
import { Earth3JSContent } from "@/components/projectExtraContent/Earth3JSContent";
import { IcatContent } from "@/components/projectExtraContent/IcatContent";
import { ExploringCannyEdgeDetectionContent } from "@/components/projectExtraContent/ExploringCannyEdgeDetectionContent";

/**
 * Function to get extra content associated with a project. This content is shown on
 * the project's dedicated page. The extra content is not in the project's json object
 * as it would keep load times on the projects page shorter.
 * @param {*} title the title of the project to get content from.
 * @param {*} isDesktopView an MUI useMediaQuery used in keeping components responsive.
 * @returns extra project contenet in the form of a component.
 */
export const getExtraProjectContent = (title, isDesktopView) => {
  switch (title) {
    case PROJECT_TITLES.earth3Js:
      return <Earth3JSContent />;
    case PROJECT_TITLES.icat:
      return <IcatContent />;
    case PROJECT_TITLES.exploringCannyEdgeDetection:
      return (
        <ExploringCannyEdgeDetectionContent isDesktopView={isDesktopView} />
      );
    default:
      return <></>;
  }
};
