import { View, Text, TouchableOpacity, Image } from "react-native";
import { useRouter } from "expo-router";

import { colors, font, sizes, images } from "../constants";

function Overview({ amount, add }) {
  const router = useRouter();
  return (
    <View
      style={{
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: colors.primary,
        paddingVertical: 30,
        paddingHorizontal: 20,
        marginHorizontal: 20,
        marginVertical: 20,
        borderRadius: 10,
      }}
    >
      <View>
        <Text
          style={{
            fontSize: sizes.xLarge,
            color: colors.white,
            fontFamily: font.medium,
            marginBottom: 10,
          }}
        >
          Overview
        </Text>
        <Text
          style={{
            fontSize: sizes.large,
            textTransform: "uppercase",
            color: colors.white,
            fontFamily: font.medium,
            marginBottom: 5,
          }}
        >
          Balance
        </Text>
        <Text
          style={{
            fontSize: sizes.xxLarge,
            textTransform: "uppercase",
            color: colors.white,
            fontFamily: font.bold,
            marginBottom: 5,
          }}
        >
          ₦{amount}
        </Text>
      </View>
      {add ? (
        <View>
          <TouchableOpacity
            style={{
              height: 50,
              width: 50,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: colors.white,
              borderRadius: 50,
            }}
            onPress={() => router.push("/fund")}
          >
            <Image
              style={{ height: 30, width: 30 }}
              source={images.addActive}
            />
          </TouchableOpacity>
        </View>
      ) : (
        ""
      )}
    </View>
  );
}

export default Overview;
