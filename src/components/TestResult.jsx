import React from "react";
import { Link } from "react-router-dom";
import { deleteTestResult } from "../api/testResults";

const TestResult = ({ setSubmit, mbtiResult, resultId }) => {
    const retryTest = async () => {
        await deleteTestResult(resultId);
        setSubmit(false);
    };
    return (
        <div>
            <h2>테스트 결과 : {mbtiResult}</h2>
            <button onClick={retryTest}>다시하기</button>
            <Link to="/testResults">
                <button>결과 페이지로 이동하기</button>
            </Link>
        </div>
    );
};

export default TestResult;
