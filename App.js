import {StatusBar} from "expo-status-bar";
import React from 'react';
import { StyleSheet, Text, View } from 'react-native'
import RutasAutenticadas from "./src/navegation/RutasAutenticadas";
import RutasNoAutenticadas from "./src/navegation/RutasNoAutenticadas";


export default function App() {
  return (
   <RutasNoAutenticadas />
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
