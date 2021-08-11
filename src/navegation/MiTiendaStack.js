import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import MiTienda from "../screens/MiTienda/MiTienda";
import EditarProducto from "../screens/MiTienda/EditarProducto";
import AddProduct from "../screens/Tienda/AddProduct";

const Stack = createStackNavigator();

export default function MiTiendaStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#ab00ff" },
        headerTintColor: "#fff",
      }}
    >
      <Stack.Screen
        component={MiTienda}
        name="mitienda"
        options={{
          title: "Scan Tickets",
          headerStyle: { backgroundColor: "#ab00ff" },
          headerTintColor: "#fff",
        }}
      />
      <Stack.Screen
        component={AddProduct}
        name="add-product"
        options={{
          title: "Agregar Nuevo Producto",
          headerStyle: { backgroundColor: "#ab00ff" },
          headerTintColor: "#fff",
        }}
      />
      <Stack.Screen
        component={EditarProducto}
        name="edit-product"
        options={{
          title: "Editar Producto",
        }}
      />
    </Stack.Navigator>
  );
}
