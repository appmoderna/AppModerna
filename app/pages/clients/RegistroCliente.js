import { Input } from '@rneui/base'
import React, { useState } from 'react'
import { ScrollView } from 'react-native'
import { Alert } from 'react-native'
import { View,StyleSheet } from 'react-native'
import Header from '../../components/Header'
import StyledButton from '../../components/StyledButton'
import StyledInput from '../../components/StyledInput'
import StyledText from '../../components/StyledText'
import { registerClient } from '../../service/ClienteService'

export default function RegistroCliente({route,navigate}) {
  const cliente = route?.params?.cliente
  const [cedula, setCedula] = useState(cliente?cliente.cedula:'')
  const [errorCedula, setErrorCedula] = useState('')
  const [nombre, setNombre] = useState(cliente?cliente.nombre:'')
  const [errorNombre, setErrorNombre] = useState('')
  const [direccion, setDireccion] = useState(cliente?cliente.direccion:'')
  const [errorDireccion, setErrorDireccion] = useState('')
  const [telefono, setTelefono] = useState(cliente?cliente.telefono:'')
  const [errorTelefono, setErrorTelefono] = useState('')

  const validate=()=>{   
    if(!cedula ||cedula===''){
      setErrorCedula('Debe ingresar una cédula o RUC')
      return true
    }
    if(cedula.length !==10 && cedula.length!==13){
      setErrorCedula(`Longitud no válida. ${cedula.length<10?'¿Está olvidando un dígito?':''}`)
      return true
    }
    const digits=parseInt(cedula.slice(0,2))
    if(digits>24){
      setErrorCedula('Los dos primeros digitos no pueden ser mayores a 24')
      return true
    }
    if(!nombre || nombre===''){
      setErrorNombre('Debe ingresar el nombre del cliente')
      return true
    }
    if(nombre.length>40){
      setErrorNombre('Este campo no puede tener más de 40 caracteres')
      return true
    }
    if(!direccion || direccion===''){
      setErrorDireccion('Debe ingresar la dirección del cliente')
      return true
    }
    if(direccion.length>40){
      setErrorDireccion('Este campo no puede tener más de 80 caracteres')
      return true
    }
    if(!telefono || telefono===''){
      setErrorTelefono('Debe ingresar el teléfono del cliente')
      return true
    }
    if(telefono.length>10){
      setErrorTelefono('Este campo no puede tener más de 10 caracteres')
      return true
    }
    if(telefono.length<9){
      setErrorTelefono('Este campo no puede tener menos de 9 caracteres')
      return true
    }
    const telfdigits=telefono.slice(0,2)
    if(telefono.length===10 && telfdigits!=='09'){
      setErrorTelefono('Teléfonos celulares deben iniciar con 09')
      return true
    }
    if(telefono.length===9 && false){
      setErrorTelefono('Teléfonos convencionales deben tener el código de su provincia')
      return true
    }
    return false
  }

  const register=async()=>{
    if(validate()){
      return
    }
    const cliente={
      nombre:nombre,
      apellido:nombre,
      dni:cedula,
      direccion:direccion,
      sincronizado:false,
    }
    console.log(cliente)
    await registerClient(cliente)
    Alert.alert('Registrado','El usuario '+nombre+" ha sido registrado")
  }
  return (
    <ScrollView style={styles.container}>
      <View style={styles.title}>
        <StyledText heading center bold>REGISTRO</StyledText>
      </View>
        <View style={styles.inputgroup}>
          <StyledInput value={cedula} onChangeText={setCedula} label={'Cédula o RUC'} numeric
          errorMessage={errorCedula}  />
          <StyledInput value={nombre} 
          onChangeText={setNombre} label={'Apellidos y Nombres'} mayus
          errorMessage={errorNombre} />
          <StyledInput value={direccion} onChangeText={(e)=>setDireccion(e.toUpperCase())}  label={'Dirección'} mayus
          errorMessage={errorDireccion} />
          <StyledInput value={telefono} onChangeText={setTelefono} label={'Teléfono'} numeric
          errorMessage={errorTelefono}/>
        </View>
        <View style={styles.buttongroup}>
          <StyledButton title='Guardar' onPress={register} secondary/>
        </View>
    </ScrollView>    
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal:2
  },
  title:{
    marginVertical:10,
  },
  inputgroup:{
    paddingHorizontal:10,
    justifyContent:'center',
    marginVertical:30,
  },
  buttongroup:{
    paddingHorizontal:100,
  }
});