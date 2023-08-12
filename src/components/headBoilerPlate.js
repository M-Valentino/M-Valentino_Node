export const getHeadBoilerPlate = (contentText) => {
  return (
    <>
      <meta name="description" content={contentText} />
      <meta name="author" content="Mark Valentino"/>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </>
  );
};
