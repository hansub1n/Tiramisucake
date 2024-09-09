import React, { useEffect, useState } from "react";
import { deleteTestResult, getTestResults, updateTestResultVisibility } from "../api/testResults";
import useUserStore from "../zustand/useUserStore";

const TestResults = () => {
    const { user } = useUserStore((state) => state);
    // 테스트 결과 데이터 중 visibility true인 데이터만 가지고오도록 필터
    const [testResults, setTestResults] = useState(null);

    const fetchData = async () => {
        const data = await getTestResults();
        console.log(data);
        const filteredData = data.filter((d) => d.visibility === true || d.userId === user.userId);
        setTestResults(filteredData);
    };

    useEffect(() => {
        fetchData();
    }, []);

    const visibilityHandler = async (id) => {
        await updateTestResultVisibility(id, true);
        fetchData();
    };
    const hiddenHandler = async (id) => {
        await updateTestResultVisibility(id, false);
        fetchData();
    };

    const removeHandler = async (id) => {
        await deleteTestResult(id);
        fetchData();
    };

    return (
        <div>
            {testResults?.map((testResult) => {
                return (
                    <div key={testResult.id}>
                        <h3>{testResult.nickname}</h3>
                        <span>{testResult.date}</span>
                        <h2>{testResult.testResult}</h2>
                        <div>
                            {user.userId !== testResult.userId ? null : (
                                <>
                                    <div>
                                        {testResult.visibility ? (
                                            <button onClick={() => hiddenHandler(testResult.id)}>비공개</button>
                                        ) : (
                                            <button onClick={() => visibilityHandler(testResult.id)}>공개</button>
                                        )}
                                    </div>
                                    <button onClick={() => removeHandler(testResult.id)}>삭제</button>
                                </>
                            )}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default TestResults;
