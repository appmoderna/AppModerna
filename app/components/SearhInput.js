import React from 'react'
import { StyleSheet , TouchableOpacity, View} from 'react-native'
import Icons from './Icons'
import theme from '../theme/theme'
import { Input } from '@rneui/base'
import StyledText from './StyledText'


//Entre las props, la variable searchRef dene ser una referencia (hook useRef)
//si no se manda un placeHolder, se pondrá por defecto Buscar
//si no se manda un label, no se mostrara nada en la parte superior derecha
//onSubmit se ejecuta cuando se toca el botón o cuando se manda el texto del input
export default function SearhInput({label,placeHolder,searchRef,onChangeText,onSubmit,style}) {

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
        <Input  placeholder={placeHolder?placeHolder:'Buscar'}
          onChangeText={(e)=>{
            if(searchRef){
              searchRef.current=e?e:''
            }
            if(onChangeText){
              onChangeText()
            }
          }}
          onSubmitEditing={submitSearch}
          inputContainerStyle={styles.search}
          rightIcon={
            <TouchableOpacity  onPress={submitSearch}>
              <Icons buscar/>
            </TouchableOpacity>
          }
        />
      </View>
    
  )
}

const styles=StyleSheet.create({
    nobackground:{
        backgroundColor:'transparent', 
    },
    search:{
        marginVertical:-5,
        borderWidth:1,
        paddingVertical:1,
        paddingLeft:15,
        borderRadius:10,
        borderColor:theme.colors.inputcolor
    },
    label:{
      zIndex:100,
      position:'absolute',
      backgroundColor:'white',
      top:-15,
      left:22,
    }
})

