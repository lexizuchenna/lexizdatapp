import { Text, Image, View } from "react-native";

import { colors, font, sizes } from "../constants";
import styles from "../styles/style";

function Transactions({ image }) {
  return (
    <View
      style={{
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 20,
        marginBottom: 20,
      }}
    >
      <View
        style={{
          justifyContent: "space-between",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <View
          style={{
            width: 40,
            height: 40,
            backgroundColor: colors.primary,
            borderRadius: 50,
            justifyContent: "center",
            alignItems: "center",
            marginRight: 10,
          }}
        >
          <Image source={image} style={{ height: 25, width: 25 }} />
        </View>
        <View>
          <Text style={{ fontSize: sizes.large, marginBottom: 3 }}>DATA</Text>
          <Text>07043696226</Text>
        </View>
      </View>
      <Text style={{ fontSize: sizes.large, fontFamily: font.medium }}>
        1,000
      </Text>
    </View>
  );
}

export default Transactions;
