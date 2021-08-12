import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Icon, Input, Button, Divider } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

export default function LoginForm() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  return (
    <View style={styles.container}>
      <View
        style={{
          borderBottomColor: "#ab00ff",
          borderBottomWidth: 3.6,
          width: 100,
        }}
      />
      <Input placeholder="Correo" 
      containerStyle={styles.input}
      />
      <Input 
      placeholder="Contraseña"
      containerStyle={styles.input}
      rightIcon={{
        type:"material-community",
        name: "eye-outline",
        color: "#ab00ff",

      }}
      />
      <Button 
      title="Iniciar Sesion"
      containerStyle={styles.btniniciarsesion}
      buttonStyle={{ backgroundColor: "#ab00ff"}}
      />
      <Text>
        ¿No tienes cuenta?
        <Text>Crear cuenta</Text>
      </Text>
      <Divider
        style={{
          backgroundColor: "#ab00ff",
          height: 3,
          width: "69%",
          marginTop: 20,
        }}
      />
      <Text> O </Text>

      <View>
        <TouchableOpacity>
          <Icon
            ssize={24}
            type="material-community"
            name="google"
            color="#ab00ff"
            backgroundColor="transparent"
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon
            size={24}
            type="material-community"
            name="facebook"
            color="#ab00ff"
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
  input:{
    width: "85%",
    marginTop: 20,
    height: 50,
  },
  btniniciarsesion:{
    width: "60%",
    marginTop: 20,
    borderRadius: 30,
  },
});
