import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

// {
//     "category": "Science: Computers",
//     "type": "multiple",
//     "difficulty": "easy",
//     "question": "According to the International System of Units, how many bytes are in a kilobyte of RAM?",
//     "correct_answer": "1000",
//     "incorrect_answers": [
//         "512",
//         "1024",
//         "500"
//     ]
// }  this is example of what this component toke as props with the array that we added before (all answers)

function QuestionView(props) {
  const [WrongAnswers, setWrongAnswers] = useState([]); //to save wrong questions and send it to questionManager component
  const [QuestionNumber, setQuestionNumber] = useState(1); //number counter in upperblue line
  const [timer, setTimer] = useState(CheckQuestionDefficulty(QuestionNumber)); //timer
  const [TimerLength, setTimerLength] = useState(timer);

  const IncressNumber = (QuestionNumber) => {
    //the QuestionNumber state function
    QuestionNumber++;
    setQuestionNumber(QuestionNumber);
  };

  function CheckQuestionDefficulty(QuestionNumber) {
    // timer setter
    if (QuestionNumber < 10) {
      return 30;
    } else if (10 < QuestionNumber + 1 && QuestionNumber + 1 <= 15) {
      return 15;
    } else if (QuestionNumber + 1 > 15) {
      return 10;
    }
    return TimerLength;
  }

  const onAnswerClicked = (result) => {
    IncressNumber(QuestionNumber);
    // update number counter in upperblue line
    if (result === props.correct_answer) {
      props.changeAnswer(true);
    } else {
      setWrongAnswers([props.question, result, props.correct_answer]);
      props.changeAnswer(false);
    }
    setTimer(CheckQuestionDefficulty(QuestionNumber));
  };

  let allQues = ["False", "True"]; //set the normal type of question at true and false

  if (props.type === "multiple") {
    //change the  type of the question if its multiple
    allQues = [...props.incorrect_answers, props.correct_answer]; //add all awnsers to array
  }

  useEffect(() => {
    let interval = null;
    if (timer !== 0) {
      interval = setInterval(() => {
        setTimer((seconds) => seconds - 1);
      }, 1000);
    } else {
      clearInterval(interval);
      //setTimer(45);   //this one was working very well
      setTimer(CheckQuestionDefficulty(QuestionNumber));
      onAnswerClicked(false);
    }
    return () => clearInterval(interval);
  }, [timer]); //timer settings

  let statusColor = null;
  switch (props.difficulty) {
    case "easy":
      statusColor = "green";
      break;
    case "medium":
      statusColor = "yellow";
      break;
    default:
      statusColor = "red";
      break;
  }

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
            Question {QuestionNumber}/20
          </Text>
        </View>
        <View style={styles.imgView}>
          <Image source={require("../assets/logo.png")} style={styles.Img} />
        </View>
      </View>
      {/* the above was the blue line view */}
      <View style={{ flex: 1, width: "100%", height: "90%" }}>
        <View style={styles.QuestionView}>
          <View style={{ flexDirection: "row" }}>
            <View>
              <Text style={{ fontSize: 20 }}>Level: </Text>
            </View>
            <View>
              <Text style={{ fontSize: 20, color: statusColor }}>
                {props.difficulty}
              </Text>
            </View>
          </View>

          <Text style={{ fontSize: 20 }}>{props.question}</Text>
        </View>
        {allQues.map((ques) => (
          <TouchableOpacity
            onPress={() => onAnswerClicked(ques)}
            key={Math.random() * 10}
            style={styles.AwnsersBtnsStyle}
          >
            <Text>{ques}</Text>
          </TouchableOpacity>
        ))}
        <View style={{ flex: 1, alignItems: "center" }}>
          <View
            style={{
              width: 100,
              height: 100,
              alignItems: "center",
              borderRadius: 100,
              borderColor: "#10609b",
              borderWidth: 5,
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                alignSelf: "center",
                color: "#10609b",
              }}
            >
              {timer}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonView: {
    width: "100%",
    height: "20%",
    alignItems: "center",
    justifyContent: "center",
  },

  AwnsersBtnsStyle: {
    width: "90%",
    height: "10%",
    backgroundColor: "#e7e7e7",
    margin: 20,
    borderRadius: 25,
    justifyContent: "center",
    paddingHorizontal: "3%",
  },

  Img: {
    resizeMode: "contain",
    width: "100%",
    height: "100%",
  },
  UpperBlueLine: {
    backgroundColor: "#10609b",
    width: "100%",
    height: "10%",
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  imgView: { width: "15%", height: "100%" },
  QuestionView: {
    height: "20%",
    width: "100%",
    paddingTop: 20,
    paddingLeft: 25,
  },
});

export default QuestionView;
