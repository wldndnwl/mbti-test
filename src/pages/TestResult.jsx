import React, { useEffect, useState } from "react";
import {
  getTestResults,
  updateTestResultVisibility,
  deleteTestResult,
} from "../api/testResults";
import TestResultList from "../components/TestResultList";
import { useNavigate } from "react-router-dom";

const TestResult = ({ user }) => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  // const navigate = useNavigate();

  // useEffect(() => {
  //   if (!user || !user.id) {
  //     alert("로그인이 필요합니다.");
  //     navigate("/login");
  //   }
  // }, [user, navigate]);

  const fetchResults = async () => {
    setLoading(true);
    try {
      const data = await getTestResults();
      setResults(data);
    } catch (error) {
      console.log("가져오기 에러=>", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchResults();
  }, []);

  const handleUpdate = async () => {
    fetchResults();
  };

  const handleDelete = async (id) => {
    if (window.confirm("결과를 삭제하시나요? 정말요? 진심으로?")) {
      try {
        await deleteTestResult(id);
        fetchResults();
      } catch (error) {
        console.log("삭제 에러=>", error);
      }
    }
  };

  return (
    <div className="w-full flex flex-col items-center justify-center bg-white shadow-lg rounded-lg p-8">
      <div className="bg-white max-w-2xl w-full">
        <h1 className="text-3xl font-bold text-primary-color mb-6 text-center">
          모든 테스트 결과
        </h1>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <TestResultList
            results={results}
            user={user}
            onUpdate={handleUpdate}
            onDelete={handleDelete}
          />
        )}
      </div>
    </div>
  );
};

export default TestResult;
