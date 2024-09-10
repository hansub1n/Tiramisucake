import React from "react";
import useUserStore from "../zustand/useUserStore";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
    const { user } = useUserStore((state) => state);

    const onClickHandler = () => {
        if (user.success) {
            navigate("/test");
        } else {
            alert("로그인이 필요합니다. 로그인 페이지로 이동합니다.");
            navigate("/login");
        }
    };

    return (
        <div className="flex flex-col justify-center items-center">
            <h2 className="mb-8 text-5xl">MBTI 테스트</h2>
            <button
                className="flex absolute top-1/4 justify-center items-center text-xl h-12 bg-red-400 p-5 shadow-md rounded-3xl "
                onClick={onClickHandler}
            >
                내 성격 알아보러 가기
            </button>
        </div>
    );
};

export default Home;
