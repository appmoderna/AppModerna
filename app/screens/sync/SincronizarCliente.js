import { FAB } from "@rneui/base";
import React, { useEffect, useState } from "react";
import { FlatList, View, StyleSheet } from "react-native";
import Icons from "../../components/Icons";
import SearchInput from "../../components/SearchInput";
import { searchClients } from "../../services/ClienteService";
import StyledText from "../../components/StyledText";
import ClienteCard from "./ClienteCard";
import theme from "../../theme/theme";
import { Searchbar } from "react-native-paper";

const MINIMUN_ELEMENTS_FOR_SEARCH = 4;

export default function SincronizarClientes({ navigation, route }) {
  const [clientes, setClientes] = useState([]);
  const [search, setSearch] = useState("");

  const buscarClientes = async () => {
    const response = searchClients(search);
    setClientes(response);
  };

  useEffect(() => {
    buscarClientes();
  }, [search]);

  return (
    <View style={styles.container}>
      <StyledText heading center bold style={styles.title}>
        CLIENTES
      </StyledText>
      {(MINIMUN_ELEMENTS_FOR_SEARCH < clientes.length || search !== "") && (
        <SearchInput
          value={search}
          onChangeText={setSearch}
          label="Busqueda"
          onSubmit={buscarClientes}
          style={styles.search}
        />
      )}
      {!clientes || clientes.length === 0 ? (
        <View style={styles.container}>
          <StyledText center title bold>
            {search !== "" ? "No hay resultados" : "No hay clientes"}
          </StyledText>
        </View>
      ) : (
        <FlatList
          keyExtractor={({ item }) => item?.identificacion}
          data={clientes}
          renderItem={({ item }) => {
            return <ClienteCard cliente={item} navigation={navigation} />;
          }}
          style={styles.list}
        />
      )}
      <FAB
        placement="right"
        color={theme.colors.modernaYellow}
        onPress={() => navigation.navigate("RegistroCliente")}
        style={{
          backgroundColor: "black",
          marginHorizontal: 150,
          padding: 8,
          borderRadius: 50,
          position: "relative",
          top: 25,
          //display: "flex",
          zIndex: 1,
          //elevation: 1,
        }}
      >
        +
      </FAB>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 10,
  },
  list: {
    marginTop: 0,
    marginBottom: 50,
    paddingHorizontal: 15,
  },
  title: {
    marginBottom: 15,
  },
  search: {
    marginBottom: 0,
  },
});
