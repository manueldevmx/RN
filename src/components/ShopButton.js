import React from "react";
import { StyleSheet, Text, View, TouchableHighlight } from "react-native";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

export default function ShopButton() {
  const navigation = useNavigation();

  return (
    <TouchableHighlight
      style={styles.container}
      onPress={() => {
        navigation.navigate("mitienda");
      }}
    >
      <Icon name="camera" color="#fff" size={28} />
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffab00",
    alignItems: "center",
    justifyContent: "center",
    width: 72,
    height: 72,
    borderRadius: 36,
    top: -20,
    shadowRadius: 5,
    shadowOffset: { height: 10 },
    shadowOpacity: 0.3,
    borderWidth: 3,
    borderColor: "#fff",
    padding: 20,
  },
});
