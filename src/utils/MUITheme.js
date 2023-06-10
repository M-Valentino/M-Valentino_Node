import { createTheme } from "@mui/material/styles";
import { orange, grey } from "@mui/material/colors";

export const MainTheme = createTheme({
  palette: {
    primary: orange,
    secondary: grey,
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
