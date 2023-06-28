import {
  Text,
  Image,
  View,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from "react-native";

import { images, sizes } from "../constants";

function UserIcon({ id, email }) {
  return (
    <View
      style={{
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: "row",
        height: 70,
        marginLeft: 20,
      }}
    >
      <View>
        <Image
          source={images.user}
          style={{ width: 50, height: 50, borderRadius: 50 }}
        />
      </View>
      <View style={{ marginLeft: 10 }}>
        <Text style={{ fontSize: sizes.medium }}> {id} </Text>
        <Text style={{ fontSize: sizes.large }}> {email} </Text>
      </View>
    </View>
  );
}

export default UserIcon;
