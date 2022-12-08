import React from "react";
import { StyleSheet, View } from "react-native";
import Icons from "../../components/Icons";
import StyledText from "../../components/StyledText";
import theme from "../../theme/theme";

export default function PedidoShortCard({ pedido }) {
  return (
    <View style={[styles.card, pedido?.textoFactura !== "" && styles.nostock]}>
      <View style={styles.left}>
        <View style={styles.information}>
          <StyledText bold>PEDIDO #{pedido?.idPedido}</StyledText>
          <StyledText light>{pedido?.fecha}</StyledText>
        </View>
        <StyledText>{pedido?.idCliente?.nombre}</StyledText>
        <StyledText light>{pedido?.idCliente?.dni}</StyledText>
      </View>
      <View style={styles.right}>
        <Icons check />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  nostock: {
    borderColor: theme.colors.modernaRed,
  },
  card: {
    paddingHorizontal: 20,
    paddingVertical: 5,
    marginVertical: 3,
    flexDirection: "row",
    borderTopWidth: 0.5,
    borderLeftWidth: 0.5,
    borderBottomWidth: 2,
    borderRightWidth: 2,
    alignItems: "center",
  },
  left: {
    flex: 10,
  },
  right: {
    flex: 2,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  information: { flexDirection: "row", justifyContent: "space-between" },
});
