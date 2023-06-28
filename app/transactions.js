import { useState } from "react";
import {
  Text,
  SafeAreaView,
  View,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { Stack, useRouter } from "expo-router";
import * as SecureStore from "expo-secure-store"

import UserIcon from "../components/UserIcon";
import UserFooter from "../components/UserFooter";
import Overview from "../components/Overview";
import Transactions from "../components/Transactions";
import Input from "../components/Input";
import { colors, font, sizes, images } from "../constants";
import styles from "../styles/style";

function transactions() {
  const router = useRouter();
  const screenWidth = Dimensions.get("window").width;
  const screenHeight = Dimensions.get("window").height;

  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleNext = async () => {
    const data = {
      expiresIn: "2s",
      user: "202202020"
    }
    await SecureStore.setItemAsync("session", JSON.stringify(data))
  };
  const handlePrev = async () => {
    console.log(await SecureStore.getItemAsync("session"));
  };

  const footerItems = [
    {
      activeImage: images.homeActive,
      inactiveImage: images.home,
      active: false,
      handlePress: () => router.push("/home"),
    },
    {
      activeImage: images.addActive,
      inactiveImage: images.add,
      active: false,
      handlePress: () => router.push("/fund"),
    },
    {
      activeImage: images.historyActive,
      inactiveImage: images.history,
      active: true,
      handlePress: null,
    },
    {
      activeImage: images.settingActive,
      inactiveImage: images.setting,
      active: false,
      handlePress: () => router.push("/transactions"),
    },
  ];
  const handleChangePassword = (oldPassword, newPassword, confirmPassword) => {
    console.log(oldPassword, newPassword, confirmPassword);
  };
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: colors.body,
        alignItems: "stretch",
        height: screenHeight,
        width: screenWidth,
      }}
    >
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: colors.body },
          headerShadowVisible: false,
          headerBackVisible: false,
          headerLeft: () => "",
          headerTitle: "Change Password",
        }}
      />
      <View style={styles.container(screenHeight)}>
        <UserIcon id="377490" email="lextechspec@gmail.com" />
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === "ios" ? "padding" : undefined}
        >
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.contentContainer}
          >
            <View style={{ marginBottom: 20 }}>
              <Text style={styles.heading}>Welcome Alexander</Text>
              <Overview amount="2,400,345" add={true} />
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  paddingVertical: 10,
                  paddingHorizontal: 20,
                  marginBottom: 20,
                }}
              >
                <Text style={styles.leadHeading(font.bold, colors.black)}>
                  View Transactions
                </Text>
              </View>
              <View>
                <Transactions image={images.addActive} />
                <Transactions image={images.settingActive} />
                <Transactions image={images.settingActive} />
                <Transactions image={images.settingActive} />
                <Transactions image={images.settingActive} />
                <Transactions image={images.settingActive} />
                <Transactions image={images.settingActive} />
                <Transactions image={images.settingActive} />
                <Transactions image={images.settingActive} />
                <Transactions image={images.addActive} />
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  paddingVertical: 10,
                  paddingHorizontal: 40,
                  marginBottom: 2,
                }}
              >
                <Text
                  onPress={() => handlePrev()}
                  style={{
                    fontFamily: font.bold,
                    paddingHorizontal: 10,
                    paddingVertical: 5,
                    backgroundColor: colors.primary,
                    color: colors.white,
                    fontSize: sizes.large,
                  }}
                >
                  Prev
                </Text>
                <Text style={{ fontFamily: font.bold }}>Page 1 of 1</Text>
                <Text
                  onPress={() => handleNext()}
                  style={{
                    fontFamily: font.bold,
                    paddingHorizontal: 10,
                    paddingVertical: 5,
                    backgroundColor: colors.primary,
                    color: colors.white,
                    fontSize: sizes.large,
                  }}
                >
                  Next
                </Text>
              </View>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
        <UserFooter items={footerItems} />
      </View>
    </SafeAreaView>
  );
}

export default transactions;
