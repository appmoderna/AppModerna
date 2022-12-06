import { ListItem } from "@rneui/base";
import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Avatar } from "react-native-paper";
import Icons from "../../components/Icons";
import StyledText from "../../components/StyledText";
import theme from "../../theme/theme";

export default function PedidoCard({ producto, showbuttons }) {
  const [image, setImage] = useState(producto?.producto?.imagen);
  return (
    <View style={styles.card}>
      <View></View>
      <ListItem
        bottomDivider
        containerStyle={{
          marginBottom: 2,
          borderRadius: 10,
          borderWidth: 1,
          borderBottomWidth: 1,
          borderColor: "black",
          paddingVertical: 10,
          paddingHorizontal: 15,
        }}
      >
        <Avatar.Image
          source={{ uri: image }}
          // containerStyle={{borderWidth:1}}
        />
        <ListItem.Content
          style={{ justifyContent: "center", alignItems: "center" }}
        >
          <ListItem.Title>{producto?.producto.nombre}</ListItem.Title>
          <ListItem.Subtitle
            style={{ justifyContent: "center", alignItems: "center" }}
          >
            {producto.cantidad} P.U: ${producto.producto.precio} P.T: $
            {producto.cantidad * producto.producto.precio}
            {/* setValor({producto.preciototal}) */}
          </ListItem.Subtitle>
        </ListItem.Content>

        <ListItem.Content
          right
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TouchableOpacity>
            <Icons edit color={theme.colors.modernaYellow} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icons eliminar color={"red"} />
          </TouchableOpacity>
        </ListItem.Content>
      </ListItem>
    </View>
  );
}
const styles = StyleSheet.create({
  card: {
    paddingVertical: 5,
    paddingHorizontal: 8,
    borderBottomWidth: 1,
    marginVertical: 3,
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  buttons: {
    flex: 1,
    justifyContent: "flex-end",
    flexDirection: "row",
    alignItems: "center",
  },
  information: {
    flex: 6,
  },
  iconwithtext: {
    flexDirection: "row",
    justifyContent: "flex-start",
  },
});
