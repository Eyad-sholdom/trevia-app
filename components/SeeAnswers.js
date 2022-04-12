import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const SeeAnswers = (props) => {
  const [data, setData] = useState([]);
  useEffect(() => setData(props.answers));
  console.log(data);
  return (
    <View style={{ flex: 1, backgroundColor: "#ffffff" }}>
      <View style={styles.UpperBlueLine}>
        <View
          style={{
            width: "28%",
            height: "100%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              color: "#ffffff",
              fontWeight: "bold",
            }}
          >
            Answers
          </Text>
        </View>
        <View style={styles.imgView}>
          <Image source={require("../assets/logo.png")} style={styles.Img} />
        </View>
      </View>
      <View style={{ flex: 1 }}>
        {data.map((item) => {
          return (
            <View style={styles.results}>
              <Text style={{ color: "gray", fontWeight: "bold", fontSize: 15 }}>
                {item.question}
              </Text>
              <View style={{ flexDirection: "row" }}>
                <View>
                  <Text>the Correct Answers is:</Text>
                </View>
                <View>
                  <Text
                    style={{ fontSize: 15, fontWeight: "bold", color: "green" }}
                  >
                    {item.correct_answer}
                  </Text>
                </View>
              </View>
            </View>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Img: {
    resizeMode: "contain",
    width: "100%",
    height: "100%",
  },
  UpperBlueLine: {
    backgroundColor: "#10609b",
    width: "100%",
    height: "5%",
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  imgView: { width: "15%", height: "100%" },

  results: {
    margin: 20,
    width: "95%",
    height: "10%",
    borderRadius: 25,
    paddingLeft: 3,
    justifyContent: "center",
    backgroundColor: "#e7e7e7",
  },
});

export default SeeAnswers;
