import React from "react";
import { StyleSheet } from "react-native";
import { Icon } from "@rneui/base";

const MATERIAL_COMUNITY_ICONS = "material-community";
const MATERIAL_ICONS = "material";
const OCTICON = "octicon";
const FONT_AWESOME_5 = "font-awesome-5";
const FONTISTO = "fontisto";
const IONICON = "ionicon";
const ENTYPO = "entypo";
const FONTAWESOME = "font-awesome";
const ANTDESIGN = "antdesign";
const deleteIcon = { type: FONTAWESOME, name: "trash" };
const searchIcon = { type: FONTISTO, name: "search" };
const checkIcon = { type: OCTICON, name: "check-circle-fill" };
const passwordIcon = { type: ANTDESIGN, name: "eye" };
const backIcon = { type: IONICON, name: "arrow-back-circle-sharp" };
const editIcon = { type: ENTYPO, name: "edit" };
const addressIcon = { type: FONTISTO, name: "map-marker-alt" };
const userIcon = { type: FONT_AWESOME_5, name: "user-alt" };
const squareICon = { type: IONICON, name: "md-square-outline" };
const listIcon = {
  type: MATERIAL_COMUNITY_ICONS,
  name: "clipboard-text-search-outline",
};
const syncIcon = { type: MATERIAL_COMUNITY_ICONS, name: "cloud-refresh" };
const Icons = ({
  square,
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
  list,
  sync,
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
  if (square) {
    icon = squareICon;
  }
  if (list) {
    icon = listIcon;
  }
  if (sync) {
    icon = syncIcon;
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
