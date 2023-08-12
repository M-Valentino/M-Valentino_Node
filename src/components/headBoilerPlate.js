export const getHeadBoilerPlate = (descriptionText) => {
  return (
    <>
      <meta name="description" content={descriptionText} />
      <meta name="author" content="Mark Valentino"/>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </>
  );
};
