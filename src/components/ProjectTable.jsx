import React from "react";
import {
  Stack,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { LanguageChip } from "./LanguageChip";
import { CARD_AND_TABLE_SHADOW } from "@/consts/stylingValues";

export default function ProjectTable(props) {
  const { projectContent } = props;
  const isDesktopView = useMediaQuery("(min-width:900px)");
  // Anaimation that is shown when the table first appears.
  // const tableZoom = useSpring({
  //   from: {
  //     scale: 0,
  //     opacity: 0,
  //   },
  //   to: {
  //     scale: 1,
  //     opacity: 1,
  //   },
  //   config: {
  //     mass: 1,
  //     friction: 19,
  //   },
  // });
  return (
    <div
      style={{
        maxWidth: 900,
        margin: "auto",
        borderRadius: 4,
        backgroundColor: "#fffdfa",
        boxShadow: CARD_AND_TABLE_SHADOW,
        textRendering: "geometricPrecision!important",
        // ...tableZoom,
      }}
    >
      <Table aria-label="simple table">
        <TableBody>
          {projectContent.map((row) => (
            <TableRow
              key={row.date}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="right">{row.date}</TableCell>
              <TableCell align="left" height={50}>
                <img src={row.imageLink} style={{ height: "100%" }} />
              </TableCell>
              <TableCell align="left">
                <Typography style={{ fontWeight: 400 }}>{row.title}</Typography>
              </TableCell>
              {isDesktopView && (
                <TableCell align="left">
                  <Typography style={{ fontSize: 12.5 }}>
                    {row.description.split(". ", 1)[0]}...
                  </Typography>
                </TableCell>
              )}
              <TableCell align="left">
                <Stack direction="row" spacing={1}>
                  {row.languages.map((props) => (
                    <LanguageChip language={props} size="small" />
                  ))}{" "}
                </Stack>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
