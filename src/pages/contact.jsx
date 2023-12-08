import React, { useRef } from "react";
import { MainWrapper } from "@/components/layout/MainWrapper";
import { CustomPaper } from "@/components/layout/CustomPaper";
import { MainHeading } from "@/components/layout/Headings";
import { Button, TextField } from "@mui/material";
export default function Contact() {
  const emailRef = useRef(); 
  const messageRef = useRef(); 
  const sendValue = () => {
    if (messageRef.current.value.length > 1024  ) {
      console.log("Your message is too long");
    }else if (emailRef.current.value.length > 42){
      console.log("Your email is too long");
    } else {
    console.log(messageRef.current.value);
    }
  };

  return (
    <MainWrapper>
      <CustomPaper>
        <MainHeading>Contact Me</MainHeading>
        <form noValidate autoComplete="off">
          <TextField
            fullWidth
            required
            inputRef={emailRef}
            id="email"
            label="Email address"
            variant="outlined"
            helperText=""
            style={{ marginTop: 20, maxWidth: 300 }}
          />
          <TextField
            fullWidth
            required
            inputRef={messageRef}
            id="standard-textarea"
            label="Your message"
            multiline
            rows={12}
            variant="outlined"
            helperText="bjhb"
            style={{ marginTop: 20 }}
          />
          <Button
            variant="contained"
            color="primary"
            // endIcon={<SendIcon />}
            onClick={sendValue}
          >
            Send
          </Button>
        </form>
      </CustomPaper>
    </MainWrapper>
  );
}
