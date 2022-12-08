import { FAB } from "@rneui/base";
import React, { useEffect, useState } from "react";
import { FlatList, View, StyleSheet, TouchableOpacity } from "react-native";
import Icons from "../../components/Icons";
import SearchInput from "../../components/SearchInput";
import {
  getUnsincronizedClients,
  searchClients,
} from "../../services/ClienteService";
import StyledText from "../../components/StyledText";
import theme from "../../theme/theme";
import { Searchbar } from "react-native-paper";
import ClienteCard from "../clients/ClienteCard";
import Header from "../../components/Header";
import PedidoShortCard from "../orders/PedidoShortCard";
import { getUnsincronizedPedidos } from "../../services/PedidoService";

const MINIMUN_ELEMENTS_FOR_SEARCH = 4;

export default function SincronizarPedidos({ navigation, route }) {
  const [pedidos, setPedidos] = useState([]);
  const [search, setSearch] = useState("");

  const buscarPedidos = () => {
    const response = getUnsincronizedPedidos();
    setPedidos(response);
  };
  const selectAll = () => {
    pedidos.forEach((element) => {
      element.sincronizado = true;
    });
  };
  useEffect(() => {
    buscarPedidos();
  }, [search]);

  return (
    <View style={styles.container}>
      <Header
        back={() => {
          navigation.goBack();
        }}
      />
      <StyledText heading center bold style={styles.title}>
        PEDIDOS
      </StyledText>
      <TouchableOpacity onPress={selectAll} style={styles.selection}>
        <StyledText>Seleccionar todo</StyledText>
        <View style={styles.circle} />
      </TouchableOpacity>
      {!pedidos || pedidos.length === 0 ? (
        <View style={styles.container}>
          <StyledText center title bold>
            {search !== "" ? "No hay resultados" : "No hay pedidos"}
          </StyledText>
        </View>
      ) : (
        <View>
          <FlatList
            keyExtractor={({ item }) => item?.identificacion}
            data={pedidos}
            renderItem={({ item }) => {
              return <PedidoShortCard pedido={item} />;
            }}
            style={styles.list}
          />
        </View>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 10,
  },
  list: {
    marginTop: 0,
    marginBottom: 50,
    paddingHorizontal: 15,
  },
  title: {
    marginBottom: 15,
  },
  search: {
    marginBottom: 0,
  },
  selection: {
    paddingHorizontal: 30,
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  circle: {
    height: 24,
    width: 24,
    borderWidth: 1,
    borderRadius: 50,
    marginLeft: 10,
  },
});
