import { TouchableOpacity, Image } from "react-native";

import { colors } from "../constants";

function UserAction({ image, handlePress }) {
  return (
    <TouchableOpacity
      style={{
        height: 50,
        width: 50,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.white,
        borderRadius: 50,
      }}
      onPress={handlePress}
    >
      <Image style={{ height: 30, width: 30 }} source={image} />
    </TouchableOpacity>
  );
}

export default UserAction;
