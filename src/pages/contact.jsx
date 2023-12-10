import React, { useEffect, useRef, useState } from "react";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import nextBase64 from "next-base64";
import { CustomHead } from "@/components/layout/CustomHead";
import { MainWrapper } from "@/components/layout/MainWrapper";
import { CustomPaper } from "@/components/layout/CustomPaper";
import { MainHeading } from "@/components/layout/Headings";
import { SmartLink } from "@/components/smartLink/SmartLink";
import { Button, TextField, Typography } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import {
  checkEmailInvalid,
  checkEmailTooLong,
  checkMessageInvalid,
  checkMessageTooLong,
  checkMessageTooShort,
  checkHasGibberish,
  MAX_MESSAGE_LENGTH,
} from "@/utils/validations";
import { PAGE_TITLES } from "@/consts/pageTitles";

export default function Contact() {
  const emailRef = useRef();
  const messageRef = useRef();
  // Multiple usestates are used for descriptive helptertext errors.
  const [emailTooLong, setEmailTooLong] = useState(null);
  const [emailInvalid, setEmailInvalid] = useState(null);
  const [messageTooLong, setMessageTooLong] = useState(null);
  const [messageTooShort, setMessageTooShort] = useState(null);
  const [messageInvalid, setMessageInvalid] = useState(null);
  const [messageHasGibberish, setMessageHasGibberish] = useState(null);
  const [captchaFilled, setCaptchaFilled] = useState(false);
  const [token, setToken] = useState(false);
  const [error, setError] = useState("");
  const [dataRecieved, setDataRecieved] = useState(null);
  const [messageSent, setMessageSent] = useState(null);

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

  async function fetchData() {
    try {
      const response = await fetch(
        `/api/sendMessage?email=${nextBase64.encode(
          emailRef.current.value
        )}&message=${nextBase64.encode(
          messageRef.current.value
        )}&token=${token}`,
        { method: "PUT" }
      );
      const data = await response.json();
      setDataRecieved(data);
    } catch (err) {
      const errorMessage = "Error: " + err.message;
      setError(errorMessage);
    } finally {
      setMessageSent(() => true);
    }
  }

  // Usestates for validation don't update immediately.
  useEffect(() => {
    if (
      emailTooLong === false &&
      emailInvalid === false &&
      messageTooLong === false &&
      messageTooShort === false &&
      messageInvalid === false &&
      messageHasGibberish === false &&
      messageSent === null
    ) {
      setMessageSent(() => false);
      fetchData();
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

  const handleVerificationSuccess = (token, ekey) => {
    if (token && ekey) {
      setCaptchaFilled(() => true);
      setToken(() => token);
    }
  };

  return (
    <>
      <CustomHead
        descriptionText="Send a message to Mark Valentino."
        title="Mark Valentino - Contact Me"
        keywords="message, inquiry, ask, email"
      />
      <MainWrapper activeLink={PAGE_TITLES.contact}>
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
              rows={8}
              variant="outlined"
              helperText={getMessageHelperText()}
              style={{ marginTop: 30, marginBottom: 30 }}
            />
            <HCaptcha
              sitekey={process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY}
              onVerify={(token, ekey) => {
                handleVerificationSuccess(token, ekey);
              }}
            />
            <Button
              size="large"
              disabled={messageSent || captchaFilled === false}
              variant="contained"
              color="primary"
              endIcon={<SendIcon />}
              onClick={validate}
              style={{ marginTop: 10 }}
            >
              Send
            </Button>
            <Typography
              color="primary"
              style={{
                display: "inline-block",
                marginLeft: 20,
                transform: "translateY(10px)",
              }}
            >
              {messageSent === false ? <>sending...</> : <></>}
              {messageSent && dataRecieved?.message === "success" && (
                <>Message sent!</>
              )}
              {(error !== "" || dataRecieved?.message === "fail") && (
                <>There was an error sending your message.</>
              )}
            </Typography>
          </form>
          <Typography style={{ marginTop: 20 }}>
            You can reach out to me on{" "}
            <SmartLink href="https://www.linkedin.com/in/mark-valentino">
              LinkedIn too if you prefer.
            </SmartLink>
          </Typography>
        </CustomPaper>
      </MainWrapper>
    </>
  );
}
