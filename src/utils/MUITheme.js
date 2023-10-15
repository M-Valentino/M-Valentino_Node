import { createTheme } from "@mui/material/styles";
import { deepOrange } from "@mui/material/colors";

// This controls the main theme of the website.
export const MainTheme = createTheme({
  palette: {
    primary: deepOrange,
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
  }
});
