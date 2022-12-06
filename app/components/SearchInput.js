import React from 'react'
import { Alert, StyleSheet , TextInput, TouchableHighlight, TouchableOpacity, View} from 'react-native'
import Icons from './Icons'
import StyledText from '../theme/StyledText'
import theme from '../theme/theme'


//Entre las props, la variable searchRef dene ser una referencia (hook useRef)
//si no se manda un placeHolder, se pondrá por defecto Buscar
//si no se manda un label, no se mostrara nada en la parte superior derecha
//onSubmit se ejecuta cuando se toca el botón o cuando se manda el texto del input
export default function SearhInput({label,placeHolder,searchRef,onSubmit,style}) {

    const submitSearch=()=>{
      if(onSubmit){
        onSubmit()
      }
    }
    return (
      <View style={style}>
        {label&&
          <View style={styles.label}><StyledText small color={theme.colors.inputcolor}>{label}</StyledText></View>
        }
        <TextInput style={styles.search} placeholder={placeHolder?placeHolder:'Buscar'}
          onChangeText={(e)=>{
            if(searchRef){
              searchRef.current=e?e:''
            }
          }}
          onSubmitEditing={submitSearch}
        />
        <TouchableOpacity style={styles.icon} onPress={submitSearch}>
          <Icons buscar/>
        </TouchableOpacity>
      </View>
    
  )
}

const styles=StyleSheet.create({
    nobackground:{
        backgroundColor:'transparent', 
    },
    search:{
        borderWidth:1,
        paddingVertical:10,
        paddingHorizontal:20,
        borderRadius:10,
        borderColor:theme.colors.inputcolor,
        width:300,
        marginBottom: 20
    },
    icon:{
      position:'absolute',
      right:4,
      marginTop:9
    },
    label:{
      zIndex:100,
      position:'absolute',
      backgroundColor:'white',
      top:-9,
      left:10,
    }
})
