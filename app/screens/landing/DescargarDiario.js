import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, color } from "@rneui/base";
import theme from "../../theme/theme";
import Header from "../../components/Header";
import SplashDescarga from "./SplashDescarga";
import Spinner from "react-native-loading-spinner-overlay";
import { SessionContext } from "../../context/SessionProvider";

export default function DescargarDiario({ navigation }) {
  const [estado, setEstado] = useState(false);
  //const [first, setfirst] = useState(second);
  const [appIsReady, setAppIsready] = useState(false);
  const { setSincronizado } = useContext(SessionContext);
  useEffect(() => {
    if (estado == false) {
      return;
    }
    setTimeout(() => {
      setSincronizado(true);
      setEstado(false);
    }, 1000);
  }, [estado]);
  //   if (!appIsReady) {
  //     return <Splash />;
  //   }

  return (
    <View style={styles.container}>
      <Spinner
        visible={estado}
        textContent={"Descargando..."}
        textStyle={{ color: "white" }}
        color="white"
        overlayColor="rgba(3, 3, 3, 0.52)"
        //textStyle={{ color: "white" }}
      />
      <Button
        title="Empezar dia "
        icon={{
          name: "cloud-download",
          color: "white",
          type: "font-awesome",
        }}
        color={theme.colors.modernaRed}
        buttonStyle={{ borderRadius: 10 }}
        iconRight
        titleStyle={{ fontWeight: "700" }}
        onPress={() => {
          setEstado(true);
        }}
      />
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
