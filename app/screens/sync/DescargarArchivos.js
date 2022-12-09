import { Button } from "@rneui/base";
import { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { Text, View } from "react-native";
import Spinner from "react-native-loading-spinner-overlay";
import Header from "../../components/Header";
import StyledText from "../../components/StyledText";
import theme from "../../theme/theme";

export default function DescargarArchivos({ navigation }) {
    const [estado, setEstado] = useState(false);
    //const [first, setfirst] = useState(second);
    // const [appIsReady, setAppIsready] = useState(false);
    //const { setSincronizado } = useContext(SessionContext);
    useEffect(() => {
        if (estado == false) {
            return;
        }
        setTimeout(() => {
            //setSincronizado(true);
            setEstado(false);
        }, 1000);
    }, [estado]);

    return (<View style={styles.container}>
        <Header
            back={() => {
                navigation.goBack();
            }}
        />
        <Spinner
            visible={estado}
            textContent={"Descargando..."}
            textStyle={{ color: "white" }}
            color="white"
            overlayColor="rgba(3, 3, 3, 0.52)"
        //textStyle={{ color: "white" }}
        />
        <StyledText heading center bold style={styles.title}>
            DESCARGAS
        </StyledText>
        <View style={{ paddingHorizontal: 80, justifyContent: 'center', flex: 1, paddingBottom: 55 }}>
            <StyledText subtitle bold>Productos:</StyledText>
            <Button title='Descargar '
                icon={{
                    name: 'user',
                    type: 'font-awesome',
                    size: 15,
                    color: 'white',
                }}
                iconRight
                size="lg"
                color={theme.colors.modernaRed}
                buttonStyle={{ borderRadius: 10, marginBottom: 50, marginTop: 15 }}
                onPress={() => {
                    setEstado(true);
                }}
            />
            <StyledText subtitle bold>Clientes:</StyledText>
            <Button title='Descargar '
                icon={{
                    name: 'user',
                    type: 'font-awesome',
                    size: 15,
                    color: 'white',
                }}
                iconRight
                size="lg"
                color={theme.colors.modernaRed}
                buttonStyle={{ borderRadius: 10, marginBottom: 50, marginTop: 15 }}
                onPress={() => {
                    setEstado(true);
                }}
            />
        </View>
    </View>)
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingHorizontal: 10
    },
});

