import { FAB, Image } from '@rneui/base';
import { useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { Keyboard,View,StyleSheet } from 'react-native'
import theme from '../theme/theme';
import Icons from './Icons';

export default function Header ({back,navigation}){
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
          {back&&
            <View style={styles.fab}>
              <TouchableOpacity onPress={()=>{
                navigation?.goBack()
                }}>
                <Icons back size={40} color={theme.colors.modernaYellow}/>
              </TouchableOpacity>
            </View>
          }
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
    width:300,
    height: 130,
  },fab:{
    zIndex:999,
    position:'absolute',
    top:5,
    left:10,
  }
});