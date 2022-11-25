import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants'
import Header from './app/components/Header';
import ClientesList from './app/pages/clients/ClientesList';
import PrintingButton from './app/pages/orders/PrintingButton';
import RegistroCliente from './app/pages/clients/RegistroCliente';

export default function App() {
  return (
    <View style={styles.container}>
      <Header back/>
      <RegistroCliente/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop:Constants.statusBarHeight,
    flex: 1,
    backgroundColor: '#fff',
  },
});
