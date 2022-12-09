import { FAB } from "@rneui/base";
import React, { useEffect, useState } from "react";
import { FlatList, View, StyleSheet, TouchableOpacity } from "react-native";
import StyledText from "../../components/StyledText";
import {
  getUnsincronizedClients,
  sincronizarCliente,
} from "../../services/ClienteService";
import {
  getUnsincronizedPedidos,
  sincronizarPedido,
} from "../../services/PedidoService";
import theme from "../../theme/theme";
import ClienteCard from "../clients/ClienteCard";
import PedidoShortCard from "../orders/PedidoShortCard";

export default function SincronizarListItems({ title, clientes, pedidos }) {
  const [isAllSelected, setIsAllSelected] = useState(false);
  const [selected, setSelected] = useState([]);
  const [elements, setElements] = useState([]);

  const selectAll = () => {
    setIsAllSelected(!isAllSelected);
    setSelected(Array(elements.length).fill(!isAllSelected));
  };

  const toggleSelection = (index) => {
    const array = [...selected];
    array[index] = !array[index];
    setSelected(array);
  };

  const checkIfAllSelected = () => {
    let allSelected = true;
    selected.forEach((item) => {
      if (item === false) {
        allSelected = false;
        return;
      }
    });
    setIsAllSelected(allSelected);
  };

  useEffect(() => {
    checkIfAllSelected();
  }, [selected]);

  const getItems = (update) => {
    const response = clientes
      ? getUnsincronizedClients()
      : pedidos && getUnsincronizedPedidos();
    setElements(response);
    if (update) {
      setSelected(Array(response.length).fill(true));
    }
  };

  useEffect(() => {
    getItems(true);
  }, []);
  const sincronizar = () => {
    elements.forEach((element, index) => {
      if (selected[index]) {
        const response = clientes
          ? sincronizarCliente(element)
          : sincronizarPedido(element);
        setSelected(Array(response.length).fill(false));
      }
    });
    getItems();
  };
  return (
    <View style={styles.container}>
      <StyledText heading center bold style={styles.title}>
        {title.toUpperCase()}
      </StyledText>
      <View>
        {elements.length > 1 && (
          <TouchableOpacity style={styles.selection} onPress={selectAll}>
            <StyledText>
              {isAllSelected ? "Deseleccionar" : "Seleccionar"} todo
            </StyledText>
            <View
              style={[
                styles.circle,
                {
                  backgroundColor: isAllSelected
                    ? theme.colors.active
                    : theme.colors.white,
                },
              ]}
            />
          </TouchableOpacity>
        )}
        {!elements || elements.length === 0 ? (
          <View>
            <StyledText center title bold>
              No hay {title.toLowerCase()} por sincronizar
            </StyledText>
          </View>
        ) : clientes || pedidos ? (
          <FlatList
            keyExtractor={(item) =>
              clientes ? item?.identificacion : item?.idPedido
            }
            data={elements}
            renderItem={({ item, index }) => {
              return clientes ? (
                <ClienteCard
                  cliente={item}
                  isChecked={selected[index]}
                  onCheckTouch={() => {
                    toggleSelection(index);
                  }}
                />
              ) : (
                <PedidoShortCard
                  pedido={item}
                  isChecked={selected[index]}
                  onCheckTouch={() => {
                    toggleSelection(index);
                  }}
                />
              );
            }}
            style={styles.list}
          />
        ) : (
          <StyledText modernaPrimary center bold>
            Must provide the type of element to render
          </StyledText>
        )}
      </View>
      <FAB
        icon={{ name: "send", color: "white" }}
        color={theme.colors.modernaAqua}
        placement="right"
        size="large"
        onPress={sincronizar}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1 },
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
  selection: {
    paddingHorizontal: 30,
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  circle: {
    height: 24,
    width: 24,
    borderWidth: 1,
    borderRadius: 50,
    marginLeft: 10,
  },
});
