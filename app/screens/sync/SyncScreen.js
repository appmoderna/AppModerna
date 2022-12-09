import React from "react";
import { StyleSheet, View } from "react-native";
import { BottomNavigation } from "react-native-paper";

export default function SyncScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.tabbar}></View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 10,
  },
});
