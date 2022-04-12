import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import MainMenu from "./components/MainMenu";
///
import QuestionManager from "./components/QuestionManager";

export default function App(props) {
  const [isStarted, setIsStarted] = useState(false);

  const startBtnClicked = () => {
    console.log("clicked");
    setIsStarted((prev) => !isStarted);
  };

  if (!isStarted) {
    return <MainMenu startBtnClicked={startBtnClicked} />;
  } else {
    return <QuestionManager />;
  }
}
