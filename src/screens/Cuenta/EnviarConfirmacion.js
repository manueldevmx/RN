import React, { useState, useRef } from "react";
import { StyleSheet, View, Text, Image, Alert } from "react-native";
import { Button } from "react-native-elements";
import CountryPicker from "react-native-country-picker-modal";
import { useNavigation } from "@react-navigation/native";
import { isEmpty } from "lodash";
import { Icon } from "react-native-elements/dist/icons/Icon";
import { TextInput } from "react-native";
import FirebaseRecapcha from "../../Utils/FirebaseRecapcha";
import { enviarautenticacionphone, registerPushNotifications } from "../../Utils/Acciones";

export default function EnviarConfirmacion() {
  const [country, setcountry] = useState("MX");
  const [callingCode, setcallingcode] = useState("52");
  const [phone, setphone] = useState("");
  const recaptchaVerifier = useRef();
  const inputphone = useRef();

  const navigation = useNavigation();

  const enviarconfirmacion = async () => {
    if (!isEmpty(phone)) {
      const numero = `+${callingCode}${phone}`;
      const verificationid = await enviarautenticacionphone(
        numero,
        recaptchaVerifier
      );

      if (!isEmpty(verificationid)) {
        navigation.navigate("confirmar-movil", { id: verificationid });
      } else {
        Alert.alert("Verificacion", "Introduce un numero valido", [
          {
            style: "cancel",
            text: "Entendido",
            onPress: () => {
              inputphone.current.clear();
              inputphone.current.focus();
            },
          },
        ]);
      }
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/splash.png")}
        style={styles.imglogo}
      />
      <View style={styles.panel}>
        <View
          style={{
            borderBottomColor: "#9bf4d6",
            borderBottomWidth: 2,
            width: 100,
          }}
        />
        <View style={styles.panelinterno}>
          <Icon
            name="whatsapp"
            type="material-community"
            size={60}
            color="#25d366"
          />
          <Text style={styles.titulo}>Ingresa tu numero de WhatsApp</Text>
          <View style={styles.viewwhatsapp}>
            <CountryPicker
              withFlag
              withCallingCode
              withFilter
              withCallingCodeButton
              countryCode={country}
              onSelect={(Country) => {
                setcountry(Country.cca2);
                setcallingcode(...Country.callingCode);
              }}
            />
            <Text style={{ color: "#fff" }}> | </Text>
            <TextInput
              placeholder="Número de Whatsapp"
              style={styles.input}
              placeholderTextColor="#fff"
              onChangeText={(text) => setphone(text)}
              value={phone}
              ref={inputphone}
            />
          </View>
          <Button
            title="Confirmar Número"
            buttonStyle={{ backgroundColor: "#ffab00", marginHorizontal: 20 }}
            containerStyle={{ marginVertical: 20 }}
            onPress={() => enviarconfirmacion()}
          />
        </View>
      </View>
      <FirebaseRecapcha referencia={recaptchaVerifier} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#9bf4d6",
  },
  imglogo: {
    width: 106,
    height: 106,
    alignSelf: "center",
    marginVertical: 40,
  },
  panel: {
    flex: 1,
    backgroundColor: "#ebfff9",
    paddingTop: 15,
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    alignItems: "center",
  },
  panelinterno: {
    flex: 1,
    justifyContent: "space-around",
    marginHorizontal: 20,
  },
  titulo: {
    fontSize: 16,
    textAlign: "center",
    fontWeight: "bold",
    color: "#ab00ff",
  },
  viewwhatsapp: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 20,
    height: 50,
    marginHorizontal: 20,
    paddingHorizontal: 20,
    backgroundColor: "#ffbe3b",
  },
  input: {
    width: "80%",
    height: 50,
    marginLeft: 5,
  },
});
