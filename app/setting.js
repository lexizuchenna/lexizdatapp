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

import UserIcon from "../components/UserIcon";
import UserFooter from "../components/UserFooter";
import Overview from "../components/Overview";
import Input from "../components/Input";
import SelectInput from "../components/SelectInput";
import { colors, font, sizes, images } from "../constants";
import styles from "../styles/style";

function setting() {
  const router = useRouter();
  const screenWidth = Dimensions.get("window").width;
  const screenHeight = Dimensions.get("window").height;

  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

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
      active: false,
      handlePress: () => router.push("/transactions"),
    },
    {
      activeImage: images.settingActive,
      inactiveImage: images.setting,
      active: true,
      handlePress: null,
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
                  Change Password
                </Text>
              </View>
              <View
                style={{
                  paddingHorizontal: 30,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Input
                  label="Old Password"
                  placeholder="Enter Old Password"
                  value={oldPassword}
                  handleChange={(text) => setOldPassword(text)}
                  keyboardType="default"
                />
                <Input
                  label="New Password"
                  placeholder="Enter New Password"
                  value={newPassword}
                  handleChange={(text) => setNewPassword(text)}
                  keyboardType="default"
                />
                <Input
                  label="Confirm Password"
                  placeholder="Confirm New Password"
                  value={confirmPassword}
                  handleChange={(text) => setConfirmPassword(text)}
                  keyboardType="default"
                />
                <TouchableOpacity
                  style={{
                    width: screenWidth / 1.5,
                    backgroundColor: colors.primary,
                    height: 50,
                    borderRadius: 10,
                    marginTop: 30,
                    marginHorizontal: 30,
                    justifyContent: "center",
                    alignItems: "center",
                    paddingVertical: 15,
                  }}
                  onPress={() =>
                    handleChangePassword(
                      oldPassword,
                      newPassword,
                      confirmPassword
                    )
                  }
                >
                  <Text style={styles.btnText("filled", sizes.large)}>
                    Change Password
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
        <UserFooter items={footerItems} />
      </View>
    </SafeAreaView>
  );
}

export default setting;
