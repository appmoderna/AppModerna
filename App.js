import { useContext, useEffect, useRef, useState } from "react";
import { StatusBar } from "expo-status-bar";
import Header from "./app/components/Header";
import ClientesList from "./app/screens/clients/ClientesList";
import RegistroCliente from "./app/screens/clients/RegistroCliente";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import ResumenPedidos from "./app/screens/clients/ResumenPedidos";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { color, Icon } from "@rneui/base";
import theme from "./app/theme/theme";
import Icons from "./app/components/Icons";
import AwesomeIcon from "react-native-vector-icons/FontAwesome";
import AntDesign from "react-native-vector-icons/AntDesign";

import {
  MD3Colors as DefaultTheme,
  Provider as PaperProvider,
} from "react-native-paper";
import Splash from "./app/screens/landing/Splash";
import Login from "./app/screens/auth/Login";
import Auth from "./app/screens/auth/Auth";
import PedidosList from "./app/screens/orders/PedidosList";
import PedidoCliente from "./app/screens/orders/PedidoCliente";
import PedidoResumen from "./app/screens/orders/PedidoResumen";
import { BackHandler, Image, Text, TouchableOpacity, View } from "react-native";
import StyledText from "./app/components/StyledText";
import DescargarDiario from "./app/screens/landing/DescargarDiario";
import { SessionContext, SessionProvider } from "./app/context/SessionProvider";
import SincronizarClientes from "./app/screens/sync/SincronizarCliente";
import SincronizarPedidos from "./app/screens/sync/SincronizarPedidos";
import DescargarArchivos from "./app/screens/sync/DescargarArchivos";
import SyncScreen from "./app/screens/sync/SyncScreen";

const StackClientes = createNativeStackNavigator();
const StackPedidos = createNativeStackNavigator();
const StackLogin = createNativeStackNavigator();
const TabsApp = createBottomTabNavigator();
const TabSync = createBottomTabNavigator();
const paperTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    text: "orange",
  },
};

const CustomTabBarButton = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("RegistroCliente")}
      style={{
        backgroundColor: "white",
        height: 70,
        width: 70,
        borderRadius: 50,
        bottom: 35,
        justifyContent: "center",
        alignItems: "center",
      }}
      activeOpacity={0.98}
    >
      <Icon
        name="plus"
        type="entypo"
        color="white"
        style={{
          borderRadius: 50,
          backgroundColor: theme.colors.modernaYellow,
          padding: 15,
        }}
        size={30}
      />
    </TouchableOpacity>
  );
};

export default function App() {
  const { sessionUser, sincronizado } = useContext(SessionContext);
  const [appIsReady, setAppIsready] = useState(false);
  const [activate, setActivate] = useState(true);
  useEffect(() => {
    // console.log("activate: ", activate);
    const inicia = async () => {
      try {
        await new Promise((resolve) => {
          setTimeout(resolve, 2000);
        });
      } catch (e) {
        console.log(e);
      } finally {
        setAppIsready(true);
      }
    };
    inicia();
  });
  if (!appIsReady) {
    return <Splash />;
  }

  return (
    <PaperProvider
      settings={{
        icon: (props) => <AntDesign {...props} />,
      }}
    >
      <NavigationContainer>
        {/* AppTabNavigation */}
        {sessionUser !== null && sincronizado ? (
          <AppTabNavigation activate={activate} setActivate={setActivate} />
        ) : (
          <LoginStackNavigation />
        )}
        <StatusBar />
      </NavigationContainer>
    </PaperProvider>
  );
}

const AppTabNavigation = ({ activate, setActivate }) => {
  const navigation = useNavigation();
  // console.log("Props: ", activate)

  return (
    <TabsApp.Navigator
      initialRouteName="ClientesStack"
      screenOptions={{
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          //position: 'absolute',
          backgroundColor: theme.colors.modernaRed,
          // zIndex: 1,
          // elevation: 1,
          height: 65,
        },
      }}
    >
      <TabsApp.Screen
        name="ClientesStack"
        component={ClientesStackNavigation}
        options={{
          tabBarIcon: () => {
            return (
              <TouchableOpacity disabled={true}>
                <Icon
                  name="cloud-offline"
                  type="ionicon"
                  size={30}
                  color={theme.colors.white}
                />
              </TouchableOpacity>
            );
          },
        }}
      />
      <TabsApp.Screen
        name="ClientesStack2"
        component={ClientesStackNavigation}
        options={{
          tabBarIcon: () => (
            <TouchableOpacity
              style={{ padding: 18 }}
              onPress={() => {
                setActivate(true);
                navigation.navigate("ClientesStack2");
              }}
            >
              <Icon
                name="supervised-user-circle"
                type="material"
                size={30}
                color={theme.colors.white}
              />
            </TouchableOpacity>
          ),
        }}
      />
      {activate == true ? (
        <TabsApp.Screen
          name="ButtonPlus"
          component={ClientesStackNavigation}
          options={{
            tabBarButton: () => <CustomTabBarButton />,
          }}
        />
      ) : (
        <></>
      )}
      <TabsApp.Screen
        name="ClientesStack3"
        component={SyncTabNavigation}
        options={{
          headerShown: false,
          tabBarStyle: { display: "none" },
          tabBarIcon: () => <Icons sync size={30} color={theme.colors.white} />,
        }}
      />
      <TabsApp.Screen
        name="PedidosStackNavigation"
        component={PedidosStackNavigation}
        options={{
          tabBarIcon: () => (
            <TouchableOpacity
              style={{ padding: 18 }}
              onPress={() => {
                setActivate(false);
                //console.log("activate en log: ", activate)
                navigation.navigate(PedidosStackNavigation);
              }}
            >
              <Icons list size={30} color={theme.colors.white} />
            </TouchableOpacity>
          ),

          // tabBarButton: () => <TouchableOpacity onPress={() => {
          //   console.log("Presionando el boton del menú")
          // }}><Text>asdfasdf</Text></TouchableOpacity>,
        }}
      />
    </TabsApp.Navigator>
  );
};

const LoginStackNavigation = () => {
  return (
    <StackLogin.Navigator
      initialRouteName="Login"
      screenOptions={{ headerShown: false }}
    >
      <StackLogin.Screen name="Login" component={Login} />
      <StackLogin.Screen name="DescargarDiario" component={DescargarDiario} />
    </StackLogin.Navigator>
  );
};
const ClientesStackNavigation = () => {
  const navigation = useNavigation();
  return (
    <StackClientes.Navigator
      initialRouteName="ClientesList"
      screenOptions={{ headerShown: true, header: () => <Header /> }}
    >
      <StackClientes.Screen name="ClientesList" component={ClientesList} />
      <StackClientes.Screen
        name="RegistroCliente"
        options={{
          header: () => (
            <Header
              back={() => {
                navigation.goBack();
              }}
            />
          ),
        }}
        component={RegistroCliente}
      />
      <StackClientes.Screen name="AgregarPedido" component={PedidoCliente} />
      <StackClientes.Screen
        options={{ headerShown: false }}
        name="PedidoResumen"
        component={PedidoResumen}
      />
    </StackClientes.Navigator>
  );
};
const PedidosStackNavigation = () => {
  return (
    <StackClientes.Navigator
      initialRouteName="PedidosList"
      screenOptions={{ headerShown: true, header: () => <Header /> }}
    >
      <StackClientes.Screen name="PedidosList" component={PedidosList} />
      <StackClientes.Screen
        name="PedidoResumen"
        options={{ headerShown: false }}
        component={PedidoResumen}
      />
    </StackClientes.Navigator>
  );
};
const SyncTabNavigation = () => {
  return (
    <TabsApp.Navigator
      initialRouteName="SynClientes"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: { backgroundColor: theme.colors.modernaRed, height: 65 },
      }}
    >
      <TabsApp.Screen
        name="SynClientes"
        component={SincronizarClientes}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <Icon
              name="supervised-user-circle"
              type="material"
              size={30}
              color={theme.colors.white}
            />
          ),
        }}
      />
      <TabsApp.Screen
        name="SynPedidos"
        component={SincronizarPedidos}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <Icons product size={30} color={theme.colors.white} />
          ),
        }}
      />
      <TabsApp.Screen
        name="DescargarArchivos"
        component={DescargarArchivos}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <Icons download size={30} color={theme.colors.white} />
          ),
        }}
      />
    </TabsApp.Navigator>
  );
};
