import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { Stack, useRouter } from "expo-router";

import { colors, font, images, sizes } from "../constants";

const Home = () => {
  const router = useRouter();
  const screenWidth = Dimensions.get("window").width;
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: colors.primary,
        opacity: 5,
        justifyContent: "space-evenly",
        alignItems: "center",
        height: "100%",
      }}
    >
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: colors.primary },
          headerShadowVisible: false,
          headerTitle: "",
        }}
      />
      <View
        style={{
          flex: 1,
          marginTop: 40,
          width: "100%",
          alignItems: "center",
        }}
      >
        <Image
          source={images.logo}
          resizeMode="cover"
          style={{ height: 100, width: "70%" }}
        />
      </View>
      <View style={{ flex: 2, marginTop: 100, width: "100%" }}>
        <Text
          style={{
            fontFamily: font.bold,
            color: colors.white,
            fontSize: 40,
            textAlign: "center",
            paddingHorizontal: "10%",
          }}
        >
          Welcome to Lexiz Data
        </Text>
      </View>
      <View style={{ flex: 3 }}>
        <View
          style={{
            flex: 1,
            alignItems: "center",
            width: screenWidth / 1.3,
            marginTop: 40,
            height: "100%",
          }}
        >
          <TouchableOpacity
            style={{ backgroundColor: colors.white }}
            onPress={() => router.push("/accounts/login")}
          >
            <Text
              style={{
                paddingVertical: "5%",
                width: screenWidth / 1.2,
                color: colors.primary,
                fontFamily: font.bold,
                fontSize: sizes.xLarge,
                textAlign: "center"
              }}
            >
              Get Started
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
