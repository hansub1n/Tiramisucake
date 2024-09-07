import axios from "axios";

// api 통신
const API_URL = "https://moneyfulpublicpolicy.co.kr";

// 회원가입 정보 등록
export const register = async (userData) => {
    try {
        const response = await axios.post(`${API_URL}/register`, userData);
        return response.data;
    } catch (error) {
        return error.response.data;
    }
};
// 로그인 정보
export const login = async (userData) => {
    try {
        const response = await axios.post(`${API_URL}/login`, userData);
        return response.data;
    } catch (error) {
        return error.response.data;
    }
};
// 프로필 정보 가져오기
export const getUserProfile = async (accessToken) => {
    const response = await axios.get(`${API_URL}/user`, {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`
        }
    });
    return response.data;
};
// 프로필 업데이트
export const updateProfile = async (formData) => {
    const response = await axios.patch(`${API_URL}/user`, formData);
    return response.data;
};
