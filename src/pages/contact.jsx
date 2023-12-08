import React, { useRef, useState } from "react";
import { MainWrapper } from "@/components/layout/MainWrapper";
import { CustomPaper } from "@/components/layout/CustomPaper";
import { MainHeading } from "@/components/layout/Headings";
import { Button, TextField } from "@mui/material";
import {
  checkEmailInvalid,
  checkEmailTooLong,
  checkMessageTooLong,
} from "@/utils/validations";
export default function Contact() {
  const emailRef = useRef();
  const messageRef = useRef();
  const [emailTooLong, setEmailTooLong] = useState(false);
  const [emailInvalid, setEmailInvalid] = useState(false);
  const [messageTooLong, setMessageTooLong] = useState(false);
  const sendValue = () => {
    if (checkEmailTooLong(emailRef.current.value)) {
      setEmailTooLong(() => true);
    } else {
      setEmailTooLong(() => false);
    }
    if (checkEmailInvalid(emailRef.current.value)) {
      setEmailInvalid(() => true);
    } else {
      setEmailInvalid(() => false);
    }
    if (checkMessageTooLong(messageRef.current.value)) {
      setMessageTooLong(() => true);
    } else {
      setMessageTooLong(() => false);
    }
    console.log(messageRef.current.value);
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
            error={emailTooLong || emailInvalid}
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
            error={messageTooLong}
            id="standard-textarea"
            label="Your message"
            multiline
            rows={12}
            variant="outlined"
            helperText="bjhb"
            style={{ marginTop: 30 }}
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
