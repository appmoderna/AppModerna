import { Button } from '@rneui/base'
import React from 'react'
import { TouchableOpacity, View } from 'react-native'




export default function PrintingButton() {

  return (
    <TouchableOpacity >
        <Button title='Imprimir' onPress={print}></Button>
    </TouchableOpacity>
  )
}
