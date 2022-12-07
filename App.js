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
import TabBar from "./app/components/TabBar";
import DescargarDiario from "./app/screens/landing/DescargarDiario";
import SincronizarCliente from "./app/screens/clients/SincronizarCliente";
import SincronizarPedidos from "./app/screens/clients/SincronizarPedidos";
import Descargar from "./app/screens/clients/Descargar";

const StackClientes = createNativeStackNavigator();
const StackPedidos = createNativeStackNavigator();

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
        icon: (props) => <AwesomeIcon {...props} />,
      }}
    >
      <NavigationContainer>
        {true ? <AppTabNavigation /> : <Login />}
        <StatusBar />
      </NavigationContainer>
    </PaperProvider>
  );
}

const AppTabNavigation = () => {
  return (
    <TabsApp.Navigator
      initialRouteName="ClientesStack"
      // tabBar={() => <TabBar />}
      screenOptions={{
        header: () => <Header />,
        tabBarShowLabel: false,
        tabBarStyle: { backgroundColor: theme.colors.modernaRed },
      }}
    >
      {/* _________________________________________________________________________________________ */}
      {/* <TabsApp.Screen
        name="DescargarDiarioStack"
        component={DescargarDiario}
        options={{
          tabBarIcon: () => <Icons edit color={theme.colors.white} />,
        }}
      /> */}
      {/* _________________________________________________________________________________________ */}
      <TabsApp.Screen
        name="ClientesStack"
        component={ClientesStackNavigation}
        options={{
          tabBarIcon: () => <Icons edit color={theme.colors.white} />,
        }}
      />
      <TabsApp.Screen
        name="ClientesStack2"
        component={ClientesStackNavigation}
        options={{
          tabBarIcon: () => (
            <Icon
              name="supervised-user-circle"
              type="MaterialIcons"
              edit
              color={theme.colors.white}
            />
          ),
        }}
      />
      <TabsApp.Screen
        name="ClientesStack3"
        component={ClientesStackNavigation}
        options={{
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
const PedidosStackNavigation = () => {
  return (
    <StackPedidos.Navigator
      initialRouteName="PedidosList"
      screenOptions={{ headerShown: false }}
    >
      <StackPedidos.Screen name="PedidosList" component={PedidosList} />
      <StackPedidos.Screen name="PedidoResumen" component={PedidoResumen} />
    </StackPedidos.Navigator>
  );
};
const ClientesStackNavigation = () => {
  return (
    <StackClientes.Navigator
      initialRouteName="ClientesList"
      screenOptions={{ headerShown: false }}
    >
      <StackClientes.Screen
        name="DescargarDiarioStack"
        component={DescargarDiario}
      />
      <StackClientes.Screen name="ClientesList" component={ClientesList} />
      <StackClientes.Screen
        name="RegistroCliente"
        component={RegistroCliente}
      />
      <StackClientes.Screen name="AgregarPedido" component={PedidoCliente} />
      <StackClientes.Screen name="PedidoResumen" component={PedidoResumen} />
    </StackClientes.Navigator>
  );
};

const SincronizacionNavigation = () => {
  return (
    <TabsApp.Navigator
      initialRouteName="ClientesStack"
      // tabBar={() => <TabBar />}
      screenOptions={{
        header: () => <Header />,
        tabBarShowLabel: false,
        tabBarStyle: { backgroundColor: theme.colors.modernaRed },
      }}
    >
      <TabsApp.Screen
        name="SincronizarClienteTab"
        component={SincronizarCliente}
        options={{
          tabBarIcon: () => <Icons sync color={theme.colors.white} />,
        }}
      />
      <TabsApp.Screen
        name="SincronizarClienteTab"
        component={SincronizarPedidos}
        options={{
          tabBarIcon: () => <Icons sync color={theme.colors.white} />,
        }}
      />
      <TabsApp.Screen
        name="DescargarTab"
        component={Descargar}
        options={{
          tabBarIcon: () => <Icons sync color={theme.colors.white} />,
        }}
      />
    </TabsApp.Navigator>
  );
};
