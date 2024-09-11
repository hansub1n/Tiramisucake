import axios from "axios";

const API_URL = "http://localhost:4000/testResults";

export const getTestResults = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        return console.log(error.message);
    }
};

export const creatTestResult = async (resultData) => {
    const response = await axios.post(API_URL, resultData);
    return response.data;
};

export const deleteTestResult = async (id) => {
    try {
        const response = await axios.delete(`${API_URL}/${id}`);
        return response.data;
    } catch (error) {
        return console.log(error.message);
    }
};

export const updateTestResultVisibility = async ({ id, visibility }) => {
    try {
        const response = await axios.patch(`${API_URL}/${id}`, { visibility });
        return response.data;
    } catch (error) {
        return console.log(error);
    }
};
