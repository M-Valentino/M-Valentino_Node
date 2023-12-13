const PROGRAMS = {
  autoCAD: "AutoCAD",
  inventor: "Inventor",
};

const IMAGE_TYPE = {
  regular: "regular",
  pixelArt: "pixelArt",
};

export const PORTFOLIO_ITEMS = [
  {
    name: "cad_car_isometric.png",
    imageType: IMAGE_TYPE.regular,
    title: "Isometric Car",
    programUsed: PROGRAMS.autoCAD,
  },
  {
    name: "comming_soon_to_a_store_near_you.png",
    imageType: IMAGE_TYPE.regular,
    title: "Handheld Virtual Pet Game",
    programUsed: PROGRAMS.inventor,
  },
  {
    name: "headphones_housing_inventor_assembly.png",
    imageType: IMAGE_TYPE.regular,
    title: "Headphones Inventor Assembly",
    programUsed: PROGRAMS.inventor,
  },
  {
    name: "sturdy_computer_desk.png",
    imageType: IMAGE_TYPE.regular,
    title: "Sturdy Computer Desk",
    programUsed: PROGRAMS.autoCAD,
  },
  {
    name: "unexpectedvistior.png",
    imageType: IMAGE_TYPE.pixelArt,
    title: "Undexpected Visitor",
    programUsed: `${PROGRAMS.autoCAD} (for perspective layout), Game Maker Sprite Editor`,
  },
];
