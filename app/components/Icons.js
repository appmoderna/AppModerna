import React from 'react'
import { StyleSheet} from 'react-native'
import { Icon } from '@rneui/base'

const deleteIcon={type:'ionicon',name:'log-in-outline'}
const searchIcon={type:'fontisto',name:'search'}
const checkIcon={type:'octicon',name:'check-circle-fill'}
const passwordIcon={type:'antdesign',name:'eye'}
const backIcon={type:'ionicon',name:'arrow-back-circle-sharp'}
const Icons =({eliminar,buscar,check,color,size,style,password,back})=>{
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
    if(password){
        icon=passwordIcon
    }
    if(back){
        icon=backIcon
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