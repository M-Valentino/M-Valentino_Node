import { createTheme } from "@mui/material/styles";
import { orange, deepOrange } from "@mui/material/colors";

export const MainTheme = createTheme({
  palette: {
    primary: orange,
    secondary: {
      light: '#777',
      main: '#444',
      dark: '#000',
      contrastText: '#000',
    },
    text: {
      secondary: "#444",
    },
  },
});
