import React, { useState } from "react";

const Quiz = () => {
  const questions = [
    // HTML Questions
    {
      question: "What does HTML stand for?",
      options: [
        "Hyper Text Markup Language",
        "Home Tool Markup Language",
        "Hyperlinks and Text Markup Language",
        "Hyper Transfer Markup Language",
      ],
      answer: "Hyper Text Markup Language",
    },
    {
      question: "Which tag is used to define an image in HTML?",
      options: ["<pic>", "<image>", "<img>", "<src>"],
      answer: "<img>",
    },
    {
      question: "Which tag is used for creating a hyperlink?",
      options: ["<a>", "<link>", "<href>", "<hyper>"],
      answer: "<a>",
    },

    // CSS Questions
    {
      question: "Which property is used to change the background color?",
      options: ["bgcolor", "background", "background-color", "color"],
      answer: "background-color",
    },
    {
      question: "What does CSS stand for?",
      options: [
        "Colorful Style Sheets",
        "Computer Style Sheets",
        "Creative Style Sheets",
        "Cascading Style Sheets",
      ],
      answer: "Cascading Style Sheets",
    },
    {
      question: "Which CSS property controls the text size?",
      options: ["font-size", "text-style", "text-size", "font-style"],
      answer: "font-size",
    },

    // JavaScript Questions
    {
      question: "Which symbol is used for comments in JS?",
      options: ["<!-- -->", "//", "**", "##"],
      answer: "//",
    },
    {
      question: "Which company developed JavaScript?",
      options: ["Microsoft", "Sun Microsystems", "Netscape", "Oracle"],
      answer: "Netscape",
    },
    {
      question: "How do you declare a variable in JavaScript?",
      options: ["variable myVar", "let myVar", "v myVar", "declare myVar"],
      answer: "let myVar",
    },
    {
      question: "What is the output of: typeof null?",
      options: ["null", "undefined", "object", "number"],
      answer: "object",
    },
  ];

  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState("");
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [username, setUsername] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [leaderboard, setLeaderboard] = useState([]);

  const handleSelect = (option) => {
    setSelected(option);
    if (option === questions[current].answer) {
      setScore(score + 1);
    }

    setTimeout(() => {
      if (current + 1 < questions.length) {
        setCurrent(current + 1);
        setSelected("");
      } else {
        setShowResult(true);
      }
    }, 500);
  };

  const handleSubmitScore = () => {
    if (username.trim() !== "") {
      const entry = { name: username.trim(), score };
      setLeaderboard((prev) => [...prev, entry]);
      setIsSubmitted(true);
    }
  };

  const resetQuiz = () => {
    setCurrent(0);
    setScore(0);
    setSelected("");
    setShowResult(false);
    setUsername("");
    setIsSubmitted(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Frontend Quiz</h1>

      <div className="max-w-xl mx-auto">
        {!showResult ? (
          <div className="p-6 bg-white shadow rounded-lg space-y-6">
            <div className="text-sm text-gray-500 text-right">
              Question {current + 1} of {questions.length}
            </div>
            <h2 className="text-xl font-semibold">
              {questions[current].question}
            </h2>
            <div className="space-y-3">
              {questions[current].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleSelect(option)}
                  className={`w-full px-4 py-2 rounded border transition ${
                    selected === option
                      ? "bg-blue-100 border-blue-500"
                      : "bg-gray-50 hover:bg-gray-100 border-gray-300"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="p-6 bg-white shadow rounded-lg text-center space-y-4">
            <h2 className="text-2xl font-bold">Quiz Completed!</h2>
            <p className="text-lg">
              Your score: {score} / {questions.length}
            </p>

            {!isSubmitted ? (
              <div className="space-y-3">
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Enter your name"
                  className="w-full p-2 border rounded"
                />
                <button
                  onClick={handleSubmitScore}
                  className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                >
                  Submit Score
                </button>
              </div>
            ) : (
              <button
                onClick={resetQuiz}
                className="mt-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Restart Quiz
              </button>
            )}
          </div>
        )}

        {/* Leaderboard */}
        {leaderboard.length > 0 && (
          <div className="mt-8 bg-white shadow rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4 text-center">🏆 Leaderboard</h3>
            <ul>
              {leaderboard
                .sort((a, b) => b.score - a.score)
                .map((entry, index) => (
                  <li
                    key={index}
                    className="flex justify-between border-b py-2 text-gray-700"
                  >
                    <span>{entry.name}</span>
                    <span>{entry.score}</span>
                  </li>
                ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;
