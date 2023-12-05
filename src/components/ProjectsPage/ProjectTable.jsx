import React from "react";
import Link from "next/link";
import Image from "next/image";
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
import { LanguageChip } from "../LanguageChip";
import { CustomPaper } from "../layout/CustomPaper";
import { PLUS_MORE } from "@/consts/projectContent";

export default function ProjectTable(props) {
  const { PROJECT_CONTENT } = props;
  const isDesktopView = useMediaQuery("(min-width:900px)");
  const isLargeMobileView = useMediaQuery("(max-width:612px)");
  const isMobileView = useMediaQuery("(max-width:548px)");
  const isSmallMobileView = useMediaQuery("(max-width:496px)");
  const isExtraSmallMobileView = useMediaQuery("(max-width:412px)");

  const getMaxChipsToShow = () => {
    if (isSmallMobileView) {
      return 1;
    } else if (isMobileView) {
      return 2;
    }
    return 3;
  };

  return (
    <CustomPaper>
      <Table aria-label="Table of projects">
        <TableBody>
          {PROJECT_CONTENT.map((row, projectIndex) => (
            <TableRow
              key={projectIndex}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              {!isLargeMobileView && (
                <TableCell align="right">
                  <Link
                    style={{ textDecoration: "none" }}
                    href={`/project/${row.title}`}
                  >
                    {row.date}
                  </Link>
                </TableCell>
              )}
              <TableCell align="left" height={50}>
                <Link
                  style={{ textDecoration: "none" }}
                  href={`/project/${row.title}`}
                >
                  {/* Generates a smaller image but optimized for 200% dpi scaling */}
                  <Image
                    src={row.imageLink}
                    alt={row.imageAltText}
                    height={100}
                    width={133.4}
                    style={{ height: 50, width: 66.7 }}
                    quality={95}
                  />
                </Link>
              </TableCell>
              <TableCell align="left">
                <Link
                  style={{ textDecoration: "none" }}
                  href={`/project/${row.title}`}
                >
                  <Typography style={{ fontWeight: 400 }}>
                    {row.title}
                  </Typography>
                </Link>
              </TableCell>
              {isDesktopView && (
                <TableCell align="left">
                  <Typography style={{ fontSize: 12.5 }}>
                    {/* Keeps only the first sentence of a project description. */}
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
                        .map((item, chipIndex) => (
                          <LanguageChip
                            key={chipIndex}
                            language={item}
                            size="small"
                            showLink
                          />
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
    </CustomPaper>
  );
}
