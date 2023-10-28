import React from "react";
import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Tooltip,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ViewListIcon from "@mui/icons-material/ViewList";
import ViewModuleIcon from "@mui/icons-material/ViewModule";
import { MINUTE_SHADOW, MINUTE_SHADOW_SVG } from "@/consts/stylingValues";
import { MainHeading } from "@/components/Headings";

export const ProjectNavigation = () => {
  return (
    <Grid
      container
      justifyContent="space-between"
      style={{
        width: isDesktopView ? "calc(100% - 100px)" : "calc(100% - 10px)",
        margin: "auto",
        marginTop: 40,
        marginBottom: 20,
      }}
    >
      <Grid item md={4} xs={12}>
        <Stack
          direction="row"
          justifyContent={isTabletView ? "center" : "flex-start"}
        >
          <FormControl
            sx={{ marginRight: 1 }}
            fullWidth
            style={{ maxWidth: 150 }}
          >
            <InputLabel>Sort By</InputLabel>
            <Select
              aria-label="Sort By"
              value={showNewestFirst}
              label="Sort By"
              onChange={handleSetSort}
            >
              <MenuItem value={true}>Newest</MenuItem>
              <MenuItem value={false}>Oldest</MenuItem>
            </Select>
          </FormControl>
          <ToggleButtonGroup
            orientation="horizontal"
            value={view}
            exclusive
            onChange={handleSetView}
            style={{
              whiteSpace: "nowrap",
              boxShadow: MINUTE_SHADOW,
            }}
          >
            <ToggleButton
              value="cardView"
              aria-label="card view"
              disabled={view === "cardView"}
              color="primary"
            >
              <ViewModuleIcon
                style={{
                  transform: "translateY(-1.5px)",
                  marginRight: 2,
                  filter: MINUTE_SHADOW_SVG,
                }}
              />
              {isDesktopView ? "Card View" : "Cards"}
            </ToggleButton>
            <ToggleButton
              value="tableView"
              aria-label="table view"
              disabled={view === "tableView"}
              color="primary"
            >
              <ViewListIcon
                style={{
                  transform: "translateY(-1.5px)",
                  marginRight: 2,
                  filter: MINUTE_SHADOW_SVG,
                }}
              />
              {isDesktopView ? "Table View" : "Table"}
            </ToggleButton>
          </ToggleButtonGroup>
        </Stack>
      </Grid>
      <Grid
        item
        md={4}
        xs={12}
        style={{
          marginTop: isTabletView ? 20 : 0,
        }}
      >
        <MainHeading
          shrinkFontOn={isTabletView}
          addMarginBottomOn={isTabletView}
        >
          Projects
        </MainHeading>
      </Grid>
      <Grid item md={4} xs={12}>
        <Stack direction="row">
          <TextField
            label="Search Projects"
            variant="outlined"
            fullWidth
            onChange={onChangeHandler}
            value={searchInputValue}
            style={{ minWidth: 150 }}
          />

          <Button
            variant="contained"
            sx={{ boxShadow: 1, marginLeft: 1 }}
            onClick={() => filterProjects()}
            aria-label="search"
          >
            <SearchIcon style={{ filter: MINUTE_SHADOW_SVG }} />
          </Button>
          <Tooltip title="Shows all projects again.">
            <Button
              color="secondary"
              variant="outlined"
              sx={{ boxShadow: 1, marginLeft: 1 }}
              onClick={() => handleResetFilter()}
              aria-label="reset search"
            >
              Reset
            </Button>
          </Tooltip>
        </Stack>
      </Grid>
    </Grid>
  );
};
