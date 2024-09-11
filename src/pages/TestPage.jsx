import React, { useEffect, useState } from "react";
import TestForm from "../components/TestForm";
import { calculateMBTI } from "../utils/mbtiCalculator";
import { createTestResult } from "../api/testResults";
import { useNavigate } from "react-router-dom";

const TestPage = ({ user }) => {
  console.log("user=>", user);
  const navigate = useNavigate();
  const [result, setResult] = useState(null); // MBTI 결과 저장
  const [isSubmitted, setIsSubmitted] = useState(false); // 제출 여부 확인

  // useEffect(() => {
  //   if (!user || !user.id) {
  //     alert("로그인이 필요해요.");
  //     navigate("/login");
  //   }
  // }, [user, navigate]);

  const handleTestSubmit = async (answers) => {
    const mbtiResult = calculateMBTI(answers);
    const resultData = {
      userId: user.id,
      nickname: user.nickname,
      result: mbtiResult,
      answers,
      date: new Date().toISOString(),
      visibility: true,
    };

    // 결과 저장
    await createTestResult(resultData);

    // MBTI 결과 상태 저장
    setResult(mbtiResult);
    setIsSubmitted(true); // 제출 상태 업데이트
  };

  const handleViewResults = () => {
    navigate("/results"); // 결과 페이지로
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-4">MBTI 테스트</h1>

      {!isSubmitted ? (
        <TestForm onSubmit={handleTestSubmit} />
      ) : (
        <div>
          <h2 className="text-xl font-semibold">테스트 결과: {result}</h2>
          <button
            onClick={handleViewResults}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
          >
            결과 페이지로 이동하기
          </button>
        </div>
      )}
    </div>
  );
};

export default TestPage;
