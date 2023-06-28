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

function data() {
  const router = useRouter();
  const screenWidth = Dimensions.get("window").width;
  const screenHeight = Dimensions.get("window").height;

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

  const plans = {
    MTN: [
      {
        PRODUCT_CODE: "50",
        PRODUCT_ID: "50",
        PRODUCT_NAME: "50 MB - 7 days (Corporate)",
        PRODUCT_AMOUNT: "14",
      },
      {
        PRODUCT_CODE: "150",
        PRODUCT_ID: "150",
        PRODUCT_NAME: "150 MB - 30 days (Corporate)",
        PRODUCT_AMOUNT: "38",
      },
      {
        PRODUCT_CODE: "250",
        PRODUCT_ID: "250",
        PRODUCT_NAME: "250 MB - 30 days (Corporate)",
        PRODUCT_AMOUNT: "62",
      },
      {
        PRODUCT_CODE: "500",
        PRODUCT_ID: "500",
        PRODUCT_NAME: "500 MB - 30 days (SME)",
        PRODUCT_AMOUNT: "117",
      },
      {
        PRODUCT_CODE: "500",
        PRODUCT_ID: "500.00",
        PRODUCT_NAME: "500 MB - 30 days (Corporate)",
        PRODUCT_AMOUNT: "122",
      },
      {
        PRODUCT_CODE: "1000",
        PRODUCT_ID: "1000",
        PRODUCT_NAME: "1 GB - 30 days (SME)",
        PRODUCT_AMOUNT: "230",
      },
      {
        PRODUCT_CODE: "1000",
        PRODUCT_ID: "1000.00",
        PRODUCT_NAME: "1 GB - 30 days (Corporate)",
        PRODUCT_AMOUNT: "235",
      },
      {
        PRODUCT_CODE: "2000",
        PRODUCT_ID: "2000",
        PRODUCT_NAME: "2 GB - 30 days (SME)",
        PRODUCT_AMOUNT: "465",
      },
      {
        PRODUCT_CODE: "2000",
        PRODUCT_ID: "2000.00",
        PRODUCT_NAME: "2 GB - 30 days (Corporate)",
        PRODUCT_AMOUNT: "480",
      },
      {
        PRODUCT_CODE: "3000",
        PRODUCT_ID: "3000",
        PRODUCT_NAME: "3 GB - 30 days (SME)",
        PRODUCT_AMOUNT: "705",
      },
      {
        PRODUCT_CODE: "3000",
        PRODUCT_ID: "3000.00",
        PRODUCT_NAME: "3 GB - 30 days (Corporate)",
        PRODUCT_AMOUNT: "720",
      },
      {
        PRODUCT_CODE: "5000",
        PRODUCT_ID: "5000",
        PRODUCT_NAME: "5 GB - 30 days (SME)",
        PRODUCT_AMOUNT: "1180",
      },
      {
        PRODUCT_CODE: "5000",
        PRODUCT_ID: "5000.00",
        PRODUCT_NAME: "5 GB - 30 days (Corporate)",
        PRODUCT_AMOUNT: "1205",
      },
      {
        PRODUCT_CODE: "10000",
        PRODUCT_ID: "10000",
        PRODUCT_NAME: "10 GB - 30 days (SME)",
        PRODUCT_AMOUNT: "2375",
      },
      {
        PRODUCT_CODE: "10000",
        PRODUCT_ID: "10000.00",
        PRODUCT_NAME: "10 GB - 30 days (Corporate)",
        PRODUCT_AMOUNT: "2400",
      },
      {
        PRODUCT_CODE: "15000",
        PRODUCT_ID: "15000",
        PRODUCT_NAME: "15 GB - 30 days (Corporate)",
        PRODUCT_AMOUNT: "3575",
      },
      {
        PRODUCT_CODE: "20000",
        PRODUCT_ID: "25000",
        PRODUCT_NAME: "20 GB - 30 days (Corporate)",
        PRODUCT_AMOUNT: "4790",
      },
      {
        PRODUCT_CODE: "25000",
        PRODUCT_ID: "15000",
        PRODUCT_NAME: "25 GB - 30 days (Corporate)",
        PRODUCT_AMOUNT: "6025",
      },
      {
        PRODUCT_CODE: "50000",
        PRODUCT_ID: "100000",
        PRODUCT_NAME: "50 GB - 30 days (Corporate)",
        PRODUCT_AMOUNT: "12025",
      },
      {
        PRODUCT_CODE: "750",
        PRODUCT_ID: "750.01",
        PRODUCT_NAME: "750 MB - 14 days",
        PRODUCT_AMOUNT: "485",
      },
      {
        PRODUCT_CODE: "1000",
        PRODUCT_ID: "1000.02",
        PRODUCT_NAME: "1 GB - 7 days",
        PRODUCT_AMOUNT: "485",
      },
      {
        PRODUCT_CODE: "1500",
        PRODUCT_ID: "1500.01",
        PRODUCT_NAME: "1.5 GB - 30 days",
        PRODUCT_AMOUNT: "980",
      },
      {
        PRODUCT_CODE: "3000",
        PRODUCT_ID: "3000.06",
        PRODUCT_NAME: "3 GB - 30 days",
        PRODUCT_AMOUNT: "1470",
      },
      {
        PRODUCT_CODE: "4500",
        PRODUCT_ID: "4500.01",
        PRODUCT_NAME: "4.5 GB - 30 days",
        PRODUCT_AMOUNT: "1970",
      },
      {
        PRODUCT_CODE: "6000",
        PRODUCT_ID: "6000.01",
        PRODUCT_NAME: "6 GB - 7 days",
        PRODUCT_AMOUNT: "1470",
      },
      {
        PRODUCT_CODE: "6000",
        PRODUCT_ID: "6000.02",
        PRODUCT_NAME: "6 GB - 30 days",
        PRODUCT_AMOUNT: "2470",
      },
      {
        PRODUCT_CODE: "8000",
        PRODUCT_ID: "8000.01",
        PRODUCT_NAME: "8 GB - 30 days",
        PRODUCT_AMOUNT: "2895",
      },
      {
        PRODUCT_CODE: "10000",
        PRODUCT_ID: "10000.01",
        PRODUCT_NAME: "10 GB - 30 days",
        PRODUCT_AMOUNT: "3440",
      },
      {
        PRODUCT_CODE: "15000",
        PRODUCT_ID: "15000.01",
        PRODUCT_NAME: "15 GB - 30 days",
        PRODUCT_AMOUNT: "4855",
      },
      {
        PRODUCT_CODE: "20000",
        PRODUCT_ID: "20000.06",
        PRODUCT_NAME: "20 GB - 30 days",
        PRODUCT_AMOUNT: "5830",
      },
      {
        PRODUCT_CODE: "40000",
        PRODUCT_ID: "40000.01",
        PRODUCT_NAME: "40 GB - 30 days",
        PRODUCT_AMOUNT: "9640",
      },
      {
        PRODUCT_CODE: "75000",
        PRODUCT_ID: "75000.01",
        PRODUCT_NAME: "75 GB - 30 days",
        PRODUCT_AMOUNT: "14500",
      },
      {
        PRODUCT_CODE: "110000",
        PRODUCT_ID: "110000.01",
        PRODUCT_NAME: "110 GB - 30 days",
        PRODUCT_AMOUNT: "19400",
      },
    ],
    GLO: [
      {
        PRODUCT_CODE: "1",
        PRODUCT_ID: "200",
        PRODUCT_NAME: "200 MB - 14 days (SME)",
        PRODUCT_AMOUNT: "52",
      },
      {
        PRODUCT_CODE: "2",
        PRODUCT_ID: "500",
        PRODUCT_NAME: "500 MB - 30 days (SME)",
        PRODUCT_AMOUNT: "127",
      },
      {
        PRODUCT_CODE: "3",
        PRODUCT_ID: "1000",
        PRODUCT_NAME: "1 GB - 30 days (SME)",
        PRODUCT_AMOUNT: "250",
      },
      {
        PRODUCT_CODE: "4",
        PRODUCT_ID: "2000",
        PRODUCT_NAME: "2 GB - 30 days (SME)",
        PRODUCT_AMOUNT: "505",
      },
      {
        PRODUCT_CODE: "5",
        PRODUCT_ID: "3000",
        PRODUCT_NAME: "3 GB - 30 days (SME)",
        PRODUCT_AMOUNT: "755",
      },
      {
        PRODUCT_CODE: "6",
        PRODUCT_ID: "5000",
        PRODUCT_NAME: "5 GB - 30 days (SME)",
        PRODUCT_AMOUNT: "1260",
      },
      {
        PRODUCT_CODE: "7",
        PRODUCT_ID: "10000",
        PRODUCT_NAME: "10 GB - 30 days (SME)",
        PRODUCT_AMOUNT: "2510",
      },
      {
        PRODUCT_CODE: "8",
        PRODUCT_ID: "105.01",
        PRODUCT_NAME: "105MB",
        PRODUCT_AMOUNT: "92",
      },
      {
        PRODUCT_CODE: "9",
        PRODUCT_ID: "350.01",
        PRODUCT_NAME: "350MB",
        PRODUCT_AMOUNT: "184",
      },
      {
        PRODUCT_CODE: "10",
        PRODUCT_ID: "1050.01",
        PRODUCT_NAME: "1.05GB/1.8GB",
        PRODUCT_AMOUNT: "460",
      },
      {
        PRODUCT_CODE: "11",
        PRODUCT_ID: "2500.01",
        PRODUCT_NAME: "2.5GB/3.7GB",
        PRODUCT_AMOUNT: "920",
      },
      {
        PRODUCT_CODE: "12",
        PRODUCT_ID: "5800.01",
        PRODUCT_NAME: "5.8GB/9.5GB",
        PRODUCT_AMOUNT: "1840",
      },
      {
        PRODUCT_CODE: "13",
        PRODUCT_ID: "7700.01",
        PRODUCT_NAME: "7.7GB/12.75GB",
        PRODUCT_AMOUNT: "2300",
      },
      {
        PRODUCT_CODE: "14",
        PRODUCT_ID: "10000.01",
        PRODUCT_NAME: "10GB/17GB",
        PRODUCT_AMOUNT: "2760",
      },
      {
        PRODUCT_CODE: "15",
        PRODUCT_ID: "13250.01",
        PRODUCT_NAME: "13.25GB/19GB",
        PRODUCT_AMOUNT: "3680",
      },
      {
        PRODUCT_CODE: "16",
        PRODUCT_ID: "18250.01",
        PRODUCT_NAME: "18.25/23GB",
        PRODUCT_AMOUNT: "4600",
      },
      {
        PRODUCT_CODE: "17",
        PRODUCT_ID: "29500.01",
        PRODUCT_NAME: "29.5GB/37GB",
        PRODUCT_AMOUNT: "7360",
      },
      {
        PRODUCT_CODE: "18",
        PRODUCT_ID: "50000.01",
        PRODUCT_NAME: "50GB/50GB",
        PRODUCT_AMOUNT: "9200",
      },
      {
        PRODUCT_CODE: "19",
        PRODUCT_ID: "93000.01",
        PRODUCT_NAME: "93GB/93GB",
        PRODUCT_AMOUNT: "13800",
      },
      {
        PRODUCT_CODE: "20",
        PRODUCT_ID: "119000.01",
        PRODUCT_NAME: "119GB/119GB",
        PRODUCT_AMOUNT: "16560",
      },
      {
        PRODUCT_CODE: "21",
        PRODUCT_ID: "138000.01",
        PRODUCT_NAME: "138GB/138GB",
        PRODUCT_AMOUNT: "18400",
      },
    ],
    MOBILE: [
      {
        PRODUCT_CODE: "1",
        PRODUCT_ID: "50",
        PRODUCT_NAME: "50 MB - 30 days (SME)",
        PRODUCT_AMOUNT: "10",
      },
      {
        PRODUCT_CODE: "2",
        PRODUCT_ID: "100",
        PRODUCT_NAME: "100 MB - 30 days (SME)",
        PRODUCT_AMOUNT: "18",
      },
      {
        PRODUCT_CODE: "3",
        PRODUCT_ID: "300",
        PRODUCT_NAME: "300 MB - 30 days (SME)",
        PRODUCT_AMOUNT: "50",
      },
      {
        PRODUCT_CODE: "4",
        PRODUCT_ID: "500",
        PRODUCT_NAME: "500 MB - 30 days (SME)",
        PRODUCT_AMOUNT: "85",
      },
      {
        PRODUCT_CODE: "5",
        PRODUCT_ID: "1000",
        PRODUCT_NAME: "1 GB - 30 days (SME)",
        PRODUCT_AMOUNT: "160",
      },
      {
        PRODUCT_CODE: "6",
        PRODUCT_ID: "2000",
        PRODUCT_NAME: "2 GB - 30 days (SME)",
        PRODUCT_AMOUNT: "300",
      },
      {
        PRODUCT_CODE: "7",
        PRODUCT_ID: "3000",
        PRODUCT_NAME: "3 GB - 30 days (SME)",
        PRODUCT_AMOUNT: "455",
      },
      {
        PRODUCT_CODE: "8",
        PRODUCT_ID: "4000",
        PRODUCT_NAME: "4 GB - 30 days (SME)",
        PRODUCT_AMOUNT: "600",
      },
      {
        PRODUCT_CODE: "9",
        PRODUCT_ID: "5000",
        PRODUCT_NAME: "5 GB - 30 days (SME)",
        PRODUCT_AMOUNT: "785",
      },
      {
        PRODUCT_CODE: "10",
        PRODUCT_ID: "10000",
        PRODUCT_NAME: "10 GB - 30 days (SME)",
        PRODUCT_AMOUNT: "1575",
      },
      {
        PRODUCT_CODE: "11",
        PRODUCT_ID: "15000",
        PRODUCT_NAME: "15 GB - 30 days (SME)",
        PRODUCT_AMOUNT: "2275",
      },
      {
        PRODUCT_CODE: "12",
        PRODUCT_ID: "20000",
        PRODUCT_NAME: "20 GB - 30 days (SME)",
        PRODUCT_AMOUNT: "3100",
      },
      {
        PRODUCT_CODE: "13",
        PRODUCT_ID: "25000",
        PRODUCT_NAME: "25 GB - 30 days (SME)",
        PRODUCT_AMOUNT: "3825",
      },
      {
        PRODUCT_CODE: "14",
        PRODUCT_ID: "500.01",
        PRODUCT_NAME: "500 MB - 30 days",
        PRODUCT_AMOUNT: "467.5",
      },
      {
        PRODUCT_CODE: "15",
        PRODUCT_ID: "1500.01",
        PRODUCT_NAME: "1.5 GB - 30 days",
        PRODUCT_AMOUNT: "935",
      },
      {
        PRODUCT_CODE: "16",
        PRODUCT_ID: "2000.01",
        PRODUCT_NAME: "2 GB - 30 days",
        PRODUCT_AMOUNT: "1122",
      },
      {
        PRODUCT_CODE: "17",
        PRODUCT_ID: "4500.01",
        PRODUCT_NAME: "4.5 GB - 30 days",
        PRODUCT_AMOUNT: "1870",
      },
      {
        PRODUCT_CODE: "18",
        PRODUCT_ID: "3000.01",
        PRODUCT_NAME: "7 GB - 7 days",
        PRODUCT_AMOUNT: "1402.5",
      },
      {
        PRODUCT_CODE: "19",
        PRODUCT_ID: "11000.01",
        PRODUCT_NAME: "11 GB - 30 days",
        PRODUCT_AMOUNT: "3740",
      },
      {
        PRODUCT_CODE: "20",
        PRODUCT_ID: "15000.01",
        PRODUCT_NAME: "15 GB - 30 days",
        PRODUCT_AMOUNT: "4675",
      },
      {
        PRODUCT_CODE: "21",
        PRODUCT_ID: "40000.01",
        PRODUCT_NAME: "40 GB - 30 days",
        PRODUCT_AMOUNT: "9350",
      },
      {
        PRODUCT_CODE: "22",
        PRODUCT_ID: "75000.01",
        PRODUCT_NAME: "75 GB - 30 days",
        PRODUCT_AMOUNT: "14025",
      },
    ],
    AIRTEL: [
      {
        PRODUCT_CODE: "1",
        PRODUCT_ID: "100",
        PRODUCT_NAME: "100 MB - 7 days (SME)",
        PRODUCT_AMOUNT: "26",
      },
      {
        PRODUCT_CODE: "2",
        PRODUCT_ID: "300",
        PRODUCT_NAME: "300 MB - 7 days (SME)",
        PRODUCT_AMOUNT: "74",
      },
      {
        PRODUCT_CODE: "3",
        PRODUCT_ID: "500",
        PRODUCT_NAME: "500 MB - 30 days (SME)",
        PRODUCT_AMOUNT: "122",
      },
      {
        PRODUCT_CODE: "4",
        PRODUCT_ID: "1000",
        PRODUCT_NAME: "1 GB - 30 days (SME)",
        PRODUCT_AMOUNT: "225",
      },
      {
        PRODUCT_CODE: "5",
        PRODUCT_ID: "2000",
        PRODUCT_NAME: "2 GB - 30 days (SME)",
        PRODUCT_AMOUNT: "455",
      },
      {
        PRODUCT_CODE: "6",
        PRODUCT_ID: "5000",
        PRODUCT_NAME: "5 GB - 30 days (SME)",
        PRODUCT_AMOUNT: "1130",
      },
      {
        PRODUCT_CODE: "7",
        PRODUCT_ID: "10000",
        PRODUCT_NAME: "10 GB - 30 days (SME)",
        PRODUCT_AMOUNT: "2255",
      },
      {
        PRODUCT_CODE: "8",
        PRODUCT_ID: "15000",
        PRODUCT_NAME: "15 GB - 30 days (SME)",
        PRODUCT_AMOUNT: "3380",
      },
      {
        PRODUCT_CODE: "9",
        PRODUCT_ID: "20000",
        PRODUCT_NAME: "20 GB - 30 days (SME)",
        PRODUCT_AMOUNT: "4505",
      },
      {
        PRODUCT_CODE: "10",
        PRODUCT_ID: "99.00",
        PRODUCT_NAME: "100 MB - 1 day",
        PRODUCT_AMOUNT: "95.54",
      },
      {
        PRODUCT_CODE: "11",
        PRODUCT_ID: "199.03",
        PRODUCT_NAME: "200 MB - 3 days",
        PRODUCT_AMOUNT: "192.06",
      },
      {
        PRODUCT_CODE: "12",
        PRODUCT_ID: "299.02",
        PRODUCT_NAME: "350 MB - 7 days",
        PRODUCT_AMOUNT: "288.55",
      },
      {
        PRODUCT_CODE: "13",
        PRODUCT_ID: "499.00",
        PRODUCT_NAME: "750 MB - 14 days",
        PRODUCT_AMOUNT: "481.54",
      },
      {
        PRODUCT_CODE: "14",
        PRODUCT_ID: "299.03",
        PRODUCT_NAME: "1 GB - 1 day",
        PRODUCT_AMOUNT: "288.56",
      },
      {
        PRODUCT_CODE: "15",
        PRODUCT_ID: "999.00",
        PRODUCT_NAME: "1.5 GB - 30 days",
        PRODUCT_AMOUNT: "964.04",
      },
      {
        PRODUCT_CODE: "16",
        PRODUCT_ID: "499.03",
        PRODUCT_NAME: "2 GB - 1 day",
        PRODUCT_AMOUNT: "500.56",
      },
      {
        PRODUCT_CODE: "17",
        PRODUCT_ID: "1199.00",
        PRODUCT_NAME: "2 GB - 30 days",
        PRODUCT_AMOUNT: "1257.04",
      },
      {
        PRODUCT_CODE: "18",
        PRODUCT_ID: "1499.01",
        PRODUCT_NAME: "3 GB - 30 days",
        PRODUCT_AMOUNT: "1546.54",
      },
      {
        PRODUCT_CODE: "19",
        PRODUCT_ID: "1999.00",
        PRODUCT_NAME: "4.5 GB - 30 days",
        PRODUCT_AMOUNT: "2029.04",
      },
      {
        PRODUCT_CODE: "20",
        PRODUCT_ID: "1499.03",
        PRODUCT_NAME: "6 GB - 7 days",
        PRODUCT_AMOUNT: "1596.56",
      },
      {
        PRODUCT_CODE: "21",
        PRODUCT_ID: "2499.01",
        PRODUCT_NAME: "6 GB - 30 days",
        PRODUCT_AMOUNT: "2551.54",
      },
      {
        PRODUCT_CODE: "22",
        PRODUCT_ID: "2999.02",
        PRODUCT_NAME: "8 GB - 30 days",
        PRODUCT_AMOUNT: "3044.05",
      },
      {
        PRODUCT_CODE: "23",
        PRODUCT_ID: "3999.01",
        PRODUCT_NAME: "11 GB - 30 days",
        PRODUCT_AMOUNT: "3999.04",
      },
      {
        PRODUCT_CODE: "24",
        PRODUCT_ID: "4999.00",
        PRODUCT_NAME: "15 GB - 30 days",
        PRODUCT_AMOUNT: "4954.04",
      },
      {
        PRODUCT_CODE: "25",
        PRODUCT_ID: "9999.00",
        PRODUCT_NAME: "40 GB - 30 days",
        PRODUCT_AMOUNT: "9799.04",
      },
      {
        PRODUCT_CODE: "26",
        PRODUCT_ID: "14999.00",
        PRODUCT_NAME: "75 GB - 30 days",
        PRODUCT_AMOUNT: "14604.04",
      },
      {
        PRODUCT_CODE: "27",
        PRODUCT_ID: "19999.02",
        PRODUCT_NAME: "110 GB - 30 days",
        PRODUCT_AMOUNT: "19499.05",
      },
    ],
  };

  const networks = [
    { label: "MTN", value: "01" },
    { label: "AIRTEL", value: "02" },
    { label: "GLO", value: "03" },
    { label: "9MOBILE", value: "04" },
  ];

  const changePlan = (value) => {
    switch (value) {
      case "01":
        setDataPlan("Select Plan");
        let MTNPLAN = [];
        plans.MTN.forEach((plan) => {
          let item = {
            label: `${plan.PRODUCT_NAME} @ ${plan.PRODUCT_AMOUNT}`,
            value: plan.PRODUCT_ID,
          };

          MTNPLAN.push(item);
        });
        return MTNPLAN;
      case "02":
        setDataPlan("Select Plan");
        let AIRTELPLAN = [];
        plans.AIRTEL.forEach((plan) => {
          let item = {
            label: `${plan.PRODUCT_NAME} @ ${plan.PRODUCT_AMOUNT}`,
            value: plan.PRODUCT_ID,
          };

          AIRTELPLAN.push(item);
        });
        return AIRTELPLAN;
      case "03":
        setDataPlan("Select Plan");
        let GLO = [];
        plans.GLO.forEach((plan) => {
          let item = {
            label: `${plan.PRODUCT_NAME} @ ${plan.PRODUCT_AMOUNT}`,
            value: plan.PRODUCT_ID,
          };

          GLO.push(item);
        });
        return GLO;
      case "04":
        setDataPlan("Select Plan");
        let MOBILE = [];
        plans.MOBILE.forEach((plan) => {
          let item = {
            label: `${plan.PRODUCT_NAME} @ ${plan.PRODUCT_AMOUNT}`,
            value: plan.PRODUCT_ID,
          };

          MOBILE.push(item);
        });
        return MOBILE;
      default:
        return [{ label: "Select Plan", value: "00" }];
        break;
    }
  };

  const [network, setNetwork] = useState("");
  const [dataPlan, setDataPlan] = useState("");
  const [number, setNumber] = useState("");
  const [amount, setAmount] = useState("");
  const [currentPlan, setCurrentPlan] = useState([
    { label: "Select Plan", value: "null" },
  ]);

  const handleBuyData = (network, dataPlan, number, amount) => {
    console.log(network, dataPlan, number, amount);
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
          headerTitle: "Buy Data",
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
                  Select network and plan to purchase
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
                  label="Network"
                  placeholder="Select Network"
                  onChangeSelect={(value) => {
                    setNetwork(value);
                    setDataPlan(value);
                    setCurrentPlan(changePlan(value));
                  }}
                  items={networks}
                />
                <SelectInput
                  label="Data Plan"
                  placeholder="Select Data Plan"
                  onChangeSelect={(value) => setDataPlan(value)}
                  items={currentPlan}
                />
                <Input
                  label="Mobile Number"
                  placeholder="Enter Phone Number"
                  value={number}
                  handleChange={(text) => setNumber(text)}
                  keyboardType="phone-pad"
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
                  onPress={() =>
                    handleBuyData(network, dataPlan, number, amount)
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

export default data;
