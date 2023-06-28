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

import Input from "../../components/Input";
import BackBtn from "../../components/BackBtn";
import { colors, font, sizes, images } from "../../constants";
import styles from "../../styles/style";

function register() {
  const router = useRouter();
  const screenWidth = Dimensions.get("window").width;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = (name, email, phone, password, confirmPassword) => {
    console.log(name, email, phone, password, confirmPassword);
  };
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: colors.body,
        alignItems: "center",
        height: "100%",
        width: screenWidth,
      }}
    >
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: colors.body },
          headerShadowVisible: false,
          headerLeft: () => (
            <BackBtn
              iconUrl={images.left}
              dimension="100%"
              handlePress={() => router.back()}
            />
          ),
          headerTitle: "",
        }}
      />
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={{
              flex: 1,
              width: screenWidth,
              marginTop: 50,
              alignItems: "center",
              marginBottom: 100,
            }}
          >
            <Text
              style={{
                fontFamily: font.bold,
                color: colors.primary,
                fontSize: 40,
                textAlign: "center",
              }}
            >
              Create An Account
            </Text>
            <Text style={styles.subHeader}>
              Already have an account?{"\u00A0"}
              <Text onPress={() => router.push("/accounts/login")}>Login</Text>
            </Text>
            <View style={{ marginTop: 20, width: screenWidth / 1.2 }}>
              <Input
                label="Name"
                placeholder="Enter Name"
                value={name}
                handleChange={(text) => setName(text)}
                keyboardType="name-phone-pad"
              />
              <Input
                label="Email"
                placeholder="Enter Email"
                value={email}
                handleChange={(text) => setEmail(text)}
                keyboardType="email-address"
              />
              <Input
                label="Phone Number"
                placeholder="Enter Phone Number"
                value={phone}
                handleChange={(text) => setPhone(text)}
                keyboardType="phone-pad"
              />
              <Input
                label="Password"
                placeholder="Enter Password"
                value={password}
                handleChange={(text) => setPassword(text)}
              />
              <Input
                label="Confirm Password"
                placeholder="Re-Enter Password"
                value={confirmPassword}
                handleChange={(text) => setConfirmPassword(text)}
              />
              <View
                style={{
                  flex: 1,
                  alignItems: "center",
                  width: screenWidth / 1.3,
                  marginTop: 40,
                }}
              >
                <TouchableOpacity
                  style={styles.btn("filled")}
                  onPress={() =>
                    handleRegister(
                      name,
                      email,
                      phone,
                      password,
                      confirmPassword
                    )
                  }
                >
                  <Text style={styles.btnText("filled", sizes.xLarge)}>
                    Register
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

export default register;
