import React, { useState } from "react";
import TestForm from "../components/TestForm";
import TestResult from "../components/TestResult";

const Test = () => {
    const [submit, setSubmit] = useState(false);
    const [mbtiResult, setMbtiResult] = useState("");
    if (!submit) {
        return <TestForm setSubmit={setSubmit} setMbtiResult={setMbtiResult} />;
    } else {
        return <TestResult setSubmit={setSubmit} mbtiResult={mbtiResult} />;
    }
};

export default Test;
