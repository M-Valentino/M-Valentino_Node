import * as React from "react";
import { Stack, Typography } from "@mui/material";
import zIndex from "@mui/material/styles/zIndex";

export default function ICButton() {
  return (
    <Stack
      style={{ position: "absolute", top: 200, left: "calc(50% - 62.5px)", zIndex: 9}}
    >
      <div
        style={{
          width: 10,
          height: 5,
          backgroundColor: "#000",
          transform: "translate(0, 17.5px)",
        }}
      ></div>
      <div
        style={{
          width: 125,
          height: 30,
          backgroundColor: "#223",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignContent: "center",
          textAlign: "center",
          color: "#ccc",
        }}
      ><Typography>Go to Home</Typography></div>
      <div
        style={{
          width: 125,
          height: 10,
          backgroundColor: "#000",
          boxShadow: "0px 2.5px 0 0px rgba(0,0,0,0.1)",
        }}
      ></div>
      <Stack direction="row">
        <div
          style={{
            width: 5,
            height: 10,
            background:
              "linear-gradient(180deg, rgba(255,238,170,1) 0%, rgba(255,238,170,1) 25%, rgba(219,210,177,1) 25%, rgba(219,210,177,1) 100%)",
            transform: "translate(5px, -5px)",
            // borderTopLeftRadius: '40px 10px',
            // borderTopRightRadius: '40px 10px',
            borderBottomLeftRadius: "4px 1px",
            borderBottomRightRadius: "4px 1px",
          }}
        ></div>
        <div
          style={{
            width: 5,
            height: 10,
            background:
              "linear-gradient(180deg, rgba(255,238,170,1) 0%, rgba(255,238,170,1) 25%, rgba(219,210,177,1) 25%, rgba(219,210,177,1) 100%)",
            transform: "translate(10px, -5px)",
          }}
        ></div>
        <div
          style={{
            width: 5,
            height: 10,
            background:
              "linear-gradient(180deg, rgba(255,238,170,1) 0%, rgba(255,238,170,1) 25%, rgba(219,210,177,1) 25%, rgba(219,210,177,1) 100%)",
            transform: "translate(15px, -5px)",
          }}
        ></div>
        <div
          style={{
            width: 5,
            height: 10,
            background:
              "linear-gradient(180deg, rgba(255,238,170,1) 0%, rgba(255,238,170,1) 25%, rgba(219,210,177,1) 25%, rgba(219,210,177,1) 100%)",
            transform: "translate(20px, -5px)",
          }}
        ></div>
        <div
          style={{
            width: 5,
            height: 10,
            background:
              "linear-gradient(180deg, rgba(255,238,170,1) 0%, rgba(255,238,170,1) 25%, rgba(219,210,177,1) 25%, rgba(219,210,177,1) 100%)",
            transform: "translate(25px, -5px)",
          }}
        ></div>
        <div
          style={{
            width: 5,
            height: 10,
            background:
              "linear-gradient(180deg, rgba(255,238,170,1) 0%, rgba(255,238,170,1) 25%, rgba(219,210,177,1) 25%, rgba(219,210,177,1) 100%)",
            transform: "translate(30px, -5px)",
          }}
        ></div>
        <div
          style={{
            width: 5,
            height: 10,
            background:
              "linear-gradient(180deg, rgba(255,238,170,1) 0%, rgba(255,238,170,1) 25%, rgba(219,210,177,1) 25%, rgba(219,210,177,1) 100%)",
            transform: "translate(35px, -5px)",
          }}
        ></div>
        <div
          style={{
            width: 5,
            height: 10,
            background:
              "linear-gradient(180deg, rgba(255,238,170,1) 0%, rgba(255,238,170,1) 25%, rgba(219,210,177,1) 25%, rgba(219,210,177,1) 100%)",
            transform: "translate(40px, -5px)",
          }}
        ></div>
        <div
          style={{
            width: 5,
            height: 10,
            background:
              "linear-gradient(180deg, rgba(255,238,170,1) 0%, rgba(255,238,170,1) 25%, rgba(219,210,177,1) 25%, rgba(219,210,177,1) 100%)",
            transform: "translate(45px, -5px)",
          }}
        ></div>
        <div
          style={{
            width: 5,
            height: 10,
            background:
              "linear-gradient(180deg, rgba(255,238,170,1) 0%, rgba(255,238,170,1) 25%, rgba(219,210,177,1) 25%, rgba(219,210,177,1) 100%)",
            transform: "translate(50px, -5px)",
          }}
        ></div>
        <div
          style={{
            width: 5,
            height: 10,
            background:
              "linear-gradient(180deg, rgba(255,238,170,1) 0%, rgba(255,238,170,1) 25%, rgba(219,210,177,1) 25%, rgba(219,210,177,1) 100%)",
            transform: "translate(55px, -5px)",
          }}
        ></div>
        <div
          style={{
            width: 5,
            height: 10,
            background:
              "linear-gradient(180deg, rgba(255,238,170,1) 0%, rgba(255,238,170,1) 25%, rgba(219,210,177,1) 25%, rgba(219,210,177,1) 100%)",
            transform: "translate(60px, -5px)",
          }}
        ></div>
      </Stack>
    </Stack>
  );
}
