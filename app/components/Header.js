import { Image } from "@rneui/base";
import { useEffect, useState } from "react";
import { Dimensions } from "react-native";
import { Keyboard, View, StyleSheet } from "react-native";
import theme from "../theme/theme";
import Constants from "expo-constants";

export default function Header({ back, navigation, scale = 1, hide = true }) {
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        setKeyboardVisible(true); // or some other action
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setKeyboardVisible(false); // or some other action
      }
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  return (
    <View style={styles.statusbar}>
      <View style={isKeyboardVisible && hide ? styles.hide : styles.container}>
        <Image
          style={[
            styles.logo,
            {
              height: 70 * scale,
              width: Dimensions.get("window").width - 120,
            },
          ]}
          source={require("../../assets/moderna/Logotipo-original.png")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  hide: {
    display: "none",
  },
  statusbar: {
    marginTop: Constants.statusBarHeight,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colors.white,
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: -10,
  },
  logo: {
    marginVertical: 20,
    resizeMode: "center",
  },
});
