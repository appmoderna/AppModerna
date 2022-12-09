import { FAB } from "@rneui/base";
import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import { getUnsincronizedClients } from "../../services/ClienteService";
import Header from "../../components/Header";
import SincronizarListItems from "./SincronizarListItems";

export default function SincronizarClientes({ navigation, route }) {
  return (
    <View style={styles.container}>
      <Header
        back={() => {
          navigation.goBack();
        }}
      />
      <SincronizarListItems title="Clientes" clientes />
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
