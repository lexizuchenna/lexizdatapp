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

import UserIcon from "../../components/UserIcon";
import UserFooter from "../../components/UserFooter";
import Overview from "../../components/Overview";
import Input from "../../components/Input";
import SelectInput from "../../components/SelectInput";
import { colors, font, sizes, images } from "../../constants";
import styles from "../../styles/style";

function airtime() {
  const router = useRouter();
  const screenWidth = Dimensions.get("window").width;
  const screenHeight = Dimensions.get("window").height;

  const networks = [
    { label: "MTN", value: "01" },
    { label: "AIRTEL", value: "02" },
    { label: "GLO", value: "03" },
    { label: "9MOBILE", value: "04" },
  ];

  const [network, setNetwork] = useState("");
  const [number, setNumber] = useState("");
  const [amount, setAmount] = useState("");

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
      active: false,
      handlePress: () => router.push("/setting"),
    },
  ];
  const handleBuyData = (network, number, amount) => {
    console.log(network, number, amount);
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
          headerTitle: "Buy Airtime",
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
              <Overview amount="2,400,000" add={true} />
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  paddingVertical: 10,
                  paddingHorizontal: 20,
                  marginBottom: 20,
                }}
              >
                <Text style={styles.leadHeading(font.regular, colors.warning)}>
                  Minimum Amount is ₦50
                </Text>
              </View>
              <View
                style={{
                  paddingHorizontal: 30,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <SelectInput
                  items={networks}
                  placeholder="Select Data Plan"
                  onChangeSelect={(value) => setNetwork(value)}
                  label="Data Plan"
                />
                <Input
                  label="Mobile Number"
                  placeholder="Enter Phone Number"
                  value={number}
                  handleChange={(text) => setNumber(text)}
                  keyboardType="numeric"
                />
                <Input
                  label="Amount"
                  placeholder="Enter Amount"
                  value={amount}
                  handleChange={(text) => setAmount(text)}
                  keyboardType="numeric"
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
                  onPress={() => handleBuyData(network, number, amount)}
                >
                  <Text style={styles.btnText("filled", sizes.large)}>
                    Proceed
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

export default airtime;
