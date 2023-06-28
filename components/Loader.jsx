import React from "react";
import { ActivityIndicator, View } from "react-native";

import { sizes, colors } from "../constants";
import styles from "../styles/style";

function Loader() {
  return (
    <View style={styles.loaderContainer}>
      <ActivityIndicator size="large" color={colors.primary} />
    </View>
  );
}

export default Loader;
