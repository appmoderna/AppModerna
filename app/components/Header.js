import { Image } from "@rneui/base";
import { useEffect, useState } from "react";
import { Dimensions, TouchableOpacity } from "react-native";
import { Keyboard, View, StyleSheet } from "react-native";
import theme from "../theme/theme";
import Icons from "./Icons";
import Constants from "expo-constants";

export default function Header({ back, navigation }) {
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
      <View style={isKeyboardVisible ? styles.hide : styles.container}>
        {back && (
          <View style={styles.fab}>
            <TouchableOpacity
              onPress={() => {
                navigation?.goBack();
              }}
            >
              <Icons back size={40} color={theme.colors.modernaYellow} />
            </TouchableOpacity>
          </View>
        )}
        <Image
          style={styles.logo}
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
  },
  logo: {
    resizeMode: "center",
    width: Dimensions.get("window").width - 120,
    height: 120,
  },
  fab: {
    zIndex: 999,
    position: "absolute",
    top: 5,
    left: 10,
  },
});
