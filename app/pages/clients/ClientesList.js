import React from 'react'
import { View } from 'react-native'
import Header from '../../components/Header'
import StyledText from '../../theme/StyledText'

export default function ClientesList() {
  return (
    <View>
        <Header />
        <StyledText title center>Clientes</StyledText>
    </View>
  )
}
