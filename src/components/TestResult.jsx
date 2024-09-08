import React from "react";
import { Link } from "react-router-dom";

const TestResult = ({ setSubmit, mbtiResult }) => {
    return (
        <div>
            <h2>테스트 결과 : {mbtiResult}</h2>
            <button onClick={() => setSubmit(false)}>다시하기</button>
            <Link to="/testResults">
                <button>결과 페이지로 이동하기</button>
            </Link>
        </div>
    );
};

export default TestResult;
