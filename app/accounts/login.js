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
import axios from "axios";
import * as SecureStore from "expo-secure-store";

import Input from "../../components/Input";
import BackBtn from "../../components/BackBtn";
import Loader from "../../components/Loader";
import { colors, font, sizes, images } from "../../constants";
import styles from "../../styles/style";

function login() {
  const router = useRouter();
  const screenWidth = Dimensions.get("window").width;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (email, password) => {
    setLoading(true);
    try {
      const response = await axios.post(
        "http://192.168.0.196:3500/api/users/login",
        { email, password }
      );
      await SecureStore.setItemAsync("session", JSON.stringify(response.data));
      setLoading(false);
      router.push("/home")
    } catch (error) {
      console.log(error.status);
      //setError(error);
      alert("Unknown Error");
    } finally {
      setLoading(false);
    }

    //isLoading ? setLoading(true) : setLoading(false);
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
        {loading ? (
          <Loader />
        ) : (
          <ScrollView showsVerticalScrollIndicator={false}>
            <View
              style={{
                flex: 1,
                width: screenWidth,
                marginTop: 50,
                alignItems: "center",
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
                Welcome back
              </Text>
              <Text style={styles.subHeader}>
                Don't have an account?{"\u00A0"}
                <Text onPress={() => router.push("/accounts/register")}>
                  Register
                </Text>
              </Text>
              <View style={{ marginTop: 20, width: screenWidth / 1.2 }}>
                <Input
                  label="Email"
                  placeholder="Enter Email"
                  value={email}
                  handleChange={(text) => setEmail(text)}
                  keyboardType="email-address"
                />
                <Input
                  label="Password"
                  placeholder="Enter Password"
                  value={password}
                  handleChange={(text) => setPassword(text)}
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
                    onPress={() => handleLogin(email, password)}
                  >
                    <Text style={styles.btnText("filled", sizes.xLarge)}>
                      Login
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </ScrollView>
        )}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

export default login;
