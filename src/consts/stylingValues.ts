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
  gitHubAvatar:
    " data:image/webp;base64,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",
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
      disabled: "#a0a0a0",
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
        },
        {
          props: { disabled: true },
          style: {
            filter: "grayscale(0.8) brightness(1.5)",
          },
        },
      ],
    },
  },
});
