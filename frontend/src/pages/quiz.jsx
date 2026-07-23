import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Quiz() {

  const navigate = useNavigate();

  const questions = [
    {
      question: "1. How does your skin feel after washing?",
      options: ["Very Dry", "Comfortable", "Oily within an hour", "Combination"]
    },
    {
      question: "2. How often do you get pimples?",
      options: ["Never", "Sometimes", "Often", "Very Frequently"]
    },
    {
      question: "3. Are your pores visible?",
      options: ["No", "Slightly", "Yes", "Very Large"]
    },
    {
      question: "4. How sensitive is your skin?",
      options: ["Very Sensitive", "Moderate", "Low", "Not Sensitive"]
    },
    {
      question: "5. Do you wear sunscreen daily?",
      options: ["Always", "Sometimes", "Rarely", "Never"]
    },
    {
      question: "6. Do you experience blackheads?",
      options: ["Never", "Sometimes", "Often", "Very Often"]
    },
    {
      question: "7. What is your age group?",
      options: ["Below 18", "18-25", "26-35", "35+"]
    },
    {
      question: "8. Do you have pigmentation?",
      options: ["No", "Little", "Moderate", "Severe"]
    },
    {
      question: "9. What is your biggest skin concern?",
      options: ["Acne", "Dryness", "Dark Spots", "Oiliness"]
    },
    {
      question: "10. How much water do you drink daily?",
      options: ["Less than 1L", "1-2L", "2-3L", "More than 3L"]
    }
  ];

  const [answers, setAnswers] = useState({});

  const handleChange = (q, answer) => {
    setAnswers({
      ...answers,
      [q]: answer,
    });
  };

  const submitQuiz = () => {

    const concern = answers["9. What is your biggest skin concern?"];

    if (!concern) {
      alert("Please answer Question 9.");
      return;
    }

    navigate(`/products?concern=${concern}`);
  };

  return (
    <div className="quiz-page">

      <h1>AI Skin Assessment Quiz</h1>

      <p>
        Answer these questions so GlowSense AI can recommend
        the best skincare routine.
      </p>

      {questions.map((q, index) => (

        <div key={index} className="quiz-card">

          <h3>{q.question}</h3>

          {q.options.map((option) => (

            <label key={option} className="option">

              <input
                type="radio"
                name={q.question}
                value={option}
                onChange={() => handleChange(q.question, option)}
              />

              {option}

            </label>

          ))}

        </div>

      ))}

      <button className="primary-btn" onClick={submitQuiz}>
        Submit Quiz
      </button>

    </div>
  );
}