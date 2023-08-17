import React from "react";
import { PROJECT_TITLES } from "@/consts/projectContent";
import { Earth3JSContent } from "@/components/projectExtraContent/Earth3JSContent";

export const getExtraProjectContent = (title) => {
  switch (title) {
    case PROJECT_TITLES.Earth3Js:
      return <Earth3JSContent/>;
    default:
      return <></>;
  }

}