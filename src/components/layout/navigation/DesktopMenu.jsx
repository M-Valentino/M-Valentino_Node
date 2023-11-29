import React from "react";
import UseAnimations from "react-useanimations";
import github from "react-useanimations/lib/github";
import linkedin from "react-useanimations/lib/linkedin";
import { MUI_SECONDARY_COLOR_GRAY } from "@/consts/stylingValues";
import { PAGE_TITLES } from "@/consts/pageTitles";
import { NavButton } from "./NavButton";

export const DesktopMenu = ({ activeLink, isDesktopView }) => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          width: 380,
          margin: "auto",
        }}
      >
        <NavButton
          activeLink={activeLink}
          buttonTextAndOrLink={PAGE_TITLES.home}
        />
        <NavButton
          activeLink={activeLink}
          buttonTextAndOrLink={PAGE_TITLES.projects}
        />
        <NavButton
          activeLink={activeLink}
          buttonTextAndOrLink={PAGE_TITLES.blog}
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: 240,
          position: "absolute",
          top: 0,
          right: isDesktopView ? 50 : 5,
        }}
      >
        {/* Wrapping NavButton inside UseAnimations ensures that
          the animation plays when hovering on the button. */}
        <UseAnimations
          animation={linkedin}
          size={30}
          wrapperStyle={{ transform: "translate(-1px, -4px)" }}
          strokeColor={MUI_SECONDARY_COLOR_GRAY}
          render={(eventProps, animationProps) => (
            <NavButton
              externalLink
              buttonTextAndOrLink={PAGE_TITLES.linkedIn}
              events={eventProps}
            >
              <div {...animationProps} />
            </NavButton>
          )}
        />
        <UseAnimations
          animation={github}
          size={30}
          wrapperStyle={{ transform: "translateY(-4px)" }}
          strokeColor={MUI_SECONDARY_COLOR_GRAY}
          render={(eventProps, animationProps) => (
            <NavButton
              externalLink
              buttonTextAndOrLink={PAGE_TITLES.gitHub}
              events={eventProps}
            >
              <div {...animationProps} />
            </NavButton>
          )}
        />
      </div>
    </>
  );
};
