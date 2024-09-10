import axios from "axios";

const API_URL = "http://localhost:3000/testResults";

// 모든 테스트 결과 가져오기
export const getTestResults = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching test results:", error);
    throw error;
  }
};

// 새로운 테스트 결과 생성하기
export const createTestResult = async (resultData) => {
  try {
    const response = await axios.post(API_URL, resultData);
    return response.data;
  } catch (error) {
    console.error("Error creating test result:", error);
    throw error;
  }
};

// 테스트 결과 삭제하기
export const deleteTestResult = async (id) => {
  try {
    await axios.delete(`${API_URL}/${id}`);
  } catch (error) {
    console.error("Error deleting test result:", error);
    throw error;
  }
};

// 테스트 결과의 공개/비공개 상태 업데이트하기
export const updateTestResultVisibility = async (id, visibility) => {
  try {
    await axios.patch(`${API_URL}/${id}`, { visibility });
  } catch (error) {
    console.error("Error updating test result visibility:", error);
    throw error;
  }
};
