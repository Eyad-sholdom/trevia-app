import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

import SeeAnswers from "./SeeAnswers";

function FinishedView(props) {
  const [seeAnswersState, setSeeAnswersState] = useState(false);

  function SeeAnswersView() {
    setSeeAnswersState(true);
  }

  if (props.state) {
    return (
      <View style={{ flex: 1, backgroundColor: "#ffffff", marginBottom: 20 }}>
        {!seeAnswersState && (
          <View
            style={{ flex: 1, backgroundColor: "#ffffff", marginBottom: 20 }}
          >
            <View style={styles.UpperBlueLine}>
              <View
                style={{
                  width: "28%",
                  height: "100%",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              ></View>
              <View style={styles.imgView}>
                <Image
                  source={require("../assets/logo.png")}
                  style={styles.Img}
                />
              </View>
            </View>
            <View style={styles.lowerView}>
              <View style={styles.lowerView}>
                <Text
                  style={{ color: "#7cb13f", fontWeight: "bold", fontSize: 50 }}
                >
                  Great Job
                </Text>
                <Text style={{ fontWeight: "bold", fontSize: 30 }}>
                  You answered more than 10 questions correctly
                </Text>
              </View>
              <Image
                source={require("../assets/success_character.png")}
                style={styles.resultImg}
              />
            </View>
            <TouchableOpacity
              style={styles.buttonView}
              onPress={SeeAnswersView}
            >
              <Text>See Wrong Answers</Text>
            </TouchableOpacity>
          </View>
        )}
        {seeAnswersState && (
          <SeeAnswers answers={props.wrongAnswersArry}></SeeAnswers>
        )}
      </View>
    );
  } else {
    return (
      <View style={{ flex: 1, backgroundColor: "#ffffff", marginBottom: 20 }}>
        {!seeAnswersState && (
          <View
            style={{ flex: 1, backgroundColor: "#ffffff", marginBottom: 20 }}
          >
            <View style={styles.UpperRedLine}>
              <View
                style={{
                  width: "28%",
                  height: "100%",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              ></View>
              <View style={styles.imgView}>
                <Image
                  source={require("../assets/logo.png")}
                  style={styles.Img}
                />
              </View>
            </View>
            <View style={styles.lowerView}>
              <View style={styles.lowerView}>
                <Text
                  style={{ color: "#b93b23", fontWeight: "bold", fontSize: 50 }}
                >
                  Failed
                </Text>
                <Text style={{ fontWeight: "bold", fontSize: 30 }}>
                  You need to answer 10 correct answers
                </Text>
              </View>
              <Image
                source={require("../assets/failed_character.png")}
                style={styles.resultImg}
              />
            </View>
            <TouchableOpacity
              style={styles.buttonView}
              onPress={() => {
                SeeAnswersView();
              }}
            >
              <Text>See Wrong Answers</Text>
            </TouchableOpacity>
          </View>
        )}
        {seeAnswersState && (
          <SeeAnswers answers={props.wrongAnswersArry}></SeeAnswers>
        )}
        {/*check if seeAnswersState is True then return <seeAnswers>*/}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  resultImg: {
    width: "80%",
    height: "60%",
    resizeMode: "contain",
  },
  buttonView: {
    width: "60%",
    height: "10%",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    borderRadius: 25,
    backgroundColor: "#e7e7e7",
  },

  UpperBlueLine: {
    backgroundColor: "#7cb13f",
    width: "100%",
    height: "10%",
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  UpperRedLine: {
    backgroundColor: "#b93b23",
    width: "100%",
    height: "10%",
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  lowerView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  Img: {
    resizeMode: "contain",
    width: "100%",
    height: "100%",
  },
  imgView: { width: "15%", height: "100%" },
});

export default FinishedView;
