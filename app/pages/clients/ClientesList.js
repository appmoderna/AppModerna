import { FAB, Input } from '@rneui/base'
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

export default function ClientesList({navigation}) {
  const [clientes, setClientes] = useState([])
  const [search, setSearch] = useState('')

  const buscarClientes =async ()=>{
    const response=await searchClients(search)
    setClientes(response)
  }

  useEffect(()=>{
    buscarClientes()
  },[search])

  return (
    <View style={styles.container}>
        <StyledText heading center bold modernaPrimary style={styles.margin20}>CLIENTES</StyledText>
        {
          (MINIMUN_ELEMENTS_FOR_SEARCH<clientes.length || search!=='') &&     
          <SearhInput value={search} onChangeText={setSearch} label='Busqueda' onSubmit={buscarClientes}/>
        }
      {(!clientes || clientes.length===0)?
        <View style={styles.container}>
          <StyledText center title bold>{search!==''?'No hay resultados':'No hay clientes'}</StyledText>
        </View>
      :
        <FlatList data={clientes}
          renderItem={({item})=>{
          return <ClienteCard cliente={item} navigation={navigation}/>
        }} style={styles.list}/>
      }
      <FAB placement='right' onPress={()=>navigation.navigate('RegistroCliente')}>+</FAB>
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