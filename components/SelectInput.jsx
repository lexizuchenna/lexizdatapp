import RNPickerSelect from "react-native-picker-select";
import { Text, View, StyleSheet } from "react-native";

import { font, colors, sizes } from "../constants";
import styles from "../styles/style";

function SelectInput({
  label,
  placeholder,
  items,
  onChangeSelect,
  placeholderValue
}) {
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
          <RNPickerSelect
            items={items}
            onValueChange={(value) => onChangeSelect(value)}
            style={customPickerStyles}
            useNativeAndroidPickerStyle={false}
            placeholder={{
              label: placeholder ? placeholder : "Select Item",
              value: placeholderValue ? placeholderValue : null,
            }}
          />
        </View>
      </View>
    </View>
  );
}

const customPickerStyles = StyleSheet.create({
  inputIOS: {
    fontFamily: font.regular,
    fontSize: sizes.large,
    width: "100%",
    paddingHorizontal: sizes.medium,
    paddingVertical: 10,
    borderRadius: 8,
    color: colors.black,
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontFamily: font.regular,
    fontSize: sizes.large,
    width: "100%",
    paddingHorizontal: sizes.medium,
    paddingVertical: 10,
    borderRadius: 8,
    color: colors.black,
    paddingRight: 30, // to ensure the text is never behind the icon
  },
});

export default SelectInput;
