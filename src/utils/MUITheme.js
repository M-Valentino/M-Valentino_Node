import { createTheme } from "@mui/material/styles";
import { OFF_WHITE_COLOR, MUI_PRIMARY_COLOR_DEEP_ORANGE } from "@/consts/stylingValues";

// This controls the main theme of the website.
export const MainTheme = createTheme({
  palette: {
    primary: {
      light: "#ff8720",
      main: MUI_PRIMARY_COLOR_DEEP_ORANGE,
      dark: '#ee4312',
      contrastText: OFF_WHITE_COLOR,
    },
    secondary: {
      light: '#777',
      main: '#444',
      dark: '#000',
      contrastText: '#000',
    },
    tertiary: {
      light: '#fff',
      main: '#fdfdfd',
      dark: '#aaa',
    },
    text: {
      primary: "#000",
      secondary: "#444",
    },
  },
  typography: {
    button: {
      textTransform: 'none'
    }
  },
});
