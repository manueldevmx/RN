import React, { useRef } from "react";
import { View, Text, StyleSheet, Image, StatusBar } from "react-native";
import { useNavigation } from "@react-navigation/native";
import LoginForm from "../../components/LoginForm";
import Toast from "react-native-easy-toast";


export default function Login() {

  const navigation = useNavigation();
  const toastRef = useRef();

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#00ffab" />
      <Image
      source = {require("../../../assets/splash.png")}
      style={styles.imglogo}
      />
      <Text style={styles.textobanner}>!Hola, Bienvenido!</Text>
      <LoginForm toastRef={toastRef}/>
      <Toast ref={toastRef} position="center" opacity={0.9} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#9bf4d6",
  },
  imglogo: {
    width: 206,
    height: 206,
    marginTop: 40,
    alignSelf: "center",
  },
  textobanner: {
    fontFamily:"Roboto",
    fontWeight:"bold",
    fontSize:30,
    color: "#fff",
    alignSelf: "center",
  }
});
