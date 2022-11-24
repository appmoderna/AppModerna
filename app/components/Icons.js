import React from 'react'
import { StyleSheet,TouchableHighlight,TouchableWithoutFeedback,View } from 'react-native'
import { Icon } from '@rneui/base'

const deleteIcon={type:'ionicon',name:'log-in-outline'}
const searchIcon={type:'fontisto',name:'search'}
const checkIcon={type:'octicon',name:'check-circle-fill'}

const Icons =({eliminar,buscar,check,color,size,style})=>{
    let icon=deleteIcon
    if(eliminar){
        icon=deleteIcon
    }
    if(buscar){
        icon=searchIcon
    }
    if(check){
        icon=checkIcon
    }
    return (
        <Icon
            size={size?size:30}
            type={icon.type}
            name={icon.name}
            color={color?color:'black'}
            style={[style,styles.icon]}
        />
    )
}

const styles=StyleSheet.create({
    icon:{
        marginHorizontal:5,
    },
})


export default Icons