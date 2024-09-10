import React from "react";
import { Link } from "react-router-dom";
import { deleteTestResult } from "../api/testResults";
import aginImg from "../assets/agin.png";

const TestResult = ({ setSubmit, mbtiResult, resultId }) => {
    const retryTest = async () => {
        await deleteTestResult(resultId);
        setSubmit(false);
    };
    return (
        <div className="flex flex-col justify-center items-center">
            <div className="flex justify-center items-center gap-5 mb-24 ">
                <h2 className="text-5xl">테스트 결과 : {mbtiResult}</h2>
                <button
                    className="relative flex p-1.5 rounded-3xl bg-transparent overflow-hidden group transition-all duration-200"
                    onClick={retryTest}
                >
                    <img src={aginImg} className="w-10 h-10" />
                    <span className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-200"></span>
                </button>
            </div>
            <Link
                className="flex justify-center items-center bg-red-400 w-52 p-4 rounded-3xl shadow-md"
                to="/testResults"
            >
                결과 공유하기
            </Link>
        </div>
    );
};

export default TestResult;
