import Head from "next/head";
/**
 * Function to return head elements used inside ever webpage. It takes in a parameter
 * to give a unique description to the page. This function exists to keep code for pages
 * less cluttered.
 * @param {*} descriptionText the text to displayed for the page
 * @returns component
 */
export const CustomHead = ({
  descriptionText,
  title,
  keywords,
  loadClarity,
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={descriptionText} />
      <meta name="author" content="Mark Valentino" />
      <meta name="keywords" content={keywords} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <link rel="icon" href="/favicon.ico" />
      {loadClarity && (
        <script
          dangerouslySetInnerHTML={{
            __html: `
         (function(c,l,a,r,i,t,y){
             c[a] = c[a] || function () { (c[a].q = c[a].q || 
             []).push(arguments) };
             t=l.createElement(r);
             t.async=1;
             t.src="https://www.clarity.ms/tag/"+i;
             y=l.getElementsByTagName(r)[0];
             y.parentNode.insertBefore(t,y);
         })(window, document, "clarity", "script", "${process.env.MS_CLARITY_ID}");`,
          }}
        />
      )}
    </Head>
  );
};
