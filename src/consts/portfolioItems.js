const PROGRAMS = {
  autoCAD: "AutoCAD",
  inventor: "Inventor",
};

export const IMAGE_TYPE = {
  regular: "regular",
  pixelArt: "pixelArt",
};

export const ORIENTATION_TYPE = {
  landscape: "landscape",
  portrait: "portrait",
  square: "square",
};

export const PORTFOLIO_ITEMS = [
  {
    url: "cad_car_isometric.png",
    imageType: IMAGE_TYPE.regular,
    title: "Isometric Car",
    programUsed: PROGRAMS.autoCAD,
    orientation: ORIENTATION_TYPE.landscape,
  },

  {
    url: "headphones_housing_inventor_assembly.png",
    imageType: IMAGE_TYPE.regular,
    title: "Headphones Inventor Assembly",
    programUsed: PROGRAMS.inventor,
    orientation: ORIENTATION_TYPE.portrait,
  },
  {
    url: "sturdy_computer_desk.png",
    imageType: IMAGE_TYPE.regular,
    title: "Sturdy Computer Desk",
    programUsed: PROGRAMS.autoCAD,
    orientation: ORIENTATION_TYPE.landscape,
  },
  {
    url: "bowtiepastafan.png",
    imageType: IMAGE_TYPE.regular,
    title: "Bowtie Pasta Fan Showdown Submission",
    programUsed: PROGRAMS.inventor,
    orientation: ORIENTATION_TYPE.portrait,
  },
  {
    url: "comming_soon_to_a_store_near_you.png",
    imageType: IMAGE_TYPE.regular,
    title: "Handheld Virtual Pet Game",
    programUsed: PROGRAMS.inventor,
    orientation: ORIENTATION_TYPE.landscape,
  },
  {
    url: "unexpectedvistior.png",
    imageType: IMAGE_TYPE.pixelArt,
    title: "Unexpected Visitor",
    programUsed: `${PROGRAMS.autoCAD} (for perspective layout), Game Maker Sprite Editor`,
    orientation: ORIENTATION_TYPE.portrait,
  },
];
