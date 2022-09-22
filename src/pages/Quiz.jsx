import React, { useState, useEffect } from "react";
import Cards from "../component/Cards";
import NavBar from "../component/NavBar";
import axios from "axios";
import { useTimer } from "react-timer-hook";

const API_URL =
  "https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=boolean";
const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showAnswers, setShowAnswers] = useState(false);

  const time = new Date();
  time.setSeconds(time.getSeconds() + 300);

  const { seconds, minutes, hours } = useTimer({
    expiryTimestamp: time,
    onExpire: () => alert("times up!!!"),
  });

  var wrongAnswered = Math.abs(score - questions.length);

  useEffect(() => {
    axios
      .get(API_URL)
      .then((res) => res.data)
      .then((data) => {
        const questions = data.results.map((question) => ({
          ...question,
          answers: [
            question.correct_answer,
            ...question.incorrect_answers,
          ].sort(() => Math.random() - 0.5),
        }));
        setQuestions(questions);
      });
  }, []);

  const handleAnswer = (answer) => {
    if (!showAnswers) {
      if (answer === questions[currentIndex].correct_answer) {
        setScore(score + 1);
      }
    }

    setShowAnswers(true);
  };

  const handleNextQuestion = () => {
    setCurrentIndex(currentIndex + 1);
    setShowAnswers(false);
  };

  const handlePrevQuestion = () => {
    setCurrentIndex(currentIndex - 1);
    setShowAnswers(false);
  };
  return questions.length > 0 ? (
    <div>
      <NavBar />
      <div className="w-full mt-5 px-10">
        <div className="w-full items-center">
          {currentIndex >= questions.length ? (
            <div>
              <h1 className="text-2xl">Quiz Ended</h1>
              <h1 className="text-2xl">Total Correct is {score}</h1>
              <h1 className="text-2xl">Total Wrong is {wrongAnswered}</h1>
            </div>
          ) : (
            <div>
              <h1 className="text-3xl mb-5">
                Quiz Screen - Timer: {hours}:{minutes}:{seconds}
              </h1>
              <h1 className="text-3xl mb-5">
                Score: {score}/{wrongAnswered}
              </h1>
              <Cards
                handleAnswer={handleAnswer}
                showAnswers={showAnswers}
                handleNextQuestion={handleNextQuestion}
                handlePrevQuestion={handlePrevQuestion}
                data={questions[currentIndex]}
                datas={questions}
                currentIndex={currentIndex}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  ) : (
    <div>
      <NavBar />
      <h1 className="text-2xl">Loading....</h1>
    </div>
  );
};

export default Quiz;
