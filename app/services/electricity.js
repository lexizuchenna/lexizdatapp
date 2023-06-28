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

function electricity() {
  const router = useRouter();
  const screenWidth = Dimensions.get("window").width;
  const screenHeight = Dimensions.get("window").height;

  const billers = [
    { label: "EEDC", value: "01" },
    { label: "AEDC", value: "02" },
    { label: "BEDC", value: "03" },
    { label: "AKEDC", value: "04" },
  ];

  const [biller, setBiller] = useState("");
  const [meterNumber, setMeterNumber] = useState("");
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
  const handlePurchaseToken = (biller, meterNumber, amount, number) => {
    console.log(biller, meterNumber, amount, number);
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
          headerTitle: "Purchase Token",
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
                  items={billers}
                  placeholder="Select Biller"
                  onChangeSelect={(value) => setBiller(value)}
                  label="Biller"
                />
                <Input
                  label="Meter Number"
                  placeholder="Enter Meter Number"
                  value={meterNumber}
                  handleChange={(number) => setMeterNumber(number)}
                  keyboardType="numeric"
                />
                <Input
                  label="Amount"
                  placeholder="Enter Amount"
                  value={amount}
                  handleChange={(number) => setAmount(number)}
                  keyboardType="numeric"
                />
                <Input
                  label="Phone Number"
                  placeholder="Enter Phone Number"
                  value={number}
                  handleChange={(number) => setNumber(number)}
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
                  onPress={() =>
                    handlePurchaseToken(biller, meterNumber, amount, number)
                  }
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

export default electricity;
