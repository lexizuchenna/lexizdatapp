import { TouchableOpacity, Image } from "react-native";

import { colors } from "../constants";

function FooterBtn({image, handlePress, bg}) {
  return (
    <TouchableOpacity
      style={{
        height: 50,
        width: 50,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 50,
        backgroundColor: bg,
      }}
      onPress={handlePress}
    >
      <Image style={{ height: 30, width: 30 }} source={image} />
    </TouchableOpacity>
  );
}

export default FooterBtn;
