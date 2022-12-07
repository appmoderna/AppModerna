import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  Dimensions,
  ScrollView,
} from "react-native";
import StyledInput from "../../components/StyledInput";
import theme from "../../theme/theme";
import SearhInput from "../../components/SearchInput";
import { Button, Icon } from "@rneui/base";
import { useEffect, useRef, useState } from "react";
import { agregarproducto } from "../../services/ProductoItem";
import { HelperText, Searchbar } from "react-native-paper";
import { emailValidation } from "../../commons/validation";
import DropDownPicker from "react-native-dropdown-picker";
import Header from "../../components/Header";
import ClienteCabecera from "../../components/ClienteCabecera";
import StyledText from "../../components/StyledText";
// https://hossein-zare.github.io/react-native-dropdown-picker-website/docs/advanced/icons

export default function PedidoCliente({ navigation, route }) {
  const cliente = route?.params?.cliente;
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);
  const [busqueda, setBusqueda] = useState();
  const [producto, setProducto] = useState("");
  const [cantidadproducto, setCantidadProducto] = useState(0);
  const [errorCantidadProducto, setErrorCantidadProducto] = useState("");
  const [cantidadconfirmada, setCantidadConfirmada] = useState(0);
  const [preciototal, setPrecioTotal] = useState("");
  //let hasErrors=false;
  const [errorproducto, setErrorProducto] = useState("");
  const [productoslist, setProductosList] = useState([]);
  // Prueba de dropdown

  const [open, setOpen] = useState(false);
  const [items, setItems] = useState([
    { producto: "Apple", value: "apple" },
    { producto: "Banana", value: "banana" },
  ]);

  //-----------------------
  const agregar = () => {
    agregarproducto({
      producto: productoSeleccionado,
      cantidad: cantidadproducto,
    });
    navigation?.navigate("PedidoResumen");
  };

  const validate = () => {
    if (producto == "" || producto == null) {
      setErrorProducto("Debe introducir un");
    }
  };
  useEffect(() => {
    console.log("producto seleccionado: " + productoSeleccionado);
  }, [productoSeleccionado]);

  const hasErrors = () => {
    // setErrorProducto('Excedes los caracteres permitidos')
    // if (producto.length > 10) {
    //     console.log("Se sobrepaso")
    //  }
    return producto.length > 10;
  };

  const [productos, setProductos] = useState([
    {
      label: "Harina",
      value: { nombre: "Harina", precio: 2.5, stock: 20 },
      key: 1,
    },
    {
      label: "Pan",
      value: { nombre: "Pan", precio: 1.5, stock: 100 },
      key: 2,
    },
    {
      label: "Polvo de Hornear",
      value: { nombre: "Polvo de Hornear", precio: 0.5, stock: 120 },
      key: 3,
    },
  ]);

  return (
    <View style={styles.container}>
      <StyledText heading bold>
        PEDIDO
      </StyledText>
      <ClienteCabecera cliente={cliente} />
      <DropDownPicker
        open={open}
        value={productoSeleccionado}
        items={productos}
        setOpen={setOpen}
        setValue={setProductoSeleccionado}
        setItems={setProductos}
        searchable={true}
        key={(index) => {
          return index;
        }}
        placeholder=" Busqueda"
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
      <ScrollView>
        <View style={styles.inputGroup}>
          <StyledInput
            noeditable
            label="Producto"
            value={productoSeleccionado?.nombre}
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
            value={productoSeleccionado && "" + productoSeleccionado?.stock}
            placeholder="Confirma la cantidad"
            style={styles.input}
          />

          <StyledInput
            noeditable
            label="Precio Unitario"
            value={
              productoSeleccionado?.precio && "" + productoSeleccionado?.precio
            }
            placeholder="Ingresa el precio"
            style={styles.input}
          />

          <StyledInput
            noeditable
            label="Precio Total"
            value={
              productoSeleccionado && cantidadproducto
                ? "" + cantidadproducto * productoSeleccionado?.precio
                : ""
            }
            placeholder="Total"
            onChangeText={setPrecioTotal}
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
    alignItems: "center",
    justifyContent: "flex-end",
    paddingBottom: 15,
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
    width: Dimensions.get("window").width - 80,
    marginVertical: 3,
  },
});
