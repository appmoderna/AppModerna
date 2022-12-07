import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import StyledText from "../../theme/StyledText";
import { Button, FAB } from "@rneui/base";
import theme from "../../theme/theme";
import { useEffect, useState } from "react";
import PedidoCard from "./PedidoCard";
import {
  getPedido,
  calcularFactura,
  removeDetalle,
} from "../../services/PedidoService";
import Icons from "../../components/Icons";
import StyledButton from "../../components/StyledButton";
import Header from "../../components/Header";
import { to2Decimals } from "../../commons/validations";

export default function PedidoResumen({ route, navigation }) {
  const [factura, setFactura] = useState();
  const [carrito, setCarrito] = useState([]);
  const date = new Date();
  const currentDate =
    date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();

  const actualizarCarrito = () => {
    const response = getPedido();
    setCarrito(response);
    setFactura(calcularFactura());
  };

  useEffect(() => {
    actualizarCarrito();
  }, []);

  const eliminarProductoRefresh = (id) => {
    removeDetalle(id);
    actualizarCarrito();
  };

  return (
    <View style={styles.container}>
      <Header back={() => navigation?.goBack()} />
      <View style={styles.subcontainer}>
        <StyledText heading bold center>
          RESUMEN DE PEDIDO
        </StyledText>
        <StyledText light center>
          {currentDate}
        </StyledText>
        <View style={styles.cajaCuerpo}>
          <StyledText heading modernaPrimary bold>
            $ {factura?.subtotal + factura?.iva}
          </StyledText>
          <Text style={[styles.cajaTitulo, { color: "#ffff" }]}>Resumen: </Text>
          <View style={styles.cajaResumen}>
            <View style={styles.resumen}>
              <StyledText bold>Subtotal</StyledText>
              <StyledText bold>$ {to2Decimals(factura?.subtotal)}</StyledText>
            </View>
            <View style={styles.resumen}>
              <StyledText bold>IVA</StyledText>
              <StyledText bold>$ {to2Decimals(factura?.iva)}</StyledText>
            </View>
            <View style={styles.resumen}>
              <StyledText bold>Total</StyledText>
              <StyledText bold>
                $ {to2Decimals(factura?.subtotal + factura?.iva)}
              </StyledText>
            </View>
          </View>
          <StyledText>{pe}</StyledText>
          <Text style={[styles.cajaTitulo, { color: "#ffff" }]}>
            Lista Productos:{" "}
          </Text>
          <FlatList
            data={carrito}
            renderItem={({ item, index }) => {
              return (
                <PedidoCard
                  producto={item}
                  eliminar={eliminarProductoRefresh}
                  id={index}
                />
              );
            }}
            keyExtractor={(item, index) => {
              return index;
            }}
          />
          <View style={styles.cajaBotones}>
            <StyledButton
              title="Cancelar Pedido"
              big
              secondary
              style={{ width: 180 }}
            />
            <StyledButton title="Guardar" big primary style={{ width: 180 }} />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  subcontainer: {
    backgroundColor: "#fff",
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  cajaResumen: {
    marginVertical: 10,
  },
  cajaCuerpo: {
    flex: 6,
    // backgroundColor: 'red',
    //alignItems: 'center',
    justifyContent: "center",
  },
  itemProducto: {
    borderWidth: 1,
    flexDirection: "row",
  },
  cajaBotones: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 20,
  },
  cajaFinal: {
    justifyContent: "center",
    alignItems: "center",
    //backgroundColor: 'cyan',
    marginBottom: 10,
    position: "relative",
  },
  cajaTitulo: {
    backgroundColor: theme.colors.modernaYellow,
    height: 25,
    justifyContent: "center",
    paddingLeft: 10,
  },
  resumen: {
    flexDirection: "row",
    paddingHorizontal: 30,
    justifyContent: "space-between",
    marginVertical: 1,
  },
});
