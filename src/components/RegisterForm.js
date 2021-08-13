import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Icon, Input, Button } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { validaremail } from "../Utils/Utils";
import { isEmpty } from "lodash";
import * as firebase from "firebase";

export default function RegisterForm(props) {
  const { toastRef } = props;
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [repetirPassword, setrepetirPassword] = useState("");
  const navigation = useNavigation();
  const [show, setshow] = useState(true);

  return (
    <View style={styles.container}>
      <View
        style={{
          borderBottomColor: "#ab00ff",
          borderBottomWidth: 3.6,
          width: 100,
        }}
      />
      <Input
        placeholder="Correo"
        containerStyle={styles.input}
        onChangeText={(text) => {
          setemail(text);
        }}
        value={email}
      />
      <Input
        placeholder="Contraseña"
        containerStyle={styles.input}
        rightIcon={{
          type: "material-community",
          name: show ? "eye-outline" : "eye-off-outline",
          color: "#ab00ff",
          onPress: () => setshow(!show),
        }}
        onChangeText={(text) => {
          setpassword(text);
        }}
        secureTextEntry={show}
        value={password}
      />
      <Input
        placeholder="Repetir contraseña"
        containerStyle={styles.input}
        rightIcon={{
          type: "material-community",
          name: show ? "eye-outline" : "eye-off-outline",
          color: "#ab00ff",
          onPress: () => setshow(!show),
        }}
        onChangeText={(repetirPassword) => {
          setrepetirPassword(repetirPassword);
        }}
        secureTextEntry={show}
        value={repetirPassword}
      />
      <Button
        title="Crear cuenta"
        containerStyle={styles.btniniciarsesion}
        buttonStyle={{ backgroundColor: "#ab00ff" }}
        onPress={() => console.log("crear cuenta")}
      />
      <Button
        title="Iniciar Sesion"
        containerStyle={styles.btniniciarsesion}
        buttonStyle={{ backgroundColor: "#ffab00" }}
        onPress={() => navigation.goBack()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F5F6F8",
    flex: 1,
    marginTop: 20,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    alignItems: "center",
    paddingTop: 20,
  },
  input: {
    width: "85%",
    marginTop: 20,
    height: 50,
  },
  btniniciarsesion: {
    width: "60%",
    marginTop: 20,
    borderRadius: 30,
  },
});
