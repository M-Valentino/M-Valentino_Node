import { colors } from "@mui/material";
import { createTheme } from "@mui/material/styles";
export const SHADOWS = {
  // Shadow used when a project card is not being hovered. Also the static shadow of the projects table.
  initialCardShadow:
    "0px 0.1px 0.2px rgba(0, 0, 0, 0.022), 0px 0.3px 0.4px rgba(0, 0, 0, 0.031), 0px 0.7px 0.9px rgba(0, 0, 0, 0.039), 0px 1.5px 1.8px rgba(0, 0, 0, 0.048), 0px 4px 5px rgba(0, 0, 0, 0.07)",
  /**
   * Shadow that has slightly more blur and a slightly longer vertical distance than cardAndTableShadow.
   * This is used in the hover animation for project cards.
   */
  finalCardShadow:
    "0px 0.2px 1px rgba(0, 0, 0, 0.019), 0px 0.5px 2.6px rgba(0, 0, 0, 0.027), 0px 1.1px 5.3px rgba(0, 0, 0, 0.034), 0px 2.2px 11px rgba(0, 0, 0, 0.042), 0px 6px 30px rgba(0, 0, 0, 0.07)",
  minute: "0px 1px 0.5px rgba(0, 0, 0, 0.049)",
  minuteSVG: "drop-shadow(0px 1px 0.25px rgb(0 0 0 / 0.049))",
  small:
    "0px 1.625px 2.25px rgba(0, 0, 0, 0.065), 0px 1.2px 0.7px rgba(0, 0, 0, 0.045)",
  bookmarkInitial:
    "0px 0.5px 0.25px rgba(0, 0, 0, 0.026),0px 1.3px 1.7px rgba(0, 0, 0, 0.036),0px 3px 3.8px rgba(0, 0, 0, 0.046),0px 10px 13px rgba(0, 0, 0, 0.07)",
  bookmarkFinal:
    "0px 0.7px 0.5px rgba(0, 0, 0, 0.044),0px 1.9px 2px rgba(0, 0, 0, 0.057),0px 4.5px 4.8px rgba(0, 0, 0, 0.07),0px 15px 16px rgba(0, 0, 0, 0.1)",
};

export const BASE_64_IMAGES = {
  binary:
    "url('data:image/gif;base64,R0lGODlhCwAHAPAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh/wtJbWFnZU1hZ2ljaw1nYW1tYT0wLjQ1NDU1ACH5BAkKAAEALAAAAAALAAcAAAIQDIJ2CGuc3JIR2ofzZC26AgAh/wtJbWFnZU1hZ2ljaw1nYW1tYT0wLjQ1NDU1ACH5BAkKAAEALAAAAAALAAcAAAIPRB5guHmr2JPTVdvyjS8XACH/C0ltYWdlTWFnaWNrDWdhbW1hPTAuNDU0NTUAIfkECQoAAQAsAAAAAAsABwAAAg+MA3B4yuhenIbWi2WbvAAAIf8LSW1hZ2VNYWdpY2sNZ2FtbWE9MC40NTQ1NQAh+QQJCgABACwAAAAACwAHAAACEIwBdprRyJZ0s9GLX2QWgQIAIf8LSW1hZ2VNYWdpY2sNZ2FtbWE9MC40NTQ1NQAh+QQJCgABACwAAAAACwAHAAACD0wAZrl9fFx0sEo781MoFQAh/wtJbWFnZU1hZ2ljaw1nYW1tYT0wLjQ1NDU1ACH5BAkKAAEALAAAAAALAAcAAAIQDBBpimvtoEyT2huZeuykAgAh/wtJbWFnZU1hZ2ljaw1nYW1tYT0wLjQ1NDU1ACH5BAkKAAEALAAAAAALAAcAAAIQBIJxiWvpoFST2hsbfI2HAgAh/wtJbWFnZU1hZ2ljaw1nYW1tYT0wLjQ1NDU1ACH5BAkKAAEALAAAAAALAAcAAAIPRB6GpqB5noyrQoonlW4VACH/C0ltYWdlTWFnaWNrDWdhbW1hPTAuNDU0NTUAIfkECQoAAQAsAAAAAAsABwAAAhCMA4eQe93QM7HSeWXWj/UCACH/C0ltYWdlTWFnaWNrDWdhbW1hPTAuNDU0NTUAIfkECQoAAQAsAAAAAAsABwAAAg+MYYeau/Fcm5DWiyUEERUAIf8LSW1hZ2VNYWdpY2sNZ2FtbWE9MC40NTQ1NQAh+QQJCgABACwAAAAACwAHAAACD0xgBqh8mhyTEdqH82ySFQA7')",
  binaryReverse:
    "url('data:image/gif;base64,R0lGODlhCwAHAPAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh/wtJbWFnZU1hZ2ljaw1nYW1tYT0wLjQ1NDU1ACH5BAkKAAEALAAAAAALAAcAAAIPTGAGqHyaHJMR2ofzbJIVACH/C0ltYWdlTWFnaWNrDWdhbW1hPTAuNDU0NTUAIfkECQoAAQAsAAAAAAsABwAAAg+MYYeau/Fcm5DWiyUEERUAIf8LSW1hZ2VNYWdpY2sNZ2FtbWE9MC40NTQ1NQAh+QQJCgABACwAAAAACwAHAAACEIwDh5B73dAzsdJ5ZdaP9QIAIf8LSW1hZ2VNYWdpY2sNZ2FtbWE9MC40NTQ1NQAh+QQJCgABACwAAAAACwAHAAACD0QehqageZ6Mq0KKJ5VuFQAh/wtJbWFnZU1hZ2ljaw1nYW1tYT0wLjQ1NDU1ACH5BAkKAAEALAAAAAALAAcAAAIQBIJxiWvpoFST2hsbfI2HAgAh/wtJbWFnZU1hZ2ljaw1nYW1tYT0wLjQ1NDU1ACH5BAkKAAEALAAAAAALAAcAAAIQDBBpimvtoEyT2huZeuykAgAh/wtJbWFnZU1hZ2ljaw1nYW1tYT0wLjQ1NDU1ACH5BAkKAAEALAAAAAALAAcAAAIPTABmuX18XHSwSjvzUygVACH/C0ltYWdlTWFnaWNrDWdhbW1hPTAuNDU0NTUAIfkECQoAAQAsAAAAAAsABwAAAhCMAXaa0ciWdLPRi19kFoECACH/C0ltYWdlTWFnaWNrDWdhbW1hPTAuNDU0NTUAIfkECQoAAQAsAAAAAAsABwAAAg+MA3B4yuhenIbWi2WbvAAAIf8LSW1hZ2VNYWdpY2sNZ2FtbWE9MC40NTQ1NQAh+QQJCgABACwAAAAACwAHAAACD0QeYLh5q9iT01Xb8o0vFwAh/wtJbWFnZU1hZ2ljaw1nYW1tYT0wLjQ1NDU1ACH5BAkKAAEALAAAAAALAAcAAAIQDIJ2CGuc3JIR2ofzZC26AgA7')",
};
export const COLORS = {
  offWhiteColor: "#fffdfa",
  lightOrange: "#f57F63",
  mainOrange: "#ff5722",
  darkOrange: "#ee4312",
  mainGray: "#444",
  successGreen: "#6a6",
};

export const GRADIENTS = {
  navbar: `linear-gradient(180deg,${COLORS.offWhiteColor}ff 0%, ${COLORS.offWhiteColor}fe 70%, ${COLORS.offWhiteColor}f7 85%, ${COLORS.offWhiteColor}eb 95% , ${COLORS.offWhiteColor}e9 100%)`,
  offWhiteGradient: `linear-gradient(0deg, #fdfbfa 0%, ${COLORS.offWhiteColor} 100%)`,
};

export const SCREEN_CONTROL_STYLES = {
  width: 40,
  height: 40,
  filter:
    "drop-shadow(0px 1px 0.5px rgb(0 0 0 / 0.21)) drop-shadow(0px 1.5px 1px rgb(0 0 0 / 0.24)) drop-shadow(0px 2px 2px rgb(0 0 0 / 0.3))",
};
export const EXTERNAL_FAVICON_STYLES = {
  height: "100%",
  width: "100%",
  margin: "auto",
};

export const Z_INDEX_ORDER = {
  iframeScreenControlShrink: 9999,
  iframeFull: 9998,
  dialog: 8999,
  blogDrawer: 7999,
  mobileNavMenu: 6999,
  navbar: 6998,
  avatar: 5999,
  integratedCircuit: 4999,
};

// This controls the main theme of the website.
export const MainTheme = createTheme({
  palette: {
    action: {
      disabled: "#bbb"
    },
    primary: {
      light: COLORS.lightOrange,
      main: COLORS.mainOrange,
      dark: COLORS.darkOrange,
      contrastText: COLORS.offWhiteColor,
    },
    secondary: {
      light: "#777",
      main: COLORS.mainGray,
      dark: "#000",
      contrastText: "#000",
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
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1736,
    },
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: "contained" },
          style: {
            textShadow: SHADOWS.minute,
            background: `linear-gradient(${COLORS.mainOrange}, ${COLORS.darkOrange})`,
          },
        },{
          props: { disabled: true },
          style: {
            filter: "grayscale(0.65) brightness(1.3)",
          },
        }
      ],
    },
  },
});
