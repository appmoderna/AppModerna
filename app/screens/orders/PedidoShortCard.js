import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import Icons from "../../components/Icons";
import StyledText from "../../components/StyledText";
import theme from "../../theme/theme";

export default function PedidoShortCard({ pedido, navigation }) {
  const reimprimirPedido = () => {
    navigation?.navigate("PedidoResumen");
  };
  return (
    <TouchableOpacity onPress={reimprimirPedido}>
      <View
        style={[styles.card, pedido?.stock ? styles.active : styles.inactive]}
      >
        <View style={styles.left}>
          <StyledText bold>PEDIDO #{pedido?.id}</StyledText>
          <StyledText small>{pedido?.cliente?.nombre}</StyledText>
          <StyledText smaller light>
            {pedido?.cliente?.dni}
          </StyledText>
        </View>
        <View style={styles.right}>
          <Icons
            check
            color={
              pedido?.sincronized ? theme.colors.active : theme.colors.inactive
            }
          />
        </View>
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  card: {
    flex: 1,
    flexDirection: "row",
    marginVertical: 2,
    paddingRight: 10,
    paddingLeft: 15,
    paddingVertical: 3,
    //borderRadius: 8,
    borderBottomWidth: 1,
    borderRightWidth: 1,
    //borderLeftWidth: 0.15,
    //borderTopWidth: 0.2,
  },
  active: {
    borderColor: "#000",
  },
  inactive: {
    borderColor: theme.colors.modernaRed,
  },
  left: { flex: 5 },
  right: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
