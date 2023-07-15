/**
 * Used for the LanguageChip componenet.
 * Related languages and libraries are grouped together since their index 
 * determines their color, and indexes close to each other will have a similar
 * color. 
 */
export const LANGUAGES = {
  bash: "Bash",
  java: "Java",

  // Traditional webdev stack
  css: "css",
  html: "HTML",
  vanillaJS: "Vanilla JS",

  // Python Stack
  python: "Python",
  pillow: "Pillow",
  numPy: "NumPy",
  pandas: "Pandas",
  faker: "Faker",
  cairoSVG: "Cairo SVG",
  plotly: "Ploty",

  // React Stack
  react: "React",
  reactThreeFiber: "React Three Fiber",
  drie: "drei",
};

// Special const that is passed through LanguageChip also. It isn't a language or library.
export const PLUS_MORE = "+ more";

// Determines whether a project can be shown on ProjectPage in an Iframe or not.
export const HREF_TYPES = {
  iframe: "iframe",
  externalLink: "externalLink",
};

export const projectContent = [
  {
    href: "/Earth3JS",
    gitLink:
      "https://github.com/M-Valentino/M-Valentino_Node/blob/main/src/pages/Earth3JS.jsx",
    hrefType: HREF_TYPES.iframe,
    imageLink: "/projectImages/earth3js.webp",
    title: "Earth 3JS",
    date: "2023",
    description:
      "I made a 3D model of the Earth with the moon orbiting around it. You can toggle between high and low settings. I made this project to learn 3D web developement.",
    languages: [LANGUAGES.react, LANGUAGES.reactThreeFiber, LANGUAGES.drie],
  },
  {
    href: "/Earth3JS",
    gitLink:
      "https://github.com/M-Valentino/M-Valentino_Node/blob/main/src/pages/Earth3JS.jsx",
    hrefType: HREF_TYPES.iframe,
    imageLink: "/projectImages/icat.webp",
    title: "ICat",
    date: "2023",
    description:
      "I made a 3D model of the Earth with the moon orbiting around it. You can toggle between high and low settings. I made this project to learn 3D web developement.",
    languages: [LANGUAGES.bash, LANGUAGES.python, LANGUAGES.pillow, LANGUAGES.pandas, LANGUAGES.cairoSVG],
  },
  {
    gitLink: "https://github.com/M-Valentino/Image-Manipulation-Experiments",
    hrefType: HREF_TYPES.externalLink,
    imageLink: "/projectImages/tigers.jpg",
    title: "Image Manipulation Experiments",
    date: "2022",
    description:
      "This project was made to explore how programs can perform image manipulation. I wrote a program that can open a bitmap image and store its pixel data into matrices which could then be manipulated. I was able to successfully mirror an image, invert the colors of an image, convert an image to black and white, and stretch an image programatically.",
    languages: [LANGUAGES.java],
  },
  {
    gitLink: "https://github.com/M-Valentino/Cities-Recommender",
    hrefType: HREF_TYPES.externalLink,
    imageLink: "/projectImages/citiesrecommender.png",
    title: "Cities Recommender",
    date: "2021",
    description:
      "I wrote an AI program to recommend the best cities in America to live in. Cities were optimized between being safe and having favorable economic conditions (low cost of living and high median income). Machine learning was used to estimate unknown cost of living values of cities. Over 2000 cities were looked at.",
    languages: [
      LANGUAGES.python,
      LANGUAGES.numPy,
      LANGUAGES.pandas,
      LANGUAGES.faker,
      LANGUAGES.plotly,
      LANGUAGES.java,
    ],
  },
  {
    href: "/retro_calculator.html",
    gitLink:
      "https://github.com/M-Valentino/M-Valentino_Node/blob/main/public/retro_calculator.html",
    hrefType: HREF_TYPES.iframe,
    imageLink: "/projectImages/calculator.jpg",
    title: "Retro Calculator",
    date: "2022",
    description:
      "A functional recreation of an old school style calculator was made. I pushed CSS to the limit to make the calculator photorealistic by heavily using shadows and gradients. Vector images were not used as I wanted to make the calculator easier to be built upon in the future. The entire webpage is very small and takes up 14Kb.",
    languages: [LANGUAGES.vanillaJS, LANGUAGES.html, LANGUAGES.css],
  },
];
