import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Tienda from "../screens/Tienda/Tienda";
import AddProduct from "../screens/Tienda/AddProduct";
import Contacto from "../screens/Tienda/Contacto";

import MensajeList from "../screens/Tienda/MensajesList";

const Stack = createStackNavigator();

export default function TiendaStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={Tienda}
        name="tienda"
        options={{
          headerStyle: {backgroundColor: "#ab00ff"},
          headerTintColor: "#fff",
          title: "Tickets Favoritos",
        }}
      />

      <Stack.Screen
        component={AddProduct}
        name="detalle"
        options={{
          headerStyle: {backgroundColor: "#ab00ff"},
          headerTintColor: "#fff",
          title: "Agregar Nuevo Producto",
        }}
      />

     
      <Stack.Screen
        component={MensajeList}
        name="mensajes"
        options={{
          title: "Mensajes",
          headerStyle: { backgroundColor: "#c034eb" },
          headerTintColor: "#fff",
        }}
      />
      <Stack.Screen
        component={Contacto}
        name="contacto"
        options={{
          title: "Contácto",
          headerStyle: { backgroundColor: "#c034eb" },
          headerTintColor: "#fff",
        }}
      />
    </Stack.Navigator>
  );
}
