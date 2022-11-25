import { Input } from '@rneui/base'
import React from 'react'
import { StyleSheet , View} from 'react-native'
import StyledText from './StyledText'
import theme from '../theme/theme'
import Icons from './Icons'


//Entre las props, la variable searchRef dene ser una referencia (hook useRef)
//si no se manda un placeHolder, se pondrá por defecto Buscar
//si no se manda un label, no se mostrara nada en la parte superior derecha
//onSubmit se ejecuta cuando se toca el botón o cuando se manda el texto del input
//para hacer uso del mensaje de error, enviar un estado del mismo en la prop errorMessage y el setState en setErrorMessage para limpiar cuando se edita
export default function StyledInput({label,mayus,value,placeHolder,onChangeText,style,icon,password,errorMessage,numeric,email}) {
    return (
      <View style={style}>
        {label&&
          <View style={styles.label}><StyledText small color={theme.colors.inputcolor}>{label}</StyledText></View>
        }
        <Input  
          value={value}
          placeholder={placeHolder?placeHolder:'Escribe aquí'}
          errorMessage={errorMessage?errorMessage:''}
          onChangeText={(e)=>{
            if(mayus){
              e=e.toUpperCase()
            }
            onChangeText(e)
          }}
          keyboardType={numeric?'number-pad':email?'email-address':'default'}
          inputContainerStyle={styles.container}
          rightIcon={password?
            <Icons password/>:
            icon&&
            <View>
              {icon}
            </View>
          }
          errorStyle={styles.error}
          secureTextEntry={password}
        />
      </View>
  )
}

const styles=StyleSheet.create({
  nobackground:{
    backgroundColor:'transparent', 
  },
  container:{
      borderWidth:1,
      paddingVertical:5,
      paddingLeft:15,
      paddingRight:10,
      borderRadius:10,
      borderColor:theme.colors.inputcolor,
  },
  label:{
    zIndex:100,
    position:'absolute',
    backgroundColor:'white',
    bottom:76,
    left:22,
  },
  error:{
    top:-7,
    marginBottom:10,
  }
})

