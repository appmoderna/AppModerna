import { StatusBar } from 'expo-status-bar';
import Header from './app/components/Header';
import ClientesList from './app/pages/clients/ClientesList';
import PrintingButton from './app/pages/orders/PrintingButton';
import RegistroCliente from './app/pages/clients/RegistroCliente';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import ResumenPedidos from './app/pages/clients/ResumenPedidos';

const StackClientes = createNativeStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Header/>
        <StatusBar/>
        <StackClientes.Navigator initialRouteName="ClientesList" screenOptions={{headerShown:false}}>
          <StackClientes.Screen name="ClientesList" component={ClientesList} />
          <StackClientes.Screen name="RegistroCliente" component={RegistroCliente} />
          <StackClientes.Screen name="ResumenPedidos" component={ResumenPedidos} />
        </StackClientes.Navigator>
    </NavigationContainer>
  );
}

