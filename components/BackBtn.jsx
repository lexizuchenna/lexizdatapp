import { TouchableOpacity, Image } from "react-native";

import styles from "../styles/style";

const BackBtn = ({ iconUrl, dimension, handlePress }) => {
  return (
    <TouchableOpacity style={styles.backBtnContainer} onPress={handlePress}>
      <Image
        source={iconUrl}
        resizeMode="cover"
        style={styles.backBtnImg(dimension)}
      />
    </TouchableOpacity>
  );
};

export default BackBtn;
