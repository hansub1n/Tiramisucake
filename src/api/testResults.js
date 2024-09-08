import axios from "axios";

const API_URL = "http://localhost:4000/testResults";
// 기존 테스결과 조회
export const getTestResults = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};
// 테스결과 등록
export const creatTestResult = async (resultData) => {
    const response = await axios.post(API_URL, resultData);
    return response.data;
};

export const deleteTestResult = async (id) => {
    const response = await axios.delete(API_URL);
    return response.data;
};

export const updateTestResultVisibility = async (id, visibility) => {
    const response = await axios.patch(API_URL, {
        visibility
    });
    return response.data;
};
