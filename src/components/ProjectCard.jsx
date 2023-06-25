import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Grow from '@mui/material/Grow';
import { ThemeProvider } from "@mui/material/styles";
import { MainTheme } from "@/utils/MUITheme";
import { LANGUAGES } from "@/consts/projectContent";

export default function ProjectCard(props, index) {
  const { href, imageLink, title, date, description, languages } = props.data;

  const getChipColor = language => {
    switch (language) {
      case LANGUAGES.css:
        return '#ffb3ba'
      case LANGUAGES.java:
        return '#ffdfba'
      case LANGUAGES.vanillaJS:
        return '#ffffba'
      case LANGUAGES.python:
        return '#baffc9'
      default:
        return '#bae1ff'
    }
  }

  return (
    <>
      <ThemeProvider theme={MainTheme}>
      <Grow in timeout={250 * props.index + 250} >
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
                  <Chip index={index} label={props} style={{backgroundColor: getChipColor(props)}}/>
                ))}
              </Stack>
            </CardContent>
          </a>
        </Card>
        </Grow>
      </ThemeProvider>
    </>
  );
}
