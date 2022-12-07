import React from "react";
import { StyleSheet, View } from "react-native";
import StyledText from "./StyledText";
import Constants from "expo-constants";
import theme from "../theme/theme";
import { FAB } from "@rneui/base";

export default function TabBar({ state, descriptors, navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.tabbar}>
        <View style={styles.fabcontainer}>
          <FAB
            size="large"
            color={theme.colors.modernaYellow}
            style={styles.button}
          >
            +
          </FAB>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: { paddingTop: Constants.statusBarHeight, backgroundColor: "blue" },

  tabbar: {
    height: Constants.statusBarHeight * 3,
    backgroundColor: theme.colors.modernaRed,
    flexWrap: "nowrap",
    justifyContent: "space-evenly",
    alignItems: "center",
    borderTopWidth: Constants.statusBarHeight,
    borderTopColor: "white",
  },
  button: {
    marginBottom: Constants.statusBarHeight * 1.8,
    alignSelf: "center",
    borderWidth: 1,
    borderColor: "white",
  },
  fabcontainer: { borderRadius: 50, borderWidth: 3 },
});
