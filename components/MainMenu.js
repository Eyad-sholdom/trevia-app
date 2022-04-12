import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

function MainMenu(props) {
  return (
    <View style={styles.mainView}>
      <View style={styles.imgView}>
        <Image
          style={styles.Img}
          source={require("../assets/splash_logo.png")}
        />
      </View>
      <View style={styles.buttonView}>
        <TouchableOpacity style={styles.button} onPress={props.startBtnClicked}>
          <Text>Lets Start</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default MainMenu;

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: "#2071ad",
    alignItems: "center",
  },

  imgView: {
    width: "100%",
    height: "80%",
    justifyContent: "center",
    alignItems: "center",
    resizeMode: "contain",
  },
  buttonView: {
    width: "100%",
    height: "20%",
    alignItems: "center",
    justifyContent: "center",
  },
  Img: {
    width: "60%",
    height: "80%",
    resizeMode: "stretch",
  },
  button: {
    width: "80%",
    height: "50%",
    backgroundColor: "#ffffff",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
});
