import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import RegistroClientes from './app/pages/RegistroClientes';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Pedido from './app/pages/Pedido';

const Stack = createNativeStackNavigator();

const SplashNavigation = () => {
  return <Stack.Navigator>
    <Stack.Screen
      name='ClientesPedido'
      component={Pedido}
      options={{
        headerShown:false,
      }}
    />
  </Stack.Navigator>
}

export default function App() {
  return (
    
    <NavigationContainer>
      <SplashNavigation/>
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
