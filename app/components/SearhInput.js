import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import Icons from "./Icons";
import theme from "../theme/theme";
import { Input } from "@rneui/base";
import StyledText from "./StyledText";
import { TextInput } from "react-native-paper";
import { SearchBar } from "react-native-screens";

//Entre las props, la variable searchRef dene ser una referencia (hook useRef)
//si no se manda un placeHolder, se pondrá por defecto Buscar
//si no se manda un label, no se mostrara nada en la parte superior derecha
//onSubmit se ejecuta cuando se toca el botón o cuando se manda el texto del input
export default function SearhInput({
  label,
  placeHolder,
  value,
  onChangeText,
  onSubmit,
  style,
}) {
  const submitSearch = () => {
    if (onSubmit) {
      onSubmit();
    }
  };
  return (
    <View style={style}>
      <TextInput
        mode="outlined"
        label={label}
        placeholder={placeHolder ? placeHolder : "Buscar"}
        value={value}
        onChangeText={onChangeText}
        activeOutlineColor={theme.colors.lightgray}
        onSubmitEditing={submitSearch}
        inputContainerStyle={styles.search}
        right={<TextInput.Icon icon="search" />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  nobackground: {
    backgroundColor: "transparent",
  },
  search: {
    marginVertical: -5,
    borderWidth: 1,
    paddingVertical: 1,
    paddingLeft: 15,
    borderRadius: 10,
    borderColor: theme.colors.inputcolor,
  },
  label: {
    zIndex: 100,
    position: "absolute",
    backgroundColor: "white",
    top: -15,
    left: 22,
  },
});
