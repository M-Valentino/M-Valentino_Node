import React from "react";
import Link from "next/link";
import {
  Stack,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Tooltip,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { LanguageChip } from "./LanguageChip";
import { CARD_AND_TABLE_SHADOW } from "@/consts/stylingValues";
import { PLUS_MORE } from "@/consts/projectContent";

export default function ProjectTable(props) {
  const { projectContent } = props;
  const isDesktopView = useMediaQuery("(min-width:900px)");
  const isLargeMobileView = useMediaQuery("(max-width:600px)");
  const isMobileView = useMediaQuery("(max-width:500px)");
  const isSmallMobileView = useMediaQuery("(max-width:486px)");
  const isExtraSmallMobileView = useMediaQuery("(max-width:384px)");
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

  const getMaxChipsToShow = () => {
    if (isSmallMobileView) {
      return 1;
    } else if (isMobileView) {
      return 2;
    } else {
      return 3;
    }
  };

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
          {projectContent.map((row, key) => (
            <TableRow
              key={row.date}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              {!isLargeMobileView && (
                <TableCell align="right">
                  <Link
                    style={{ textDecoration: "none" }}
                    href={`/project/${key}`}
                  >
                    {row.date}
                  </Link>
                </TableCell>
              )}
              <TableCell align="left" height={50}>
                <Link
                  style={{ textDecoration: "none" }}
                  href={`/project/${key}`}
                >
                  <img src={row.imageLink} style={{ height: "100%" }} />
                </Link>
              </TableCell>
              <TableCell align="left">
                <Link
                  style={{ textDecoration: "none" }}
                  href={`/project/${key}`}
                >
                  <Typography style={{ fontWeight: 400 }}>
                    {row.title}
                  </Typography>
                </Link>
              </TableCell>
              {isDesktopView && (
                <TableCell align="left">
                  <Typography style={{ fontSize: 12.5 }}>
                    {row.description.split(/[\.|\?]/, 1)[0]}...
                  </Typography>
                </TableCell>
              )}
              {!isExtraSmallMobileView && (
                <TableCell align="left">
                  <Tooltip
                    title={
                      row.languages.length > getMaxChipsToShow()
                        ? row.languages.join(", ")
                        : ""
                    }
                  >
                    <Stack direction="row" spacing={1}>
                      {row.languages
                        .slice(0, getMaxChipsToShow())
                        .map((props) => (
                          <LanguageChip language={props} size="small" />
                        ))}
                      {row.languages.length > getMaxChipsToShow() ? (
                        <LanguageChip language={PLUS_MORE} size="small" />
                      ) : (
                        <></>
                      )}
                    </Stack>
                  </Tooltip>
                </TableCell>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
