import React from "react";
import Link from "next/link";
import { Button } from "@mui/material/";
import { GRADIENTS, SHADOWS, Z_INDEX_ORDER } from "../../../consts/stylingValues";
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
  return (
    <>
      <div
        style={{
          top: 0,
          width: "100%",
          height: 45,
          position: "fixed",
          background: GRADIENTS.navbar,
          WebkitBackdropFilter: "blur(5px)",
          boxShadow: SHADOWS.minute,
          paddingBottom: 5,
          paddingTop: 5,
          zIndex: Z_INDEX_ORDER.navbar,
        }}
      >
        {/* For giving the logo touch ripple effects */}
        <Button
          id="logoButton"
          style={{
            padding: 0,
            position: "absolute",
            top: 5,

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
        {/* Depending on the globals.css, either MobileMenu or DesktopMenun shows */}
        <MobileMenu activeLink={activeLink} />
        <DesktopMenu activeLink={activeLink} />
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
