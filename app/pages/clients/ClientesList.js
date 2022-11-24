import React, { useEffect, useRef, useState } from 'react'
import { FlatList, View,StyleSheet } from 'react-native'
import SearhInput from '../../components/SearhInput'
import { getClients,searchClients } from '../../service/ClienteService'
import StyledText from '../../theme/StyledText'
import ClienteCard from './ClienteCard'

const MINIMUN_ELEMENTS_FOR_SEARCH=4

export default function ClientesList() {
  const [clientes, setClientes] = useState([])
  
  const searchRef=useRef('')

  const buscarClientes =async ()=>{
    const response=await searchClients(searchRef.current)
    setClientes(response)
  }

  useEffect(()=>{
    buscarClientes()
  },[searchRef.current])

  return (
    <View style={styles.container}>
        <StyledText heading center bold modernaPrimary style={styles.margin20}>CLIENTES</StyledText>
        {
          (MINIMUN_ELEMENTS_FOR_SEARCH<clientes.length || searchRef.current!=='') &&     
          <SearhInput searchRef={searchRef} label='Busqueda'/>
        }
        <FlatList data={clientes}
          renderItem={({item})=>{
          return <ClienteCard cliente={item}/>
        }} style={styles.list}/>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal:15,
  },
  list:{
    marginHorizontal:10,
    marginTop:10,
  },
  margin20:{
    marginBottom:20,
    marginTop:5,
  }
});