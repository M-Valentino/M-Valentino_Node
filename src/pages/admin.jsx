import React, { useRef, useState } from "react";
import { CustomPaper } from "@/components/layout/CustomPaper";
import { MainWrapper } from "@/components/layout/MainWrapper";
import nextBase64 from "next-base64";
import { Button, Grid, Divider, TextField, Typography } from "@mui/material";

export default function Admin() {
  const numberOfMessages = useRef();
  const password = useRef();
  const [messages, setMessages] = useState(null);
  const [error, setError] = useState("");

  async function getMessages() {
    try {
      const response = await fetch(
        `/api/message-inbox?numberOfMessages=${
          numberOfMessages.current.value - 1
        }&password=`,
        {
          method: "GET",
          headers: new Headers({
            Authorization: nextBase64.encode(password.current.value),
            "Content-Type": "application/x-www-form-urlencoded",
          }),
        }
      );
      const data = await response.json();
      setMessages(data.message);
    } catch (err) {
      const errorMessage = "Error: " + err.message;
      setError(errorMessage);
    }
  }

  return (
    <>
      <MainWrapper>
        <CustomPaper>
          <form>
            <Grid container style={{ maxWidth: 600 }} spacing={1}>
              <Grid item sm={4} xs={12}>
                <TextField
                  required
                  inputRef={numberOfMessages}
                  name="Number of Messages"
                  label="Number of Messages"
                  variant="outlined"
                  size="small"
                />
              </Grid>
              <Grid item sm={4} xs={12}>
                <TextField
                  required
                  inputRef={password}
                  name="password"
                  label="password"
                  variant="outlined"
                  size="small"
                  type="password"
                />
              </Grid>
              <Grid item sm={4} xs={12}>
                <Button variant="contained" onClick={() => getMessages()}>
                  Sumbit
                </Button>
              </Grid>
            </Grid>
            {error}
          </form>
        </CustomPaper>
        {messages !== null && (
          <CustomPaper>
            {messages?.map((value, index) => (
              <span key={index}>
                {/* email */}
                <Typography variant="h6">{value.split("␟", 1)[0]}</Typography>
                {/* message body */}
                <Typography>{value.split("␟", 2)[1]}</Typography>
                {/* time stamp */}
                <Typography>{value.split("␟", 3)[2]}</Typography>
                {index !== messages.length - 1 && (
                  <Divider style={{ marginBottom: 30, marginTop: 30 }} />
                )}
              </span>
            ))}
          </CustomPaper>
        )}
      </MainWrapper>
    </>
  );
}
