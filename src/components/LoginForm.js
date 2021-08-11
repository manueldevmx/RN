import React, {useState} from "react";
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
        <Input placeholder="Correo" />
        <Input placeholder="Contraseña" />
        <Button title="Iniciar Sesion" type="outline"/>
      
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
});
