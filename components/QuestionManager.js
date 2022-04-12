import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import QuestionView from "./QuestionView";
import FinishedView from "./FinishedView";

const QuestionManager = () => {
  const url = "https://opentdb.com/api.php?amount=20&category=18";
  const [getques, setqueses] = useState([]);
  const [quesOrder, setquesOrder] = useState(0);
  const [WrongAnswers, setWrongAnswers] = useState([]);
  const [isFinished, setIsFinished] = useState(false);
  const [ExamFinsihed, setExamFinsihed] = useState(true); //this state for returning to the last view the result won/lose

  const changeAnswer = (isCorrect) => {
    if (isCorrect == false) {
      // false | true
      setWrongAnswers((prev) => {
        if (prev.length > 0) return [...prev, getques[quesOrder]];
        return [getques[quesOrder]];
      });
    }
    if (WrongAnswers.length + 1 >= 10) {
      setExamFinsihed(false); //change this to true if u want to see the successful exam result view
    }

    setquesOrder((prevState) => {
      if (prevState + 1 < getques.length) {
        return prevState + 1;
      }
      console.log("Finished");
      setIsFinished(true);
    });
  };

  useEffect(async () => {
    setTimeout(async () => {
      const response = await fetch(url, { method: "get" });
      const data = await response.json();

      data.results.forEach((item, index) => {
        data.results[index]["all_answers"] = [
          ...item["incorrect_answers"],
          item["correct_answer"],
        ];
        data.results[index]["all_answers"].sort(() => Math.random() - 0.5);
      }); //shuffil all the answers
      setqueses((prevState) => data.results); // set the last value of getques state in line 8 (empty) to data.result which its our quesions
    }, 10);
  }, []);

  return (
    <View style={styles.mainView}>
      {!isFinished && getques.length > 0 && (
        <QuestionView
          changeAnswer={changeAnswer}
          {...getques[quesOrder]}
        ></QuestionView>
      )}

      {isFinished && (
        <FinishedView state={ExamFinsihed} wrongAnswersArry={WrongAnswers} /> //send the status of the result and the array that contain the wrong answers
      )}
    </View>

  );
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: "#ffffff", 
  },

});
  
export default QuestionManager;
