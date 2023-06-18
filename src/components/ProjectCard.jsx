import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import { ThemeProvider } from "@mui/material/styles";
import { MainTheme } from "@/utils/MUITheme";

export default function ProjectCard(props) {
  const { href, imageLink, title, date, description, languages } = props.data;

  return (
    <>
      <ThemeProvider theme={MainTheme}>
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
                  <Chip key={index} label={props}/>
                ))}
              </Stack>
            </CardContent>
          </a>
        </Card>
      </ThemeProvider>
    </>
  );
}
