import React, { useEffect, useState } from "react";
import { FlatList, View, StyleSheet, TouchableOpacity } from "react-native";
import StyledText from "../../components/StyledText";
import Header from "../../components/Header";
import SincronizarListItems from "./SincronizarListItems";

export default function SincronizarPedidos({ navigation }) {
  return (
    <View style={styles.container}>
      <Header
        back={() => {
          navigation.goBack();
        }}
      />
      <SincronizarListItems title="Pedidos" pedidos />
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
