import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  ScrollView,
} from "react-native";
import StyledText from "../../theme/StyledText";
import { Card, Title, Paragraph, List } from "react-native-paper";
import { ListItem, Avatar, Button, Icon } from "@rneui/base";
import theme from "../../theme/theme";
import { useState } from "react";
import { calcularFactura, traerproductos } from "../../services/ProductoItem";
import PedidoCard from "./PedidoCard";

export default function PedidoResumen() {
  const [factura, setFactura] = useState();
  const [carrito, setCarrito] = useState([]);
  const cargarCarrito = () => {
    setCarrito(traerproductos());
    setFactura(calcularFactura());
  };

  useState(() => {
    cargarCarrito();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.cajaCabecera}>
        <StyledText heading>RESUMEN DE PEDIDO</StyledText>
      </View>
      <View style={styles.cajaCuerpo}>
        {/* ______________________________________________________________________________________________ */}
        <Text
          style={{
            color: theme.colors.modernaRed,
            fontWeight: "bold",
            fontSize: 25,
          }}
        >
          $ 13.52
        </Text>
        <View style={styles.cajaTitulo}>
          <Text style={{ color: "#ffff" }}>Resumen: </Text>
        </View>
        <View style={styles.cajaFinal}>
          <Text>Subtotal: {factura?.subtotal} </Text>
          <Text>IVA : {factura?.iva} </Text>
          <Text>Total : {factura?.subtotal + factura?.iva}</Text>
        </View>

        <View style={styles.cajaTitulo}>
          <Text style={{ color: "#ffff" }}>Lista Productos: </Text>
        </View>

        {/* ______________________________________________________________________________________________ */}

        <FlatList
          data={carrito}
          renderItem={({ item }) => {
            return <PedidoCard producto={item} />;
          }}
          keyExtractor={(item) => {
            return item.producto;
          }}
          style={{ height: 110 }}
        />
        <View style={styles.cajaBotones}>
          <Button
            title=" Cancelar Pedido "
            buttonStyle={{
              borderRadius: 5,
              marginHorizontal: 10,
              backgroundColor: theme.colors.modernaRed,
            }}
            size="lg"
          />

          <Button
            title="Guardar"
            buttonStyle={{
              width: 180,
              borderRadius: 5,
              marginHorizontal: 10,
              backgroundColor: theme.colors.modernaYellow,
            }}
            size="lg"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    //alignItems: 'center',
    justifyContent: "center",
  },
  cajaCabecera: {
    flex: 2,
    // backgroundColor: 'cyan',
    alignItems: "center",
    justifyContent: "flex-end",
    paddingBottom: 25,
  },
  cajaCuerpo: {
    flex: 6,
    // backgroundColor: 'red',
    //alignItems: 'center',
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  itemProducto: {
    borderWidth: 1,
    flexDirection: "row",
  },
  cajaBotones: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 25,
    paddingBottom: 25,
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
});
