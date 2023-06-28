import { Text, View, TextInput } from "react-native";

import styles from "../styles/style";
import { font, sizes, colors } from "../constants";

function Input({ label, placeholder, handleChange, value, keyboardType }) {
  return (
    <View style={{ marginTop: 20 }}>
      <Text
        style={{
          fontFamily: font.medium,
          fontSize: sizes.large,
          marginLeft: 10,
        }}
      >
        {label}
      </Text>
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            placeholder={placeholder}
            onChangeText={(text) => handleChange(text)}
            value={value}
            style={styles.searchInput}
            keyboardType={keyboardType}
            placeholderTextColor={colors.dark}
          />
        </View>
      </View>
    </View>
  );
}

export default Input;
