import React from "react";
import Link from "next/link";
import { Button, useMediaQuery } from "@mui/material/";
import { COLORS, SHADOWS, Z_INDEX_ORDER } from "@/consts/stylingValues";
import { MobileMenu } from "./MobileMenu";
import { DesktopMenu } from "./DesktopMenu";

/**
 * This component is the main navbar of the site and determines
 * whether to show the mobile or desktop menu.
 * @param {*} activeLink The index of the button (desktop) or
 * menu item (mobile) to change color to show it is the active link.
 * @returns component
 */
const NavBar = ({ activeLink }) => {
  const isDesktopView = useMediaQuery("(min-width:1200px)");
  const isMobileView = useMediaQuery("(max-width:876px)");

  return (
    <>
      <div
        style={{
          top: 0,
          width: "100%",
          height: isMobileView ? 45 : "none",
          position: "fixed",
          background: `linear-gradient(180deg,${COLORS.offWhiteColor}ff 0%, ${COLORS.offWhiteColor}fe 65%, ${COLORS.offWhiteColor}f7 85%, ${COLORS.offWhiteColor}eb 100%)`,
          WebkitBackdropFilter: "blur(5px)",
          boxShadow: SHADOWS.minute,
          paddingBottom: 5,
          paddingTop: 5,
          zIndex: Z_INDEX_ORDER.third,
        }}
      >
        {/* For giving the logo touch ripple effects */}
        <Button
          style={{
            padding: 0,
            position: "absolute",
            top: 5,
            left: isDesktopView ? 50 : 5,
          }}
        >
          <div
            style={{
              width: 115,
            }}
          >
            <Link href="/">
              <img
                alt="Mark Valentino logo"
                src="/mark-valentino-logo.svg"
                style={{
                  width: "100%",
                  filter: SHADOWS.minuteSVG,
                }}
              />
            </Link>
          </div>
        </Button>

        {isMobileView ? (
          <MobileMenu activeLink={activeLink} />
        ) : (
          <DesktopMenu activeLink={activeLink} isDesktopView={isDesktopView} />
        )}
      </div>
      {/* For creating spacing below the navbar  */}
      <div
        style={{
          width: "100%",
          height: 43.5,
          marginBottom: 50,
        }}
      ></div>
    </>
  );
};
export default NavBar;
