import { StatusBar } from "expo-status-bar";
import Header from "./app/components/Header";
import ClientesList from "./app/pages/clients/ClientesList";
import PrintingButton from "./app/pages/orders/PrintingButton";
import RegistroCliente from "./app/pages/clients/RegistroCliente";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import ResumenPedidos from "./app/pages/clients/ResumenPedidos";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View } from "react-native";
import { useState } from "react";
import { color, Icon } from "@rneui/base";
import theme from "./app/theme/theme";
import Icons from "./app/components/Icons";
import AwesomeIcon from "react-native-vector-icons/FontAwesome";

import {
  MD3Colors as DefaultTheme,
  Provider as PaperProvider,
} from "react-native-paper";

const StackClientes = createNativeStackNavigator();
const TabsApp = createBottomTabNavigator();

export default function App() {
  const [sessionUser, setSessionUser] = useState(true);
  return (
    <PaperProvider
      settings={{
        icon: (props) => <AwesomeIcon {...props} />,
      }}
    >
      <NavigationContainer>
        {sessionUser ? (
          <TabsApp.Navigator
            screenOptions={{
              header: () => <Header />,
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
              name="ClientesStack4"
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
          </TabsApp.Navigator>
        ) : (
          <Text>Must Log in</Text>
        )}

        <StatusBar />
      </NavigationContainer>
    </PaperProvider>
  );
}

const ClientesStackNavigation = () => {
  return (
    <StackClientes.Navigator
      initialRouteName="ClientesList"
      screenOptions={{ headerShown: false }}
    >
      <StackClientes.Screen name="ClientesList" component={ClientesList} />
      <StackClientes.Screen
        name="RegistroCliente"
        component={RegistroCliente}
      />
      <StackClientes.Screen name="ResumenPedidos" component={ResumenPedidos} />
    </StackClientes.Navigator>
  );
};
