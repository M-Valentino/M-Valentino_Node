import { createTheme } from "@mui/material/styles";
// Shadow used when a project card is not being hovered. Also the static shadow of the projects table.
export const CARD_AND_TABLE_SHADOW =
  "0px 0.1px 0.2px rgba(0, 0, 0, 0.022), 0px 0.3px 0.4px rgba(0, 0, 0, 0.031), 0px 0.7px 0.9px rgba(0, 0, 0, 0.039), 0px 1.5px 1.8px rgba(0, 0, 0, 0.048), 0px 4px 5px rgba(0, 0, 0, 0.07)";
/**
 * Shadow that has slightly more blur and a slightly longer vertical distance than cardAndTableShadow.
 * This is used in the hover animation for project cards.
 */
export const FINAL_CARD_SHADOW =
  "0px 0.2px 1px rgba(0, 0, 0, 0.019), 0px 0.5px 2.6px rgba(0, 0, 0, 0.027), 0px 1.1px 5.3px rgba(0, 0, 0, 0.034), 0px 2.2px 11px rgba(0, 0, 0, 0.042), 0px 6px 30px rgba(0, 0, 0, 0.07)";

export const MINUTE_SHADOW = "0px 1px 0.5px rgba(0, 0, 0, 0.045)";
export const MINUTE_SHADOW_SVG =
  "drop-shadow(0px 1px 0.25px rgb(0 0 0 / 0.045))";
export const SMALL_SHADOW =
  "0px 1.625px 2.25px rgba(0, 0, 0, 0.065), 0px 1.2px 0.7px rgba(0, 0, 0, 0.045)";

export const BOOKMARK_INITAL_SHADOW =
  "0px 0.5px 0.25px rgba(0, 0, 0, 0.026),0px 1.3px 1.7px rgba(0, 0, 0, 0.036),0px 3px 3.8px rgba(0, 0, 0, 0.046),0px 10px 13px rgba(0, 0, 0, 0.07)";
export const BOOKMARK_FINAL_SHADOW =
  "0px 0.7px 0.5px rgba(0, 0, 0, 0.044),0px 1.9px 2px rgba(0, 0, 0, 0.057),0px 4.5px 4.8px rgba(0, 0, 0, 0.07),0px 15px 16px rgba(0, 0, 0, 0.1)";

export const OFF_WHITE_COLOR = "#fffdfa";
export const MUI_PRIMARY_COLOR_DEEP_ORANGE_LIGHT = "#f57F63";
export const MUI_PRIMARY_COLOR_DEEP_ORANGE = "#ff5722";
export const MUI_PRIMARY_COLOR_DEEP_ORANGE_DARK = "#ee4312";
export const MUI_SECONDARY_COLOR_GRAY = "#444";
export const OFF_WHITE_GRADIENT = `linear-gradient(0deg, #fdfbfa 0%, ${OFF_WHITE_COLOR} 100%)`;

export const SCREEN_CONTROL_STYLES = {
  width: 40,
  height: 40,
  filter:
    "drop-shadow(0px 1px 0.5px rgb(0 0 0 / 0.21)) drop-shadow(0px 1.5px 1px rgb(0 0 0 / 0.24)) drop-shadow(0px 2px 2px rgb(0 0 0 / 0.3))",
};

// This controls the main theme of the website.
export const MainTheme = createTheme({
  palette: {
    primary: {
      light: MUI_PRIMARY_COLOR_DEEP_ORANGE_LIGHT,
      main: MUI_PRIMARY_COLOR_DEEP_ORANGE,
      dark: MUI_PRIMARY_COLOR_DEEP_ORANGE_DARK,
      contrastText: OFF_WHITE_COLOR,
    },
    secondary: {
      light: "#777",
      main: MUI_SECONDARY_COLOR_GRAY,
      dark: "#000",
      contrastText: "#000",
    },
    tertiary: {
      light: "#fff",
      main: "#fdfdfd",
      dark: "#aaa",
    },
    text: {
      primary: "#000",
      secondary: "#444",
    },
  },
  // Makes button text not in all caps
  typography: {
    button: {
      textTransform: "none",
    },
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: "contained" },
          style: {
            textShadow: MINUTE_SHADOW,
          },
        },
      ],
    },
  },
});
