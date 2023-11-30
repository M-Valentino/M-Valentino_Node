import React from "react";
import { SmartLink } from "@/components/smartLink/SmartLink";
import { Typography } from "@mui/material";

export const Post2 = () => {
  return (
    <>
      <Typography paragraph>
        I'm sure this sounds shocking to people reading this blog, but I'm not
        the most fond of how my website looks. So, why did I make the site look
        like this in the first place? The short answer is: marketability.
      </Typography>
      <Typography paragraph>
        My taste in design is kinda out there. I like maximalism instead of
        minimalist. I like noncomfornity over conformity. There is nothing wrong
        with my tastes, however, I can't just design a website according to what
        I think looks good. Most people would either dislike it or think of me
        as not having good web design skills.
      </Typography>
      <Typography paragraph>
        Below is an example of an old "professional" website I created where I
        completely ignored nearly every convention in web design and made what I
        wanted to make:
      </Typography>
      <img
        src="/blogImages/neocities_professional_website.webp"
        alt="Old professional website that looks like it came out of the early 2000's"
        style={{ width: "100%" }}
      />
      <Typography paragraph>
        I don't think many hiring managers would take that website too
        seriously.
      </Typography>
      <Typography paragraph>
        So, going back to my current website, people have told me my website
        looks great, and I know it looks modern. The reason why is because I'm
        following web design trends, and I'm using Material UI and custom
        components resembling what they use. Part of me does like the design,
        but I feel a little empty inside looking at it. To me my site looks
        boring, sterile, and not unique enough. Part of it is because I haven't
        fully decorated it all the way, but even when I achieve that, I still
        wouldn't fully be proud of it.
      </Typography>
      <Typography paragraph>
        All is not doom and gloom. Coding whatever I wanted to code, has exposed
        me to a lot of facets of CSS and JS that I wouldn't have even touched
        otherwise. <SmartLink href="https://neocities.org/browse">Neocities</SmartLink>{" "}
        exists too where going against the grain is even celebrated.
      </Typography>
    </>
  );
};
