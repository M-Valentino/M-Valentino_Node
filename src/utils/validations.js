export const checkEmailInvalid = (email) => {
  if (email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{1,4}$/g)) {
    return false;
  }
  return true;
};

export const checkEmailTooLong = (email) => {
  if (email.length > 40) {
    return true;
  }
  return false;
};

export const MAX_MESSAGE_LENGTH = 1280;

export const checkMessageInvalid = (message) => {
  /**
   * This also checks if '{' and '}' aren't there which maybe can
   * mitigate possible code injections.
   */
  if (message.match(/^[a-z0-9!"#$%&'()*+,.\/:;<=>?@\[\] ^_`|~-]*$/i)) {
    return false;
  }
  return true;
};

export const checkMessageTooLong = (message) => {
  if (message.length > MAX_MESSAGE_LENGTH) {
    return true;
  }
  return false;
};
