import { Button } from '@rneui/base'
import React from 'react'
import { StyleSheet } from 'react-native';
import theme from '../theme/theme';

export default function ({title,onPress, primary,secondary,style}) {
  return (
    <Button title={title} onPress={()=>{
        if(onPress){
            onPress()
        }
    }} containerStyle={[styles.button,style]} color={primary?theme.colors.modernaYellow:secondary&&theme.colors.modernaRed}/>
  )
}
const styles = StyleSheet.create({
    button:{
      borderRadius:10,
    },
  });