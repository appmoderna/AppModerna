import { ListItem } from "@rneui/base";
import React, { useEffect, useState } from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Avatar } from "react-native-paper";
import Icons from "../../components/Icons";
import StyledText from "../../components/StyledText";

import theme from "../../theme/theme";

export default function PedidoCard({ producto, showbuttons, eliminar, id }) {
  const [image, setImage] = useState(producto?.producto?.imagen);
  const [numproductos, setNumproductos] = useState();

  useEffect(() => {
    console.log("producto: " + producto);
  }, []);

  return (
    <View style={styles.card}>
      <View style={styles.left}>
        <View style={styles.top}>
          <StyledText modernaPrimary bold subtitle>
            {producto?.producto.descripcion}
          </StyledText>
          <StyledText color={theme.colors.lightgray} bold>
            {producto?.producto.idSap}
          </StyledText>
        </View>
        <View style={styles.botton}>
          <StyledText bolder center>
            {producto?.producto?.iva && "*"}
          </StyledText>
          <Image
            style={[
              styles.logo,
              {
                height: 50,
                width: 50,
              },
            ]}
            source={{ uri: image }}
          />
          <View style={styles.data}>
            <StyledText center bold>
              Cant.
            </StyledText>
            <StyledText center>{producto?.cantidad}</StyledText>
          </View>
          <View style={styles.data}>
            <StyledText center bold>
              P. Unitario
            </StyledText>
            <StyledText center>{producto?.precioUnitario}</StyledText>
          </View>
          <View style={styles.data}>
            <StyledText center bold>
              Subtotal
            </StyledText>
            <StyledText center>{producto?.subtotal}</StyledText>
          </View>
        </View>
      </View>
      <View style={styles.right}>
        <TouchableOpacity>
          <Icons edit color={theme.colors.modernaYellow} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => eliminar(id)}>
          <Icons eliminar color={"red"} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "gray",
    paddingBottom: 10,
    paddingHorizontal: 8,
    marginVertical: 1,
    flexDirection: "row",
  },
  top: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginRight: 10,
  },
  botton: { flexDirection: "row" },
  left: {
    flex: 8,
  },
  right: {
    right: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  buttons: {
    justifyContent: "flex-end",
    flexDirection: "row",
    alignItems: "center",
  },
  data: {
    flex: 6,
    backgroundColor: theme.colors.lightgray,
    margin: 2,
  },
  iconwithtext: {
    flexDirection: "row",
    justifyContent: "flex-start",
  },
});
