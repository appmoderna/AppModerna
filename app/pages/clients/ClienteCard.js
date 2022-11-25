import React from 'react'
import { StyleSheet, View , Alert, TouchableOpacity} from 'react-native'
import Icons from '../../components/Icons'
import StyledText from '../../components/StyledText'
import theme from '../../theme/theme'

export default function ClienteCard({cliente,navigation}) {
    const sincronizar=()=>{
        Alert.alert('Imagina una función de sincronizar')
    }

    const navegarConParametro=(screenName)=>{
        if(!navigation){
            return
        }
        navigation.navigate(screenName,{cliente})
    }
    const detalleCliente=()=>{
        navegarConParametro('ResumenPedidos')
    }
    const editarCliente=()=>{
        navegarConParametro('RegistroCliente')
    }
  return (
    <View  style={styles.card}>
        <TouchableOpacity onPress={detalleCliente}>
            <View style={styles.horizontal}>
                <View style={styles.information}>
                    <StyledText softbold>{cliente.nombre}</StyledText>
                    <StyledText >{cliente.apellido}</StyledText>
                    <StyledText light>{cliente.dni}</StyledText>

                </View>
                <View style={styles.buttons}>
                    <TouchableOpacity onPress={sincronizar}>
                    <Icons check 
                    color={cliente.sincronizado?theme.colors.active:theme.colors.inactive}/></TouchableOpacity>
                    <TouchableOpacity onPress={editarCliente}>
                    <Icons edit 
                    color={theme.colors.modernaYellow}/></TouchableOpacity>
                     <TouchableOpacity>
                    <Icons delete 
                    color={theme.colors.modernaRed}/></TouchableOpacity>
                </View>
            </View>
        </TouchableOpacity>
    </View>
  )
}
const styles=StyleSheet.create({
    card:{
        paddingVertical:5,
        paddingHorizontal:8,
        borderWidth:2,
        borderRadius:10,
        marginVertical:3,
    },
    horizontal:{
        flexDirection:'row',
        justifyContent:'space-between',
    },
    buttons:{
        flex:3,
        justifyContent:'center',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    information:{
        flex:6,
    }
})
