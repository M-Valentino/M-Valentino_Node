export const checkEmailInvalid = (email: string) => {
  return !email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{1,4}$/g);
};

export const checkEmailTooLong = (email: string) => {
  return email.length > 40;
};

export const checkMessageInvalid = (message: string) => {
  /**
   * This also checks if '{' and '}' aren't there which maybe can
   * mitigate possible code injections.
   */
  return !message.match(/^[\na-z0-9!"#$%&'()*+,.\/:;<=>?@\[\] ^_`|~-]*$/i);
};

export const MAX_MESSAGE_LENGTH = 1280;

export const checkMessageTooLong = (message: string) => {
  return message.length > MAX_MESSAGE_LENGTH;
};

export const checkMessageTooShort = (message: string) => {
  return message.length < 12;
};

export const checkHasGibberish = (message: string) => {
  // A modified list of the most used English words.
  const commonWords = [
    "the",
    /**
     * Two letter words have a higher chance of belonging to
     * gibberish, so a space is appended to lessen the chace.
     */
    "of ",
    "and",
    "to ",
    "in ",
    "is ",
    "that",
    "for",
    "it ",
    "as ",
    "was",
    "with",
    "be ",
    "by ",
    "on ",
    "not",
    "he ",
    "this",
    "are",
    "or ",
    "his",
    "from",
    "at ",
    "which",
    "but",
    "have",
    "an ",
    "had",
    "they",
    "you",
    "were",
    "their",
    "one",
    "all",
    "we ",
    "can",
    "her",
    "has",
    "there",
    "been",
    "if ",
    "more",
    "when",
    "will",
    "would",
    "who",
    "so ",
    "she",
    "other",
    "its",
    "may",
    "these",
    "what",
    "them",
    "than",
    "some",
    "him",
    "time",
    "into",
    "only",
    "do ",
    "such",
    "my ",
    "new",
    "about",
    "out",
    "also",
    "two",
    "any",
    "up ",
    "first",
    "could",
    "our",
    "then",
    "most",
    "see",
    "should",
    "after",
    "said",
    "your",
    "very",
    "between",
    "made",
    "many",
    "over",
    "like",
    "those",
    "did",
    "now",
    "even",
    "well",
    "where",
    "must",
    "people",
    "through",
    "how",
    "same",
    "work",
    "being",
    "because",
    "man",
    "life",
    "before",
    "each",
    "Hi ",
    "Hello",
    "Dear",
    "website",
  ];
  let count = 0;

  // A for each loop won't break after return
  for (let i = 0; i < commonWords.length; i++) {
    if (message.includes(commonWords[i])) {
      count++;
    }
    if (count === 4) {
      return false;
    }
  }
  return true;
};
