import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import ConfirmarNumero from "../screens/Cuenta/ConfirmarNumero";
import EnviarConfirmacion from "../screens/Cuenta/EnviarConfirmacion";

const Stack = createStackNavigator();

export default function CuentaStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          component={EnviarConfirmacion}
          name="enviar-confirmacion"
          options={{
            title: " Revalida tu número de celular",
            headerStyle: { backgroundColor: "#c034eb" },
            headerTintColor: "#fff",
            
          }}
        />
        <Stack.Screen
          component={ConfirmarNumero}
          name="confirmar-movil"
          options={{
            title: "Confirmar Número",
            headerStyle: { backgroundColor: "#c034eb" },
            headerTintColor: "#fff",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
