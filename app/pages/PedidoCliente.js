import { View, Text, StyleSheet, Image, TextInput, Dimensions } from "react-native";
import StyledInput from "../components/StyledInput";
import theme from "../theme/theme";
import StyledText from "../theme/StyledText";
import SearhInput from "../components/SearchInput";
import { Button, Icon } from "@rneui/base";
import { useRef, useState } from "react";
import { agregarproducto } from "./ProductoItem";
import { HelperText, Searchbar, TextInput as PaperInput } from 'react-native-paper';
import { emailValidation } from "../commons/validation";
import { SelectList } from "react-native-dropdown-select-list";
import SelectDropdown from 'react-native-select-dropdown'
import DropDownPicker from 'react-native-dropdown-picker';
import { CustomPicker } from 'react-native-custom-picker'
// https://hossein-zare.github.io/react-native-dropdown-picker-website/docs/advanced/icons

export default function Pedido({ navigation }) {
    const [busqueda, setBusqueda] = useState();
    const [producto, setProducto] = useState("");
    const [cantidadproducto, setCantidadProducto] = useState(0);
    const [cantidadconfirmada, setCantidadConfirmada] = useState(0);
    const [precio, setPrecio] = useState(0);
    const [preciototal, setPrecioTotal] = useState("");
    //let hasErrors=false;
    const [errorproducto, setErrorProducto] = useState('');
    const [selected, setSelected] = useState([]);
    const [productoslist, setProductosList] = useState([]);
    // Prueba de dropdown

    const [open, setOpen] = useState(false);
    const [items, setItems] = useState([
        { producto: 'Apple', value: 'apple' },
        { producto: 'Banana', value: 'banana' }
    ]);

    //-----------------------
    const agregar = () => {
        agregarproducto({
            avatar_url: 'https://modernaalimentos.com.ec/wp-content/uploads/2022/01/moderna-alimentos-productos-comercializados-bizcochox.jpg',
            producto: selected,
            cantidadProducto: cantidadproducto,
            cantidadConfirmada: cantidadconfirmada,
            precio: precio,
            preciototal: preciototal
        });
        navigation.navigate('CarritoClientes');
    }

    const validate = () => {
        if (producto == '' || producto == null) {
            setErrorProducto('Debe introducir un')
        }
    }

    const hasErrors = () => {
        // setErrorProducto('Excedes los caracteres permitidos')
        // if (producto.length > 10) {
        //     console.log("Se sobrepaso")
        //  }
        return producto.length > 10
    };
    const [productos, setProductos] = useState([
        { label: items[0].producto, value: items[0].value, precio: '2.50' },
        { label: items[1].producto, value: items[1].value, precio: '2.50' },
        { label: 'Harina', value: 'aaaaa', precio: '2.50' },
        { label: 'Pan', value: 'Pan', precio: '2.50' },
        { label: 'asdasf', value: 'asdasf', precio: '2.50' },
        { label: 'gasdas', value: 'gasdas', precio: '2.50' },
        { label: 'qwerqw', value: 'qwerqw', precio: '2.50' },
        { label: 'agasgv', value: 'agasgv', precio: '2.50' },
        { label: '12eqwe', value: '12eqwe', precio: '2.50' },
        { label: 'hasdg', value: 'hasdg', precio: '2.50' },


    ]);

    return (
        <View style={styles.container}>
            <View style={styles.cajaCabecera}>
                <Image source={require('../../assets/moderna/Logotipo-original.png')}
                    style={{ width: 310, height: 100 }} />
                <StyledText heading modernaPrimary >Pedido</StyledText>
                <Text style={styles.txtinput}>
                    Mosquera Vizuete Santiago Fernando
                    0123456789
                </Text>
            </View>
            <View style={styles.cajaCuerpo}>
                {/*Prueba*/}
                {/* <Text>{selected}</Text> */}
                <DropDownPicker
                    open={open}
                    value={selected}
                    items={productos}
                    setOpen={setOpen}
                    setValue={setSelected}
                    setItems={setProductos}
                    searchable={true}
                    key={(index) => {
                        return index
                    }}
                    placeholder=" Busqueda"
                    searchPlaceholder="Busque un producto"


                    //style={{width:Dimensions.get("window").width - 80}}
                    containerStyle={{ width: Dimensions.get("window").width - 60, marginBottom: 10 }}
                    // searchContainerStyle={{borderRadius:5}}
                    searchTextInputStyle={{ width: 35 }}
                // ArrowDownIconComponent={({style}) => <Icon name="search" style={{paddingHorizontal:5}} />}

                />


                {/* <View style={styles.label}><StyledText small color={theme.colors.inputcolor}> Buscar </StyledText></View> */}

                {/* <SelectDropdown
                    data={productos}
                    // defaultValueByIndex={1}
                    // defaultValue={'England'}
                    onSelect={(selectedItem, index) => {
                        console.log(selectedItem, index);

                    }}
                    defaultButtonText={'Buscar'}
                    buttonTextAfterSelection={(selectedItem, index) => {
                        setSelected(selectedItem.producto)
                        return selectedItem.producto;
                    }}
                    rowTextForSelection={(item, index) => {
                        //setSelected(item.producto)
                        return item.producto;
                    }}
                    buttonStyle={{ width: Dimensions.get("window").width - 80, borderRadius: 5, borderWidth: 1, backgroundColor: 'white' }}
                    // buttonTextStyle={{backgroundColor:'cyan'}}
                    renderDropdownIcon={isOpened => {
                        return <Icon name={isOpened ? 'chevron-up' : 'chevron-down'} type='font-awesome' color={'black'} size={18} />;
                    }}
                    dropdownIconPosition={'right'}
                    dropdownStyle={{
                        borderBottomLeftRadius: 5,
                        borderBottomRightRadius: 5,
                        borderWidth: 1,
                        position: 'relative',
                        bottom: 15

                        // marginLeft: 11,
                    }}
                    //  rowStyle={{backgroundColor:'black',paddingBottom:10}}
                    // rowTextStyle={{backgroundColor:'black'}} estilo de los items dentro
                    // selectedRowStyle={{backgroundColor:'black'}}
                    search
                    searchInputStyle={{ marginBottom: 15 }}
                    searchPlaceHolder={'Buscar Producto'}
                    searchPlaceHolderColor={'black'}
                    renderSearchInputLeftIcon={() => {
                        return <Icon name={'search'} color={'black '} size={18} />;

                    }}

                /> */}

                <PaperInput
                    editable={false}
                    label="Producto"
                    value={selected}
                    placeholder='Ingresa el producto'
                    //maxLength={20}
                    onChangeText={text => {
                        if (text.length > 20) {
                            // console.log("--------------email valido")
                            setErrorProducto('Exceso de caracteres')
                        } else {
                            // console.log("--------------email invalido")
                            // setErrorProducto('Correo valido')
                        }

                        let textUpper = text.toUpperCase();
                        setProducto(textUpper);

                    }}
                    mode="outlined"
                    autoCapitalize='characters'
                    style={{ maxHeight: 80, width: Dimensions.get("window").width - 80 }}
                    outlineColor="orange"

                //activeOutlineColor="red"
                />

                <PaperInput
                    label="Cantidad Producto"
                    value={cantidadproducto}
                    placeholder='Ingresa la cantidad'
                    onChangeText={text => {
                        setCantidadProducto(text);
                    }}
                    keyboardType="numeric"
                    mode="outlined"
                    autoCapitalize='characters'
                    style={{ maxHeight: 80, width: Dimensions.get("window").width - 80 }}
                    maxLength={3}
                // outlineColor="red"
                //activeOutlineColor="red"
                />

                <PaperInput
                    label="Cantidad Confirmada"
                    value={cantidadconfirmada}
                    placeholder='Confirma la cantidad'
                    onChangeText={text => {
                        setCantidadConfirmada(text);
                        cantidadconfirmada
                    }}
                    keyboardType="numeric"
                    mode="outlined"
                    autoCapitalize='characters'
                    style={{ maxHeight: 80, width: Dimensions.get("window").width - 80 }}
                    maxLength={3}
                />

                <PaperInput
                    label="Precio Unitario"
                    value={precio}
                    placeholder='Ingresa el precio'
                    onChangeText={text => {
                        setPrecio(text);
                        let totalPrecio;
                        totalPrecio = parseFloat(text) * parseInt(cantidadproducto);

                        setPrecioTotal(totalPrecio.toString());
                        // console.log('valor:',preciototal, 'cantidad: ', cantidadproducto, 'precio', precio)

                    }}
                    keyboardType="numeric"
                    mode="outlined"
                    autoCapitalize='characters'
                    style={{ maxHeight: 80, width: Dimensions.get("window").width - 80 }}
                    maxLength={5}
                />

                <PaperInput
                    editable={false}
                    label="Precio Total"
                    value={preciototal}
                    placeholder='Total'
                    onChangeText={setPrecioTotal}
                  //  keyboardType="numeric"
                    mode="outlined"
                    autoCapitalize='characters'
                    style={{ maxHeight: 80, width: Dimensions.get("window").width - 80 }}
                    maxLength={5}
                    outlineColor="orange"

                />


                <View style={styles.cajaBotones}>
                    <Button title=' Eliminar Cliente '
                        buttonStyle={{
                            borderRadius: 5,
                            marginHorizontal: 10,
                            backgroundColor: theme.colors.modernaRed
                        }}
                        size="lg" />

                    <Button title=' Agregar Carrito '
                        buttonStyle={{
                            borderRadius: 5,
                            marginHorizontal: 10,
                            backgroundColor: theme.colors.modernaYellow
                        }}
                        onPress={agregar}
                        size="lg" />
                </View>

            </View>
        </View>)
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        //alignItems: 'center',
        justifyContent: 'center',
    },
    cajaCabecera: {
        flex: 2,
        // backgroundColor: 'cyan',
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingBottom: 15
    },
    cajaCuerpo: {
        flex: 4,
        //backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    caja: {
        paddingBottom: 10
    },
    txtinput: {
        borderWidth: 1,
        paddingVertical: 15,
        paddingHorizontal: 15,
        borderRadius: 10,
        borderColor: 'gray',
        width: 270,
        height: 60,
        textAlign: 'center',
        marginTop: 10
    },
    label: {
        zIndex: 100,
        position: 'absolute',
        backgroundColor: 'white',
        top: -8,
        left: 40,
        marginLeft: 11,
    },
    botonStyle: {
        borderRadius: 5,
        marginHorizontal: 10
    },
    cajaBotones: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 25
    }
});
