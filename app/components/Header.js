import { Image } from '@rneui/base';
import { useEffect, useState } from 'react';
import { Keyboard,View,StyleSheet } from 'react-native'

export default function Header (){
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardVisible(true); // or some other action
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardVisible(false); // or some other action
      }
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

    return (
      <View>
        <View style={isKeyboardVisible?styles.hide:styles.container}>
          <Image style={styles.logo} 
            source={require('../../assets/moderna/Logotipo-original.png')
          }/>
        </View>
      </View>
    )
}


const styles = StyleSheet.create({
  hide:{
    display:'none'
  },  
  container: {
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: '#fff',
    paddingTop:10,
  }
  ,logo: {
    resizeMode:'center',
    width:330,
    height: 150,
  },
});