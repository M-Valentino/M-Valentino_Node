import Link from "next/link";
import { Grid, Typography } from "@mui/material";
import ICButton from "@/components/icButton";

export default function Custom404() {
  return (
    <>
      <Typography variant="h2" style={{ textAlign: "center" }}>
        404 - Page Not Found
      </Typography>
      <Link href="/">
        <ICButton />
      </Link>
      <Grid container>
        {Array.apply(null, { length: 500 }).map((i, index) => (
          <Grid item key={i}>
            <Typography
              style={{
                color: `hsl(${(index * 0.2) % 30}, ${Math.floor(
                  Math.random() * 100
                )}%, 84%)`,
                transform: `rotate(${index * (360 / 1000)}deg)`,
              }}
            >
              {" "}
              The selected page could not be returned.{" "}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
