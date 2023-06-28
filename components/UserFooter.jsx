import {
  Text,
  Image,
  View,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from "react-native";

import { images, colors } from "../constants";
import FooterBtn from "./FooterBtn";

function UserFooter({
  active,
  handlePress,
  home,
  add,
  history,
  setting,
  items,
}) {
  
  return (
    <View
      style={{
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        height: 100,
        backgroundColor: colors.dark,
        paddingHorizontal: 20,
        position: "absolute",
        bottom: -35,
        right: 0,
        left: 0,
      }}
    >
      {/* <FooterBtn image={images.homeActive} />
      <FooterBtn image={images.add} bg={colors.white} />
      <FooterBtn image={images.historyActive} />
      <FooterBtn image={images.settingActive} /> */}
      {items.map((item, index) => (
        <FooterBtn
          image={item.active ? item.activeImage : item.inactiveImage}
          key={index}
          handlePress={item.handlePress}
          bg={item.active ? colors.white : ""}
        />
      ))}
    </View>
  );
}

export default UserFooter;
