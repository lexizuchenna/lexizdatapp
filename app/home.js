import { useState } from "react";
import {
  Text,
  SafeAreaView,
  View,
  ScrollView,
  Dimensions,
  ActivityIndicator,
  TouchableOpacity,
  Image,
} from "react-native";
import { Stack, useRouter } from "expo-router";
import * as SecureStore from "expo-secure-store"
import getUser from "../hooks/getUser";

import UserIcon from "../components/UserIcon";
import UserFooter from "../components/UserFooter";
import UserAction from "../components/UserAction";
import Transactions from "../components/Transactions";
import Overview from "../components/Overview";
import Loader from "../components/Loader";
import { colors, font, sizes, images } from "../constants";
import styles from "../styles/style";

function home() {
  const router = useRouter();
  const screenWidth = Dimensions.get("window").width;
  const screenHeight = Dimensions.get("window").height;

  const {user, isLoading, error, refetch} = getUser()

  console.log(user, isLoading, error)

  const [loader, setLoader] = useState(false);
  
  isLoading ? setLoader(true) : setLoader(false)
  
  const footerItems = [
    {
      activeImage: images.homeActive,
      inactiveImage: images.home,
      active: true,
      handlePress: null,
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

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: colors.body,
        alignItems: "stretch",
        height: "100%",
        width: screenWidth,
      }}
    >
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: colors.body },
          headerShadowVisible: false,
          headerBackVisible: false,
          headerLeft: () => "",
          headerTitle: "Dashboard",
        }}
      />
      <View style={styles.container(screenHeight)}>
        {loader ? (
          <Loader />
        ) : (
          <>
            <UserIcon id="377490" email="lextechspec@gmail.com" />
            <ScrollView
              showsVerticalScrollIndicator={false}
              contentContainerStyle={styles.contentContainer}
            >
              <View>
                <Text style={styles.heading}>Welcome Alexander</Text>
                <Overview amount="2,400,000" add={true} />
                <View
                  style={{
                    justifyContent: "space-between",
                    flexDirection: "row",
                    alignItems: "center",
                    backgroundColor: colors.primary,
                    paddingVertical: 30,
                    paddingHorizontal: 20,
                    marginHorizontal: 20,
                    marginVertical: 10,
                    borderRadius: 10,
                  }}
                >
                  <UserAction
                    image={images.wifi}
                    handlePress={() => router.push("/services/data")}
                  />
                  <UserAction
                    image={images.signal}
                    handlePress={() => router.push("/services/airtime")}
                  />
                  <UserAction
                    image={images.electricity}
                    handlePress={() => router.push("/services/electricity")}
                  />
                  <UserAction
                    image={images.tv}
                    handlePress={() => router.push("/services/cable")}
                  />
                </View>
                <View
                  style={{
                    justifyContent: "space-between",
                    flexDirection: "row",
                    alignItems: "center",
                    marginHorizontal: 15,
                    marginBottom: 25,
                    marginTop: 20,
                  }}
                >
                  <Text style={styles.leadHeading}>Latest Transactions</Text>
                  <Text style={styles.leadHeading}>View All</Text>
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
                  <Transactions image={images.settingActive} />
                  <Transactions image={images.settingActive} />
                  <Transactions image={images.settingActive} />
                  <Transactions image={images.settingActive} />
                  <Transactions image={images.settingActive} />
                  <Transactions image={images.settingActive} />
                  <Transactions image={images.addActive} />
                  <Transactions image={images.addActive} />
                  <Transactions image={images.addActive} />
                  <Transactions image={images.addActive} />
                  <Transactions image={images.addActive} />
                </View>
              </View>
            </ScrollView>
            <UserFooter items={footerItems} />
          </>
        )}
      </View>
    </SafeAreaView>
  );
}

export default home;
