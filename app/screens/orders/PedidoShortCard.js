import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import Icons from "../../components/Icons";
import StyledText from "../../components/StyledText";
import theme from "../../theme/theme";

export default function PedidoShortCard({
  pedido,
  isChecked,
  navigation,
  onCheckTouch,
}) {
  return (
    <TouchableWithoutFeedback
      onPress={() => navigation?.navigate("PedidoResumen", { pedido })}
    >
      <View
        style={[styles.card, pedido?.textoFactura !== "" && styles.nostock]}
      >
        <View style={styles.left}>
          <View style={styles.information}>
            <StyledText bold>PEDIDO #{pedido?.idPedido}</StyledText>
            <StyledText light>{pedido?.fecha}</StyledText>
          </View>
          <StyledText>{pedido?.idCliente?.nombre}</StyledText>
          <StyledText light>{pedido?.idCliente?.identificacion}</StyledText>
        </View>
        <View style={styles.right}>
          <TouchableOpacity
            onPress={() => {
              if (onCheckTouch != null) {
                onCheckTouch();
              }
            }}
          >
            <Icons
              check
              color={
                isChecked === true ? theme.colors.active : theme.colors.inactive
              }
            />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
const styles = StyleSheet.create({
  nostock: {
    borderColor: theme.colors.modernaRed,
  },
  card: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    marginVertical: 3,
    flexDirection: "row",
    //borderTopWidth: 0.3,
    // borderLeftWidth: 0.1,
    borderBottomWidth: 1.5,
    borderRightWidth: 1.5,
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
