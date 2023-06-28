const font = {
  regular: "DMRegular",
  medium: "DMMedium",
  bold: "DMBold",
};

const colors = {
  primary: "#00B0F0",
  secondary: "#8592a3",
  success: "#71dd37",
  info: "#03c3ec",
  warning: "#ffab00",
  danger: "#ff3e1d",
  dark: "#233446",
  black: "#000",
  white: "#fff",
  body: "#f4f5fb",
  headingColor: "#566a7f",
  axisColor: "#a1acb8",
  borderColor: "#eceef1",
};

const sizes = {
  xSmall: 10,
  small: 12,
  medium: 16,
  large: 20,
  xLarge: 24,
  xxLarge: 32,
};

const shadows = {
  small: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
  medium: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5.84,
    elevation: 5,
  },
};

export { font, colors, sizes, shadows };
