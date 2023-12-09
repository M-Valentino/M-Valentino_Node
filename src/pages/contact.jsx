import React, { useEffect, useRef, useState } from "react";
import nextBase64 from "next-base64";
import { MainWrapper } from "@/components/layout/MainWrapper";
import { CustomPaper } from "@/components/layout/CustomPaper";
import { MainHeading } from "@/components/layout/Headings";
import { Button, TextField } from "@mui/material";
import {
  checkEmailInvalid,
  checkEmailTooLong,
  checkMessageInvalid,
  checkMessageTooLong,
  checkMessageTooShort,
  checkHasGibberish,
  MAX_MESSAGE_LENGTH,
} from "@/utils/validations";

export default function Contact() {
  const emailRef = useRef();
  const messageRef = useRef();
  const [emailTooLong, setEmailTooLong] = useState(null);
  const [emailInvalid, setEmailInvalid] = useState(null);
  const [messageTooLong, setMessageTooLong] = useState(null);
  const [messageTooShort, setMessageTooShort] = useState(null);
  const [messageInvalid, setMessageInvalid] = useState(null);
  const [messageHasGibberish, setMessageHasGibberish] = useState(null);
  const [messageSent, setMessageSent] = useState(false);

  const validate = () => {
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
    if (checkMessageTooShort(messageRef.current.value)) {
      setMessageTooShort(() => true);
    } else {
      setMessageTooShort(() => false);
    }
    if (checkMessageInvalid(messageRef.current.value)) {
      setMessageInvalid(() => true);
    } else {
      setMessageInvalid(() => false);
    }
    if (checkHasGibberish(messageRef.current.value)) {
      setMessageHasGibberish(() => true);
    } else {
      setMessageHasGibberish(() => false);
    }
  };

  useEffect(() => {
    if (
      emailTooLong === false &&
      emailInvalid === false &&
      messageTooLong === false &&
      messageTooShort === false &&
      messageInvalid === false &&
      messageHasGibberish === false &&
      messageSent === false
    ) {
      fetch(
        `/api/sendMessage?email=${nextBase64.encode(
          emailRef.current.value
        )}&message=${nextBase64.encode(messageRef.current.value)}`
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.message === "success") {
            setMessageSent(() => true);
          }
        })
        .catch((err) =>
          alert(`Could not send message due to a server error${err}`)
        );
    }
  }, [
    emailTooLong,
    emailInvalid,
    messageTooLong,
    messageTooShort,
    messageInvalid,
    messageHasGibberish,
    messageSent,
  ]);

  const getEmailHelperText = () => {
    if (emailInvalid && emailTooLong) {
      return "What are you doing?";
    } else if (emailInvalid) {
      return "Please enter a valid email.";
    } else if (emailTooLong) {
      return "Your email is too long.";
    }
    return "";
  };

  const getMessageHelperText = () => {
    if (messageInvalid && messageTooLong) {
      return `Message contains invalid character(s). Also, please limit your message to ${MAX_MESSAGE_LENGTH} characters.`;
    } else if (messageInvalid && messageTooShort) {
      return "Message contains invalid character(s). Also, your message is too short.";
    } else if (messageInvalid) {
      return "Message contains invalid character(s).";
    } else if (messageTooLong) {
      return `Please limit your message to ${MAX_MESSAGE_LENGTH} characters.`;
    } else if (messageTooShort) {
      return "Your message is too short.";
    } else if (messageHasGibberish) {
      return "Your message can't be sent because it is possibly spam.";
    }
    return "";
  };

  return (
    <MainWrapper>
      <CustomPaper>
        <MainHeading>Contact Me</MainHeading>
        <form>
          <TextField
            fullWidth
            required
            inputRef={emailRef}
            error={emailTooLong || emailInvalid}
            name="email"
            label="Email address"
            variant="outlined"
            helperText={getEmailHelperText()}
            style={{ marginTop: 20, maxWidth: 300 }}
          />
          <TextField
            fullWidth
            required
            inputRef={messageRef}
            error={
              messageTooLong ||
              messageTooShort ||
              messageInvalid ||
              messageHasGibberish
            }
            label="Your message"
            multiline
            rows={12}
            variant="outlined"
            helperText={getMessageHelperText()}
            style={{ marginTop: 30 }}
          />
          <Button
            disabled={messageSent}
            variant="contained"
            color="primary"
            // endIcon={<SendIcon />}
            onClick={validate}
          >
            Send
          </Button>
        </form>
        {messageSent && <>sent!</>}
      </CustomPaper>
    </MainWrapper>
  );
}
