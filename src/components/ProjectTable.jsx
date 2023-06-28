import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { projectContent } from "@/consts/projectContent";
import { Chip, Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function ProjectTable() {
  const isDesktopView = useMediaQuery("(min-width:900px)");
  return (
    <TableContainer component={Paper} sx={{ maxWidth: 900, margin: "auto" }}>
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
                {row.languages.map((props) => (
                  <Chip label={props} size="small" style={{ margin: 2 }} />
                ))}{" "}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
