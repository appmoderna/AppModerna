import React, { useEffect, useState } from "react";
import { Dimensions, FlatList, StyleSheet, View } from "react-native";
import SearhInput from "../../components/SearchInput";
import StyledText from "../../components/StyledText";
import { consultarPedidos } from "../../services/PedidoService";
import theme from "../../theme/theme";
import PedidoShortCard from "./PedidoShortCard";

export default function PedidosList({ navigation }) {
  const [pedidos, setPedidos] = useState([]);
  const [search, setSearch] = useState("");

  const obtenerPedidos = () => {
    const response = consultarPedidos(search);
    setPedidos(response);
  };
  useEffect(() => {
    obtenerPedidos();
  }, [search]);

  return (
    <View style={styles.container}>
      <StyledText heading bold center>
        PEDIDOS
      </StyledText>
      <SearhInput
        value={search}
        onChangeText={setSearch}
        onSubmit={obtenerPedidos}
        label="Buscar"
      />
      <View style={styles.boxgroup}>
        <View style={styles.boxcontainer}>
          <View style={styles.box}></View>
          <StyledText style={{ flexWrap: "wrap" }}>Pedido con stock</StyledText>
        </View>
        <View style={styles.boxcontainer}>
          <View style={[styles.box, styles.nostock]}></View>
          <StyledText modernaPrimary>Pedido con stock</StyledText>
        </View>
      </View>
      <FlatList
        style={styles.list}
        data={pedidos}
        renderItem={({ item }) => {
          return <PedidoShortCard pedido={item} navigation={navigation} />;
        }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
    paddingHorizontal: 15,
  },
  boxgroup: { flexDirection: "row" },
  boxcontainer: {
    flexDirection: "row",
    alignItems: "center",
    width: Dimensions.get("window").width / 3,
  },
  box: {
    width: 50,
    height: 50,
    borderBottomWidth: 2,
    borderRightWidth: 2,
    borderLeftWidth: 0.5,
    borderTopWidth: 0.5,
  },
  nostock: {
    borderColor: theme.colors.modernaRed,
  },
});
