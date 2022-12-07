import React, { useEffect, useState } from "react";
import { Dimensions, FlatList, StyleSheet, View } from "react-native";
import Icons from "../../components/Icons";
import SearhInput from "../../components/SearchInput";
import StyledText from "../../components/StyledText";
import { getPedidos, searchPedidos } from "../../services/PedidosService";
import theme from "../../theme/theme";
import PedidoShortCard from "./PedidoShortCard";

export default function PedidosList({ navigation }) {
  const [pedidos, setPedidos] = useState([]);
  const [search, setSearch] = useState("");

  const obtenerPedidos = async () => {
    const response = await searchPedidos(search);
    setPedidos(response);
  };

  useEffect(() => {
    obtenerPedidos();
  }, [search]);

  return (
    <View style={styles.container}>
      <StyledText bold center heading style={styles.title}>
        PEDIDOS
      </StyledText>
      <SearhInput
        onSubmit={getPedidos}
        value={search}
        onChangeText={setSearch}
        style={styles.search}
        placeholder="Buscar pedido"
        label="Buscar"
      />
      <View style={styles.information}>
        <View style={styles.infodetail}>
          <Icons square size={32} />
          <StyledText style={styles.message}>Pedido con stock</StyledText>
        </View>
        <View style={styles.information} />
        <View style={styles.infodetail}>
          <Icons square size={32} color={theme.colors.modernaRed} />
          <StyledText style={styles.message} color={theme.colors.modernaRed}>
            Pedido sin stock
          </StyledText>
        </View>
      </View>
      <FlatList
        style={styles.list}
        keyExtractor={(item) => item.id}
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
    backgroundColor: "#fff",
    paddingHorizontal: 10,
  },
  list: {
    marginTop: 0,
    marginBottom: 50,
    paddingHorizontal: 5,
  },
  search: {
    marginBottom: 0,
  },
  information: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    paddingHorizontal: 30,
    marginBottom: 10,
  },
  infodetail: {
    flex: 3,
    flexDirection: "row",
    alignItems: "center",
  },
  message: { flex: 5, flexWrap: "wrap" },
  title: {
    marginBottom: 15,
  },
});
