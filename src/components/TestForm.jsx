import React, { useState } from "react";
import { questions } from "../data/questions";

const TestForm = ({ onSubmit }) => {
  const [answers, setAnswers] = useState(Array(questions.length).fill(""));

  const handleChange = (index, answer) => {
    const newAnswers = [...answers];
    newAnswers[index] = answer;
    setAnswers(newAnswers);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(answers);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {questions.map((question, index) => (
        <div key={question.id} className="p-4 bg-gray-100 rounded-lg">
          <p className="text-lg font-semibold mb-2">{question.question}</p>
          <div className="space-x-4">
            {question.options.map((option) => (
              <label key={option} className="inline-flex items-center">
                <input
                  type="radio"
                  name={`question_${question.id}`}
                  value={option}
                  checked={answers[index] === option}
                  onChange={() => handleChange(index, option)}
                  className="form-radio text-blue-600"
                />
                <span className="ml-2">{option}</span>
              </label>
            ))}
          </div>
        </div>
      ))}
      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
      >
        제출하기
      </button>
    </form>
  );
};

export default TestForm;
