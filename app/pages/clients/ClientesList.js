import { Input } from '@rneui/base'
import React, { useEffect, useRef, useState } from 'react'
import { FlatList, View,StyleSheet } from 'react-native'
import Icons from '../../components/Icons'
import SearhInput from '../../components/SearhInput'
import StyledInput from '../../components/StyledInput'
import { searchClients } from '../../service/ClienteService'
import StyledText from '../../components/StyledText'
import ClienteCard from './ClienteCard'
import StyledButton from '../../components/StyledButton'

const MINIMUN_ELEMENTS_FOR_SEARCH=4

export default function ClientesList() {
  const [clientes, setClientes] = useState([])
  
  const searchRef=useRef('')

  const buscarClientes =async ()=>{
    const response=await searchClients(searchRef.current)
    setClientes(response)
  }

  useEffect(()=>{
    console.log('useref: '+searchRef.current)
    buscarClientes()
  },[searchRef])

  return (
    <View style={styles.container}>
        <StyledText heading center bold modernaPrimary style={styles.margin20}>CLIENTES</StyledText>
        {
          (MINIMUN_ELEMENTS_FOR_SEARCH<clientes.length || searchRef.current!=='') &&     
          <SearhInput searchRef={searchRef} label='Busqueda' onSubmit={buscarClientes}/>
        }
      {(!clientes || clientes.length===0)?
        <View style={styles.container}>
          <StyledText center title bold>{searchRef.current!==''?'No hay resultados':'No hay clientes'}</StyledText>
        </View>
      :
        <FlatList data={clientes}
          renderItem={({item})=>{
          return <ClienteCard cliente={item}/>
        }} style={styles.list}/>
      }
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal:2
  },
  list:{
    marginHorizontal:10,
    paddingHorizontal:15,
  },
  margin20:{
    marginBottom:20,
    marginTop:5,
  }
});