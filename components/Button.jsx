import { Text, TouchableOpacity, View } from "react-native";

import styles from "../styles/style";

export default Button = ({ text, textSize, handlePress }) => (
  <View style={{ flex: 1, flexDirection: "row", width: "70%" }}>
    <TouchableOpacity style={styles.btn("outline")} onPress={handlePress}>
      <Text style={styles.btnText("outline", textSize)}> {text} </Text>
    </TouchableOpacity>
  </View>
);
