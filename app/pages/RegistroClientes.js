import React from 'react'
import { View, StyleSheet, Text, Image } from 'react-native'
import StyledText from '../theme/StyledText';
import theme from '../theme/theme'
import { Input } from '@rneui/base'

export default function RegistroClientes() {
    return (
        <View style={styles.container}>
            <View style={styles.cajaCabecera}>
                <Image source={require('../../assets/moderna/Logotipo-original.png')}
                    style={{ width: 310, height: 100 }} />
            </View>
            <View style={styles.cajaCuerpo}>
                <Text>Formulario</Text>
                <View style={styles.caja}>
                    <View style={styles.label}><StyledText small color={theme.colors.inputcolor}> Cedula o RUC </StyledText></View>
                    <Input        
                         inputContainerStyle={styles.txtinput}

                    />
                </View>
                <View style={styles.caja}>
                    <View style={styles.label}><StyledText small color={theme.colors.inputcolor}> Apellidos y Nombres </StyledText></View>
                    <Input        
                         inputContainerStyle={styles.txtinput}
                         
                    />
                </View>
                <View style={styles.caja}>
                    <View style={styles.label}><StyledText small color={theme.colors.inputcolor}> Direccion </StyledText></View>
                    <Input        
                         inputContainerStyle={styles.txtinput}
                         
                    />
                </View>
                <View style={styles.caja}>
                    <View style={styles.label}><StyledText small color={theme.colors.inputcolor}> Telefono </StyledText></View>
                    <Input        
                         inputContainerStyle={styles.txtinput}
                         
                    />
                </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffff',
        //alignItems: 'center',
        justifyContent: 'center',
    },
    cajaCabecera: {
        flex: 1,
        backgroundColor: 'cyan',
        alignItems: 'center',
        justifyContent: 'center',
    },
    cajaCuerpo: {
        flex: 2,
       // backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
    },
     caja: {
        paddingBottom: 10
    },
    txtinput: {
        borderWidth: 1,
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 10,
        borderColor: 'gray',
        width: 310,
        height: 50
    },   
    label: {
        zIndex: 100,
        position: 'absolute',
        backgroundColor: 'white',
        top: -9,
        left: 10,
        marginLeft: 11,
    }
});
