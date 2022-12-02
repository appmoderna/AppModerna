import React from "react";
import { StyleSheet } from "react-native";
import { Icon } from "@rneui/base";

const FONT_AWESOME_5 = "font-awesome-5";
const FONTISTO = "fontisto";
const IONICON = "ionicon";
const ENTYPO = "entypo";
const deleteIcon = { type: "ant-design", name: "delete" };
const searchIcon = { type: FONTISTO, name: "search" };
const checkIcon = { type: "octicon", name: "check-circle-fill" };
const passwordIcon = { type: "antdesign", name: "eye" };
const backIcon = { type: IONICON, name: "arrow-back-circle-sharp" };
const editIcon = { type: "ant-design", name: "edit" };
const addressIcon = { type: FONTISTO, name: "map-marker-alt" };
const userIcon = { type: FONT_AWESOME_5, name: "user-alt" };

const Icons = ({
  address,
  eliminar,
  buscar,
  check,
  color,
  size,
  style,
  password,
  back,
  edit,
  user,
}) => {
  let icon = deleteIcon;
  if (eliminar) {
    icon = deleteIcon;
  }
  if (address) {
    icon = addressIcon;
  }
  if (buscar) {
    icon = searchIcon;
  }
  if (check) {
    icon = checkIcon;
  }
  if (password) {
    icon = passwordIcon;
  }
  if (back) {
    icon = backIcon;
  }
  if (edit) {
    icon = editIcon;
  }
  if (user) {
    icon = userIcon;
  }
  return (
    <Icon
      size={size ? size : 30}
      type={icon.type}
      name={icon.name}
      color={color ? color : "black"}
      style={[style, styles.icon]}
    />
  );
};

const styles = StyleSheet.create({
  icon: {
    marginHorizontal: 5,
  },
});

export default Icons;
