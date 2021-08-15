import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { Overlay } from "react-native-elements";
import { Grid } from "react-native-animated-spinkit";

export default function Loading(props) {
  const { isVisible, text } = props;

  return (
    <Overlay isVisible={isVisible} overlayStyle={styles.overlay}>
      <View style={styles.view}>
        <Grid size={30} color="#00ffab" />
        {text && <Text style={styles.text}>{text}</Text>}
      </View>
    </Overlay>
  );
}

const styles = StyleSheet.create({
  overlay: {
    backgroundColor: "rgba(105,89,235, 0.6)",
    borderWidth: 2,
    borderColor: "#00ffab",
    borderRadius: 20,
    width: "60%",
    height: Dimensions.get("window").height / 3,
  },
  view: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#00ffab",
    marginTop: 20,
    fontWeight: "bold",
    fontSize: 14,
    textTransform: "uppercase",
    textAlign: "center",
  },
});
