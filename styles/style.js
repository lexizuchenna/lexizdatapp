import { StyleSheet } from "react-native";

import { colors, sizes, font } from "../constants";

const styles = StyleSheet.create({
  loaderContainer: {
    marginTop: sizes.medium,
    alignItems: "center",
    justifyContent: "center",
    flex: 1
  },
  container: (size) => ({
    flex: 1,
    width: "100%",
    height: size ? size : "100%",
  }),
  contentContainer: {
    flexGrow: 1,
    paddingBottom: 70,
  },
  footerContainer: {
    paddingHorizontal: 20,
  },
  btn: (type) => ({
    backgroundColor: type === "outline" ? colors.white : colors.primary,
    height: "100%",
    padding: 20,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: sizes.medium,
    borderRadius: sizes.medium,
  }),
  btnText: (type, size) => ({
    fontSize: size ?? sizes.medium,
    color:
      type === "outline"
        ? colors.primary
        : type === "filled"
        ? colors.white
        : colors.black,
    fontFamily: font.bold,
    height: "100%",
  }),

  subHeader: {
    fontFamily: font.regular,
    color: colors.primary,
    fontSize: 20,
    textAlign: "center",
  },

  userName: {
    fontFamily: font.regular,
    fontSize: sizes.large,
    color: colors.secondary,
  },
  heading: {
    fontFamily: font.bold,
    fontSize: sizes.xxLarge,
    color: colors.primary,
    marginTop: 2,
    marginLeft: 30,
  },
  subHeading: {
    fontFamily: font.medium,
    fontSize: sizes.xLarge,
    color: colors.primary,
    marginTop: 2,
    marginLeft: 30,
    marginBottom: 20,
  },
  leadHeading: (fontFamily, color) => ({
    fontFamily: fontFamily ? fontFamily : font.medium,
    fontSize: sizes.large,
    color: color ? color : colors.primary,
    textAlign: "center",
  }),
  searchContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginTop: sizes.small,
    height: 50,
    width: "100%",
  },
  searchWrapper: {
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: sizes.small,
    height: "100%",
    width: "100%",
  },
  searchInput: {
    fontFamily: font.regular,
    width: "100%",
    paddingHorizontal: sizes.medium,
    fontSize: sizes.large,
    color: colors.black,
  },
  searchBtn: {
    width: 50,
    height: "100%",
    backgroundColor: colors.tertiary,
    borderRadius: sizes.medium,
    justifyContent: "center",
    alignItems: "center",
  },
  searchBtnImage: {
    width: "50%",
    height: "50%",
    tintColor: colors.white,
  },
  tabsContainer: {
    width: "100%",
    marginTop: sizes.medium,
  },
  tab: (activeJobType, item) => ({
    paddingVertical: sizes.small / 2,
    paddingHorizontal: sizes.small,
    borderRadius: sizes.medium,
    borderWidth: 1,
    borderColor: activeJobType === item ? colors.secondary : colors.gray2,
  }),
  tabText: (activeJobType, item) => ({
    fontFamily: font.medium,
    color: activeJobType === item ? colors.secondary : colors.gray2,
  }),

  backBtnContainer: {
    width: 40,
    height: 40,
    backgroundColor: colors.white,
    borderRadius: sizes.small / 1.25,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 20,
  },
  backBtnImg: (dimension) => ({
    width: dimension,
    height: dimension,
    borderRadius: sizes.small / 1.25,
  }),
});

export default styles;
