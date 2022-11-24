import { ListItem } from '@rneui/base'
import React from 'react'
import { TouchableHighlight,StyleSheet, View ,Text, Alert, TouchableNativeFeedback, TouchableOpacity} from 'react-native'
import Icons, { deleteIcon } from '../../components/Icons'
import StyledText from '../../theme/StyledText'
import theme from '../../theme/theme'

export default function ClienteCard({cliente}) {
    const sincronizar=()=>{
        Alert.alert('Imagina una función de sincronizar')
    }
  return (
    <View  style={styles.card}>
        <TouchableOpacity onPress={()=>{Alert.alert('Pantalla de información del cliente')}}>
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
        flex:1,
        justifyContent:'center',
    },
    information:{
        flex:4,
    }
})
