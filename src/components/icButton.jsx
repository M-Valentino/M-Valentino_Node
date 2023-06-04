import * as React from "react";
import { Stack, Typography } from "@mui/material";

export default function ICButton (props) {
  const {text} = props;

return (
<Stack>
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
      backgroundColor: "#222",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignContent: "center",
      textAlign: "center",
      color: "#ccc",
    }}
  >
    <Typography>{text}</Typography>
  </div>
  <div
    style={{
      width: 125,
      height: 10,
      backgroundColor: "#000",
      boxShadow: "0px 2.5px 0 0px rgba(0,0,0,0.28)",
    }}
  ></div>
  <Stack direction="row">
    <div
      style={{
        width: 5,
        height: 10,
        backgroundColor: "#fea",
        transform: "translate(5px, -5px)",
      }}
    ></div>
    <div
      style={{
        width: 5,
        height: 10,
        backgroundColor: "#fea",
        transform: "translate(10px, -5px)",
      }}
    ></div>
    <div
      style={{
        width: 5,
        height: 10,
        backgroundColor: "#fea",
        transform: "translate(15px, -5px)",
      }}
    ></div>
    <div
      style={{
        width: 5,
        height: 10,
        backgroundColor: "#fea",
        transform: "translate(20px, -5px)",
      }}
    ></div>
    <div
      style={{
        width: 5,
        height: 10,
        backgroundColor: "#fea",
        transform: "translate(25px, -5px)",
      }}
    ></div>
    <div
      style={{
        width: 5,
        height: 10,
        backgroundColor: "#fea",
        transform: "translate(30px, -5px)",
      }}
    ></div>
    <div
      style={{
        width: 5,
        height: 10,
        backgroundColor: "#fea",
        transform: "translate(35px, -5px)",
      }}
    ></div>
    <div
      style={{
        width: 5,
        height: 10,
        backgroundColor: "#fea",
        transform: "translate(40px, -5px)",
      }}
    ></div>
    <div
      style={{
        width: 5,
        height: 10,
        backgroundColor: "#fea",
        transform: "translate(45px, -5px)",
      }}
    ></div>
    <div
      style={{
        width: 5,
        height: 10,
        backgroundColor: "#fea",
        transform: "translate(50px, -5px)",
      }}
    ></div>
    <div
      style={{
        width: 5,
        height: 10,
        backgroundColor: "#fea",
        transform: "translate(55px, -5px)",
      }}
    ></div>
    <div
      style={{
        width: 5,
        height: 10,
        backgroundColor: "#fea",
        transform: "translate(60px, -5px)",
      }}
    ></div>
  </Stack>
</Stack>);

    }
