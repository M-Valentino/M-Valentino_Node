import React from "react";
import Link from "next/link";
import { Typography } from "@mui/material";

export const Earth3JSContent = () => {
  return (
    <>
      <Typography variant="h4" gutterBottom>
        How it was coded
      </Typography>
      <Typography paragraph>
        I used{" "}
        <Link href="https://threejs.org/docs/#api/en/geometries/SphereGeometry">
          SphereGeometry
        </Link>{" "}
        components for coding the earth and moon. For the moon, it was quite
        simple as I essentially needed a simple sphere. However, it wasn't so
        easy with generating the earth as I wanted to have animated clouds that
        would move across the earth's surface. I came up with the solution to
        make a transparent sphere with the clouds texture that would encapsulate
        the earth. This transparent sphere has a diameter of 2.005, and the
        earth has a diameter of just 2.
      </Typography>
      <Typography paragraph>
        Giving users the option to toggle between high and low settings was a
        must have in my mind, so I created a clickable floating toggle button
        that would turn off the advanced shading, lower polygon counts, and load
        lower resolution textures.
      </Typography>
      <Typography paragraph>
        I wanted to have all the objects in the scene be in motion. I was able
        to have the the earth sphere, the clouds sphere, and the moons sphere
        all rotate on their Y axises. Coding the moon to orbit to orbit the
        earth was a challenge. I applied a trigonometric formula for orbital
        motion to move the moon on its X and Z axises. The settings toggle had
        oscillation applied to all of its axises in varying amounts to give the
        impression it was floating in space.
      </Typography>
      <Typography paragraph>
        I thought it would be neat to be able to change the simulation speed or
        to just pause the simulation, so I implemented a speed control{" "}
        <Link href="https://mui.com/material-ui/react-slider/">slider</Link>.
        The value from the slider was placed as a coefficient in all animation
        formulas.
      </Typography>
    </>
  );
};
