export const checkEmailInvalid = (email) => {
  if (email.match(/^\S+@\S+\.\S+$/)) {
    return false;
  }
  return true;
}

export const checkEmailTooLong = (email) => {
  if (email.length > 42) {
    return true;
  }
  return false;
}

export const checkMessageTooLong = (message) => {
  if (message.length > 1280) {
    return true;
  }
  return false;
}