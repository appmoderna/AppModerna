import { StyleSheet, Text, View } from "react-native";

export default function SincronizarCliente() {
  return (
    <View style={styles.container}>
      <Text>Sincronizar CLIENTES</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});
