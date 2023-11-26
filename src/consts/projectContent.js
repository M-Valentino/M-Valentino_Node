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
  marvinJ: "MarvinJ",

  // Python Stack
  python: "Python",
  pillow: "Pillow",
  cairoSVG: "Cairo SVG",
  openCV: "OpenCV",
  numPy: "NumPy",
  pandas: "Pandas",
  faker: "Faker",
  plotly: "Ploty",

  // React Stack
  react: "React",
  reactNative: "React Native",
  firebase: "Firebase",
  jest: "Jest",
  detox: "Detox",
  asyncStorage: "Async Storage",
  reactThreeFiber: "React Three Fiber",
  drie: "drei",
  materialUi: "Material UI",
};

export const LANGUAGE_LINKS = {
  [LANGUAGES.bash]: "https://www.gnu.org/software/bash",
  [LANGUAGES.java]: "https://www.java.com",
  [LANGUAGES.css]: "https://www.w3.org/Style/CSS/Overview.en.html",
  [LANGUAGES.html]: "https://www.w3.org/html",
  [LANGUAGES.vanillaJS]:
    "https://www.ecma-international.org/technical-committees/tc39/",
  [LANGUAGES.marvinJ]: "https://www.marvinj.org/en/index.html",
  [LANGUAGES.python]: "https://www.python.org",
  [LANGUAGES.pillow]: "https://pillow.readthedocs.io/en/stable/",
  [LANGUAGES.numPy]: "https://numpy.org",
  [LANGUAGES.pandas]: "https://pandas.pydata.org",
  [LANGUAGES.faker]: "https://faker.readthedocs.io/en/master/",
  [LANGUAGES.cairoSVG]: "https://cairosvg.org",
  [LANGUAGES.openCV]: "https://opencv.org",
  [LANGUAGES.plotly]: "https://plotly.com/python/",
  [LANGUAGES.react]: "https://react.dev",
  [LANGUAGES.reactNative]: "https://reactnative.dev",
  [LANGUAGES.asyncStorage]:
    "https://react-native-async-storage.github.io/async-storage/docs/install",
  [LANGUAGES.firebase]: "https://firebase.google.com",
  [LANGUAGES.detox]: "https://wix.github.io/Detox/",
  [LANGUAGES.jest]: "https://jestjs.io",
  [LANGUAGES.reactThreeFiber]:
    "https://docs.pmnd.rs/react-three-fiber/getting-started/introduction",
  [LANGUAGES.drie]: "https://github.com/pmndrs/drei",
  [LANGUAGES.materialUi]: "https://mui.com",
};

// Special const that is passed through LanguageChip also. It isn't a language or library.
export const PLUS_MORE = "+ more";

// Determines whether a project can be shown on ProjectPage in an Iframe or not.
export const HREF_TYPES = {
  iframe: "iframe",
  externalLink: "externalLink",
};

export const PROJECT_TITLES = {
  imageToDivs: "Image to Divs",
  earth3Js: "Earth 3JS",
  icat: "ICat",
  exploringCannyEdgeDetection: "Exploring Canny Edge Detection",
  iSpyShopper: "I Spy Shopper",
  imageManipulationExperiments: "Image Manipulation Experiments",
  retroCalculator: "Retro Calculator",
  citiesRecommender: "Cities Recommender",
};

export const PROJECT_CONTENT = [
  {
    index: 0,
    href: "/imageToDivs.html",
    gitLink: "https://github.com/M-Valentino/Image-To-Divs",
    hrefType: HREF_TYPES.iframe,
    imageLink: "/projectImages/imageToDivs.webp",
    imageAltText:
      "A screenshot of Robocop for the Gameboy converted to divs with a dot matrix effect. Below it is a a page inspector open showing the divs to the image.",
    title: PROJECT_TITLES.imageToDivs,
    date: "2023",
    description:
      "Using the MarvinJ JavaScript library, I was able to make an online image converter that allows you to upload and convert images to pure CSS divs. There many not be much use for this program (except for maybe making captchas harder to bypass with AI), but I always like pushing the limits of what's possible in coding.",
    languages: [
      LANGUAGES.marvinJ,
      LANGUAGES.vanillaJS,
      LANGUAGES.html,
      LANGUAGES.css,
    ],
  },
  {
    index: 1,
    href: "/Earth3JS",
    gitLink:
      "https://github.com/M-Valentino/M-Valentino_Node/blob/main/src/pages/Earth3JS.jsx",
    hrefType: HREF_TYPES.iframe,
    imageLink: "/projectImages/earth3js.webp",
    imageAltText: "3D render of the earth with the moon orbiting it",
    title: PROJECT_TITLES.earth3Js,
    date: "2023",
    description:
      "I made an interactive 3D scene of the earth with the moon orbiting around it. You can toggle between high and low settings, as well as adjust the simulation speed. I made this project to learn 3D web developement.",
    languages: [
      LANGUAGES.react,
      LANGUAGES.reactThreeFiber,
      LANGUAGES.drie,
      LANGUAGES.materialUi,
    ],
  },
  {
    index: 2,
    gitLink: "https://github.com/M-Valentino/ICat",
    hrefType: HREF_TYPES.externalLink,
    imageLink: "/projectImages/icat.webp",
    imageAltText:
      "Regular picture of Garfield next to one converted to ASCII characters.",
    title: PROJECT_TITLES.icat,
    date: "2023",
    description:
      'Have you ever wanted to know what an image looks like without having to leave the terminal? Well you\'re in luck! Now you can "cat" images with this utility called ICat (short for image cat)! ICat works by reading images and converting them to ASCII text. Images printed to the terminal are displayed in greyscale with 5 colors.',
    languages: [
      LANGUAGES.bash,
      LANGUAGES.python,
      LANGUAGES.pillow,
      LANGUAGES.cairoSVG,
    ],
  },
  {
    index: 3,
    gitLink: "https://github.com/SCCapstone/I_Spy_A-Eye",
    hrefType: HREF_TYPES.externalLink,
    imageLink: "/projectImages/i-spy-shopper.svg",
    imageAltText:
      "I Spy Shopper Logo of a magnifying glass and a shopping bag.",
    title: PROJECT_TITLES.iSpyShopper,
    date: "2023",
    description:
      "I Spy Shopper is a grocery devilery app for the visually impaired (with pretend payment transactions). This is also a college capstone group project. I Spy Shopper uses the Kroger API for generating grocery data. It also uses Firebase for authentication and data storage. Over 100 automated tests were written in the app using Detox and Jest.",
    languages: [
      LANGUAGES.reactNative,
      LANGUAGES.firebase,
      LANGUAGES.jest,
      LANGUAGES.detox,
      LANGUAGES.asyncStorage,
    ],
  },
  {
    index: 4,
    gitLink: "https://github.com/M-Valentino/Exploring-Canny-Edge-Detection",
    hrefType: HREF_TYPES.externalLink,
    imageLink: "/projectImages/canny_edge_detection.webp",
    imageAltText:
      "Photo of the Union Pacific Big Boy next to other images where a sobel filter and a Canny edge detection filter is applied. An image of a code sinppet of Guassian blur and an image of the kronecker product is also there.",
    title: PROJECT_TITLES.exploringCannyEdgeDetection,
    date: "2022",
    description:
      "I explored the coding steps involved to perform Canny Edge detection on an image. For each step of the algorithm I explored, I used Jupyter Notebook to generate an image preview. I wanted to learn about computer vision which is used in AI. This is my final project for my linear algebra lab.",
    languages: [
      LANGUAGES.python,
      LANGUAGES.pillow,
      LANGUAGES.openCV,
      LANGUAGES.numPy,
    ],
  },
  {
    index: 5,
    gitLink: "https://github.com/M-Valentino/Image-Manipulation-Experiments",
    hrefType: HREF_TYPES.externalLink,
    imageLink: "/projectImages/tigers.jpg",
    imageAltText:
      "Four pictures of tigers, where one is inverted, one is mirrored, one is in black and white, and the last is the original image.",
    title: PROJECT_TITLES.imageManipulationExperiments,
    date: "2022",
    description:
      "This project was made to explore how programs can perform image manipulation. I wrote a program that can open a bitmap image and store its pixel data into matrices which could then be manipulated. I was able to successfully mirror an image, invert the colors of an image, convert an image to black and white, and stretch an image programatically.",
    languages: [LANGUAGES.java],
  },
  {
    index: 6,
    href: "/retro_calculator.html",
    gitLink:
      "https://github.com/M-Valentino/M-Valentino.github.io/blob/main/calculator.html",
    hrefType: HREF_TYPES.iframe,
    imageLink: "/projectImages/calculator.jpg",
    imageAltText: "Retro Calculator screenshot",
    title: PROJECT_TITLES.retroCalculator,
    date: "2022",
    description:
      "A functional recreation of an old school style calculator was made. I pushed CSS to the limit to make the calculator photorealistic by heavily using shadows and gradients. Vector images were not used as I wanted to make the calculator easier to be built upon in the future. The entire webpage is very small and takes up 15Kb.",
    languages: [LANGUAGES.vanillaJS, LANGUAGES.html, LANGUAGES.css],
  },

  {
    index: 7,
    gitLink: "https://github.com/M-Valentino/Cities-Recommender",
    hrefType: HREF_TYPES.externalLink,
    imageLink: "/projectImages/citiesrecommender.png",
    imageAltText: "Collage of tables and charts generated by Plotly",
    title: PROJECT_TITLES.citiesRecommender,
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
];
