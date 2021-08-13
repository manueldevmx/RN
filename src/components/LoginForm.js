import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Icon, Input, Button, Divider } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { validaremail } from "../Utils/Utils";
import { isEmpty } from "lodash";
import { validarsesion } from "../Utils/Acciones";
import * as firebase from "firebase";

export default function LoginForm(props) {
  const { toastRef } = props;
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const navigation = useNavigation();
  const [show, setshow] = useState(true);

  validarsesion();

  const iniciarsesion = () => {
    if (isEmpty(email) || isEmpty(password)) {
      toastRef.current.show("Ingresa tus datos");
    } else if (!validaremail(email)) {
      toastRef.current.show("Ingrese un correo válido");
    } else {
      setloading(true);

      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then((response) => {
          setloading(false);
          toastRef.current.show("Ha iniciado sesión exitosamente");
          console.log(firebase.auth().currentUser);
        })
        .catch((err) => {
          setloading(false);
          toastRef.current.show(
            "Ha ocurrido un error al intentar iniciar sesión"
          );
        });
    }
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          borderBottomColor: "#ffab00",
          borderBottomWidth: 3,
          width: 100,
        }}
      />
      <Input
        placeholder="Correo"
        containerStyle={styles.input}
        onChangeText={(text) => {
          setemail(text);
        }}
        type="email"
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
      <Button
        title="Iniciar Sesion"
        containerStyle={styles.btniniciarsesion}
        buttonStyle={{ backgroundColor: "#ab00ff" }}
        onPress={() => iniciarsesion()}
      />
      <Text style={styles.txtcrearcuenta}>
        ¿No tienes cuenta?
        <Text
          style={styles.cuenta}
          onPress={() => navigation.navigate("register")}
        >
          {" "}
          {""}
          Crear cuenta
        </Text>
      </Text>

      <Divider
        style={{
          backgroundColor: "#ab00ff",
          height: 2,
          width: "30%",
          marginTop: 20,
        }}
      />
      <Text style={styles.txto}> O </Text>

      <View style={styles.btnlogin}>
        <TouchableOpacity style={styles.btnloginsocial}>
          <Icon
            ssize={24}
            type="material-community"
            name="google"
            color="#ffab00"
            backgroundColor="transparent"
            onPress={() => signInAsync()}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnloginsocial}>
          <Icon
            size={24}
            type="material-community"
            name="facebook"
            color="#ffab00"
            backgroundColor="transparent"
          />
        </TouchableOpacity>
      </View>
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
  txtcrearcuenta: {
    marginTop: 20,
  },
  cuenta: {
    color: "#6b00ff",
    fontFamily: "Roboto",
    fontSize: 15,
  },
  txto: {
    fontWeight: "100",
    fontSize: 15,
    marginTop: 10,
    color: "grey",
  },
  btnlogin: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
  btnloginsocial: {
    backgroundColor: "transparent",
    paddingHorizontal: 40,
    paddingVertical: 10,
    borderRadius: 5,
  },
});
