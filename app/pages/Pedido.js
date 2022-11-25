import { View, Text, StyleSheet, Image } from "react-native";
import StyledInput from "../components/StyledInput";
import theme from "../theme/theme";
import { Input } from "@rneui/base";
import StyledText from "../theme/StyledText";
import SearhInput from "../components/SearchInput";
import { Button } from "@rneui/base";
import { useRef, useState } from "react";

export default function Pedido() {
    const busqueda=useRef();
    const producto=useRef();
    const cantidadproducto=useRef();
    const cantidadconfirmada=useRef();
    const precio=useRef();

    return (<View style={styles.container}>
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
            <SearhInput
                label=' Busqueda '
                searchRef={busqueda}
            />
            <StyledInput
                label=' Producto '
                textRef={producto}
            />
            <StyledInput
                label=' Cantidad de Producto '
                textRef={cantidadproducto}
            />
            <StyledInput
                label=' Cantidad Confirmada '
                textRef={cantidadconfirmada}
            />
            <StyledInput
                label=' Precio '
                textRef={precio}
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
        justifyContent: 'flex-start',
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
        top: -9,
        left: 10,
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
        paddingTop:25
    }
});
