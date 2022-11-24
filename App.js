import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from './app/pages/clients/Splash';
import Login from './app/pages/clients/Login';
import { useState, useEffect } from 'react';
import ClientesList from './app/pages/clients/ClientesList';

const Stack = createNativeStackNavigator();

const SplashNavigation = () => {
  return <Stack.Navigator>
    <Stack.Screen
      name='SplashScreen'
      component={Splash}
      options={{
        headerShown:false,
      }}
    />
  </Stack.Navigator>
}

const NavegacionInterna=()=>{
  return <Stack.Navigator>
    <Stack.Screen
      name='SplashScreen'
      component={Login}
      options={{
        headerShown:false,
      }}
    />
    <Stack.Screen
      name='ClientesScreen'
      component={ClientesList}
      options={{
        headerShown:false,
      }}
    />
  </Stack.Navigator>
}


export default function App() {
  const [appIsReady, setAppIsready] = useState(false);  
  useEffect(() => {
    const inicia = async () => {
      try {
        await new Promise((resolve)=>{
          setTimeout(resolve,2000)
        });
      }
      catch (e) {
        console.log(e);

      }
      finally {
        setAppIsready(true);
      }
    }
    inicia();
  });

  return (

    <NavigationContainer>
      {
      appIsReady?
      <NavegacionInterna />
      :
      <SplashNavigation />
      }
      
    </NavigationContainer>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
