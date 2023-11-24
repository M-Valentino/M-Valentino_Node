import Head from "next/head";
/**
 * Function to return head elements used inside ever webpage. It takes in a parameter
 * to give a unique description to the page. This function exists to keep code for pages
 * less cluttered.
 * @param {*} descriptionText the text to displayed for the page
 * @returns component
 */
export const CustomHead = ({descriptionText, title, children}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={descriptionText} />
      <meta name="author" content="Mark Valentino"/>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
      {children}
    </Head>
  );
};
