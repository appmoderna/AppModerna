import { StatusBar } from "expo-status-bar";
import Header from "./app/components/Header";
import ClientesList from "./app/screens/clients/ClientesList";
import RegistroCliente from "./app/screens/clients/RegistroCliente";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import ResumenPedidos from "./app/screens/clients/ResumenPedidos";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useEffect, useState } from "react";
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
import { BackHandler } from "react-native";
import StyledText from "./app/components/StyledText";

const StackClientes = createNativeStackNavigator();
const StackPedidos = createNativeStackNavigator();
const StackLogin = createNativeStackNavigator();
const TabsApp = createBottomTabNavigator();
const paperTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    text: "orange",
  },
};

export default function App() {
  const [sessionUser, setSessionUser] = useState(false);
  const [appIsReady, setAppIsready] = useState(false);

  useEffect(() => {
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
        {false ? <AppTabNavigation /> : <LoginStackNavigation />}
        <StatusBar />
      </NavigationContainer>
    </PaperProvider>
  );
}

const AppTabNavigation = () => {
  return (
    <TabsApp.Navigator
      initialRouteName="ClientesStack4"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: { backgroundColor: theme.colors.modernaRed },
      }}
    >
      <TabsApp.Screen
        name="ClientesStack"
        component={ClientesStackNavigation}
        options={{
          tabBarIcon: () => (
            <Icon
              name="users"
              type="font-awesome"
              edit
              color={theme.colors.white}
            />
          ),
        }}
      />
      <TabsApp.Screen
        name="ClientesStack2"
        component={ClientesStackNavigation}
        options={{
          tabBarIcon: () => (
            <Icon
              name="cloud-offline"
              type="ionicon"
              edit
              color={theme.colors.white}
            />
          ),
        }}
      />
      <TabsApp.Screen
        name="ClientesStack3"
        component={PedidoResumen}
        options={{
          headerShown: false,
          tabBarIcon: () => <Icons sync color={theme.colors.white} />,
        }}
      />
      <TabsApp.Screen
        name="PedidosStackNavigation"
        component={PedidosStackNavigation}
        options={{
          tabBarIcon: () => <Icons list color={theme.colors.white} />,
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
      <StackLogin.Screen name="IniciarDia" component={Login} />
    </StackLogin.Navigator>
  );
};
const ClientesStackNavigation = () => {
  return (
    <StackClientes.Navigator
      initialRouteName="ClientesList"
      screenOptions={{ headerShown: true, header: () => <Header /> }}
    >
      <StackClientes.Screen name="ClientesList" component={ClientesList} />
      <StackClientes.Screen
        name="RegistroCliente"
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
      <StackClientes.Screen name="PedidoResumen" component={PedidoResumen} />
    </StackClientes.Navigator>
  );
};
