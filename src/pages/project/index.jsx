import React from "react";
import { Stack, Typography, useMediaQuery } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { MainTheme } from "@/utils/MUITheme";
import { LanguageChip } from "@/components/LanguageChip";
import { projectContent } from "@/consts/projectContent";


class Test extends React.Component {
  static async getInitialProps({ query }) {
 
    return { query };
  }

  render() {
    return (
      <ThemeProvider theme={MainTheme}>
        <div>
          <pre>
            {JSON.stringify(projectContent[this.props.query.projectID])}
          </pre>
        </div>
        <div
          style={{
            backgroundColor: "#fffdfa",
            width: 360,
            padding: 24,
            borderRadius: 4,
            textRendering: "geometricPrecision!important",
          }}
        >
          <img
            src={projectContent[this.props.query.projectID].imageLink}
            style={{
              width: "100%",
              borderRadius: 2,
              boxShadow: "0 1px 1px rgba(0, 0, 0, 0.1)",
            }}
          ></img>
          <Stack direction="row" spacing={1}>
            <Typography variant="h6" color="primary">
              {projectContent[this.props.query.projectID].date}
            </Typography>
            <Typography
              // variant={smallerTitleFontNeeded ? "h6" : "h5"}
              color="text.primary"
            >
              {projectContent[this.props.query.projectID].title}
            </Typography>
          </Stack>
          <div style={{ height: 145 }}>
            <Typography
              variant="body2"
              color="text.secondary"
              style={{ textAlign: "justify" }}
            >
              {projectContent[this.props.query.projectID].description}
            </Typography>
          </div>
          <Stack direction="row" spacing={1} mt={1}>
            {projectContent[this.props.query.projectID].languages.map((props, index) => (
              <LanguageChip index={index} language={props} size="full" />
            ))}
          </Stack>
        </div>
      </ThemeProvider>
    );
  }
}

export default Test;
