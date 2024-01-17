import Head from "next/head";
import React from "react";

interface CustomHeadProps {
  descriptionText?: string;
  title: string;
  keywords?: string;
  loadClarity?: boolean;
}

/**
 * Function to return head elements used inside every webpage.This function
 * exists to keep code for pages less cluttered.
 * @param {*} descriptionText the text to displayed for the page for SEO
 * @param {*} title the title of the page
 * @param {*} keywords the keywords of the page for SEO
 * @param {*} loadClarity a boolean to determine if Clarity should be loaded.
 * @returns component
 */
export const CustomHead: React.FC<CustomHeadProps> = ({
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
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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
