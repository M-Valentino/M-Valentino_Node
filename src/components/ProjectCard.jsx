import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Grow from "@mui/material/Grow";
import { ThemeProvider } from "@mui/material/styles";
import { MainTheme } from "@/utils/MUITheme";
import { LanguageChip } from "./LanguageChip";
import { LANGUAGES } from "@/consts/projectContent";

export default function ProjectCard(props) {
  const { href, imageLink, title, date, description, languages } = props.data;

  /**
   * Function for determining which background color the coding language tags will have
   * @param {*} language the string value of the language
   * @returns the hex color
   */
  const getChipColor = (language) => {
    switch (language) {
      case LANGUAGES.css:
        return "#ffb3ba";
      case LANGUAGES.java:
        return "#ffdfba";
      case LANGUAGES.vanillaJS:
        return "#ffffba";
      case LANGUAGES.python:
        return "#baffc9";
      case LANGUAGES.react:
        return "#bac9ff";
      default:
        return "#bae1ff";
    }
  };

  return (
    <ThemeProvider theme={MainTheme}>
      {/* Cards on the projects page will appear one after another. Cards with a lower index will apear sooner. */}
      <Grow in timeout={250 * props.index + 250}>
        <Card sx={{ maxWidth: 345 }}>
          <a style={{ textDecoration: "none" }} href={href}>
            <CardContent>
              <img src={imageLink} style={{ width: "100%" }}></img>
              <Stack direction="row" spacing={1}>
                <Typography variant="h6" color="primary">
                  {date}
                </Typography>
                <Typography variant="h5" color="text.primary">
                  {title}
                </Typography>
              </Stack>
              <Typography
                variant="body2"
                color="text.secondary"
                style={{ textAlign: "justify" }}
              >
                {description}
              </Typography>
              <Stack direction="row" spacing={1} mt={1}>
                {languages.map((props, index) => (
                  <LanguageChip
                    index={index}
                    label={props}
                    backgroundColor={getChipColor(props)}
                  />
                ))}
              </Stack>
            </CardContent>
          </a>
        </Card>
      </Grow>
    </ThemeProvider>
  );
}
