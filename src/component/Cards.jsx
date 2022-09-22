import React from "react";
import Box from "@mui/material/Box";
import "./Card.css";

const Cards = ({
  handleAnswer,
  showAnswers,
  handleNextQuestion,
  currentIndex,
  datas,
  data: { question, correct_answer, answers },
}) => {
  return (
    <div className="w-full">
      <div>
        <div>
          <h1 className="text-3xl">Jumlah Soal: {datas.length}</h1>
        </div>
        <Box sx={{ p: 2, border: "1px solid grey" }}>
          <div className="flex justify-center">
            <h1 className="text-3xl">{currentIndex + 1}.</h1>
            <h1
              className="text-3xl"
              dangerouslySetInnerHTML={
                ({ __html: currentIndex + 1 }, { __html: question })
              }
            />
          </div>
          <div className="mt-3 flex justify-center gap-5">
            {answers.map((answer, idx) => {
              const specialClassName = showAnswers
                ? answer === correct_answer
                  ? "green-button"
                  : "red-button"
                : "";
              return (
                <button
                  className={`normal-button ${specialClassName}`}
                  onClick={() => handleAnswer(answer)}
                  dangerouslySetInnerHTML={{ __html: answer }}
                />
              );
            })}
          </div>
        </Box>
        {showAnswers && (
          <div className="mt-3 flex w-full justify-center">
            <button
              className="w-fit px-5 py-2 bg-green-500 rounded-md text-white"
              onClick={handleNextQuestion}
              disabled={question.length - 1 === currentIndex ? true : false}
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cards;
