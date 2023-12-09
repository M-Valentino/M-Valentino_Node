import React, { useRef, useState } from "react";
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
  const [emailTooLong, setEmailTooLong] = useState(false);
  const [emailInvalid, setEmailInvalid] = useState(false);
  const [messageTooLong, setMessageTooLong] = useState(false);
  const [messageTooShort, setMessageTooShort] = useState(false);
  const [messageInvalid, setMessageInvalid] = useState(false);
  const [messageHasGibberish, setMessageHasGibberish] = useState(false);

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
  
  const validateAndSend = () => {

    validate();
    if (
      !emailTooLong &&
      !emailInvalid &&
      !messageTooLong &&
      !messageTooShort &&
      !messageInvalid &&
      !messageHasGibberish
    ) {
      fetch(`/api/sendMessage?email=${emailRef.current.value}&message=${messageRef.current.value}`

    )
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err));
    }
  };

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
            variant="contained"
            color="primary"
            // endIcon={<SendIcon />}
            onClick={validateAndSend}
          >
            Send
          </Button>
        </form>
      </CustomPaper>
    </MainWrapper>
  );
}
