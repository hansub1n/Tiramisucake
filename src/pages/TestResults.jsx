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
        <div className="flex flex-col justify-center items-center mb-16">
            <h2 className="mb-16 text-5xl">모든 테스트 결과</h2>
            {testResults?.map((testResult) => {
                return (
                    <div
                        className="flex relative flex-col justify-center items-center m-12 w-[50rem] bg-white h-52 rounded-3xl shadow-md"
                        key={testResult.id}
                    >
                        <div>
                            <h3 className="flex absolute top-7 left-7 text-xl">{testResult.nickname}</h3>
                            <span className="flex absolute top-7 right-7">{testResult.date}</span>
                        </div>

                        <h2 className="text-4xl">{testResult.testResult}</h2>
                        <div className="flex absolute bottom-7 right-7 gap-3">
                            {user.userId !== testResult.userId ? null : (
                                <>
                                    <div>
                                        {testResult.visibility ? (
                                            <button
                                                className="bg-slate-600 p-4 rounded-2xl"
                                                onClick={() => hiddenHandler(testResult.id)}
                                            >
                                                비공개
                                            </button>
                                        ) : (
                                            <button
                                                className="bg-amber-100 p-4 rounded-2xl"
                                                onClick={() => visibilityHandler(testResult.id)}
                                            >
                                                공개
                                            </button>
                                        )}
                                    </div>
                                    <button
                                        className="bg-red-400 p-4 rounded-2xl"
                                        onClick={() => removeHandler(testResult.id)}
                                    >
                                        삭제
                                    </button>
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
