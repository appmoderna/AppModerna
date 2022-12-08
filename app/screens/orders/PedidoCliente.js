import { View, StyleSheet, Dimensions, ScrollView } from "react-native";
import StyledInput from "../../components/StyledInput";
import theme from "../../theme/theme";
import StyledText from "../../components/StyledText";
import { Button, Icon } from "@rneui/base";
import { useEffect, useRef, useState } from "react";
import { HelperText, Searchbar } from "react-native-paper";
import DropDownPicker from "react-native-dropdown-picker";
import ClienteCabecera from "../../components/ClienteCabecera";
import {
  consultarProductos,
  getProductoById,
} from "../../services/ProductoService";
import { addDetallePedido } from "../../services/CarritoService";
import { getStockById } from "../../services/StockService";

export default function PedidoCliente({ navigation, route }) {
  const cliente = route?.params?.cliente;

  const [idProductoSeleccionado, setIdProductoSeleccionado] = useState();
  const [productoSeleccionado, setProductoSeleccionado] = useState();
  const [stock, setStock] = useState(null);
  // const [busqueda, setBusqueda] = useState();
  const [errorbusqueda, setErrorbusqueda] = useState("");
  const [error, setError] = useState(false);

  const [cantidadproducto, setCantidadProducto] = useState(0);
  const [errorCantidadProducto, setErrorCantidadProducto] = useState("");

  const [productoLista, setProductoLista] = useState();

  const obtenerProductos = () => {
    const response = consultarProductos(null);
    let lista = [];
    if (response) {
      response.forEach((elemento) => {
        lista.push({ label: elemento.descripcion, value: elemento.idSap });
      });
    }
    console.log(lista);
    setProductoLista(lista);
  };
  useState(() => {
    obtenerProductos();
  }, []);

  const cargarInformacion = () => {
    const response = getProductoById(idProductoSeleccionado);
    setProductoSeleccionado(response);
    const requestStock = getStockById(idProductoSeleccionado);
    setStock(requestStock);
  };

  const [open, setOpen] = useState(false);
  // const validate = () => {
  //   if (cantidadproducto=="" || cantidadproducto==null) {
  //     setError(true);

  //     setErrorCantidadProducto("Ingrese un cantidad")
  //     return true;
  //   }

  //   if(productoSeleccionado==null){
  //     setErrorbusqueda("Escoja un producto");
  //     return true;
  //   }

  //   return false;
  // };

  //-----------------------
  const agregar = () => {
    // if(validate()){
    //   return;
    // }
    addDetallePedido(productoSeleccionado, cantidadproducto);
    setIdProductoSeleccionado(null);
    navigation?.navigate("PedidoResumen");
  };

  return (
    <View style={styles.container}>
      <StyledText heading bold>
        PEDIDO
      </StyledText>
      <ClienteCabecera cliente={cliente} />
      <DropDownPicker
        open={open}
        value={idProductoSeleccionado}
        items={productoLista}
        setOpen={setOpen}
        setValue={setIdProductoSeleccionado}
        setItems={setProductoLista}
        searchable={true}
        placeholder=" Busqueda"
        onChangeValue={cargarInformacion}
        searchPlaceholder="Busque un producto"
        //style={{width:Dimensions.get("window").width - 80}}
        containerStyle={{
          width: Dimensions.get("window").width - 60,
          marginBottom: 10,
        }}
        // searchContainerStyle={{borderRadius:5}}
        searchTextInputStyle={{ width: 35 }}

        // ArrowDownIconComponent={({style}) => <Icon name="search" style={{paddingHorizontal:5}} />}
      />
      <HelperText
        type="error"
        style={{ marginTop: -5, marginBottom: 5 }}
        visible={error}
      >
        {errorbusqueda}
      </HelperText>
      <ScrollView>
        <View style={styles.inputGroup}>
          <StyledInput
            noeditable
            label="Producto"
            value={productoSeleccionado?.descripcion}
            placeholder="Ingresa el producto"
            style={styles.input}
          />

          <StyledInput
            numeric
            label="Cantidad Producto"
            value={cantidadproducto}
            placeholder="Ingresa la cantidad"
            onChangeText={setCantidadProducto}
            style={styles.input}
            max_length={3}
            errorMessage={errorCantidadProducto}
          />

          <StyledInput
            noeditable
            label="Cantidad Confirmada"
            value={
              productoSeleccionado
                ? stock
                  ? stock.cantidad + ""
                  : "Sin stock"
                : null
            }
            placeholder="Confirma la cantidad"
            style={styles.input}
          />

          <StyledInput
            noeditable
            label="Precio Unitario"
            value={
              productoSeleccionado?.precioVenta &&
              "" + productoSeleccionado?.precioVenta
            }
            placeholder="Ingresa el precio"
            style={styles.input}
          />

          <StyledInput
            noeditable
            label="Precio Total"
            value={
              productoSeleccionado && cantidadproducto
                ? "" + cantidadproducto * productoSeleccionado?.precioVenta
                : ""
            }
            placeholder="Total"
            style={styles.input}
          />
        </View>
        <View style={styles.cajaBotones}>
          <Button
            title=" Eliminar Cliente "
            buttonStyle={{
              borderRadius: 5,
              marginHorizontal: 10,
              backgroundColor: theme.colors.modernaRed,
            }}
            size="lg"
          />

          <Button
            title=" Agregar Carrito "
            buttonStyle={{
              borderRadius: 5,
              marginHorizontal: 10,
              backgroundColor: theme.colors.modernaYellow,
            }}
            onPress={agregar}
            size="lg"
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    //alignItems: 'center',
    alignItems: "center",
  },
  cajaCabecera: {
    flex: 2,
    // backgroundColor: 'cyan',
    //alignItems: "center",
    //justifyContent: "flex-end",
    //paddingBottom: 15,
  },
  txtinput: {
    borderWidth: 1,
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderRadius: 10,
    borderColor: "gray",
    width: 270,
    height: 60,
    textAlign: "center",
    marginTop: 10,
  },
  label: {
    zIndex: 100,
    position: "absolute",
    backgroundColor: "white",
    top: -8,
    left: 40,
    marginLeft: 11,
  },
  botonStyle: {
    borderRadius: 5,
    marginHorizontal: 10,
  },
  cajaBotones: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 25,
  },
  input: {
    maxHeight: 80,
    //width: Dimensions.get("window").width - 80,
    // marginVertical: 3,
  },
});
