import React from "react";
import { deleteTestResult, getTestResults, updateTestResultVisibility } from "../api/testResults";
import useUserStore from "../zustand/useUserStore";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const TestResults = () => {
    const queryClient = useQueryClient();
    const { user } = useUserStore((state) => state);

    const fetchData = async () => {
        const data = await getTestResults();
        return data.filter((d) => d.visibility === true || d.userId === user.userId);
    };

    const {
        data: testResults,
        isPending,
        isError
    } = useQuery({
        queryKey: ["testResults"],
        queryFn: fetchData
    });

    const { mutate: updateVisibility } = useMutation({
        mutationFn: updateTestResultVisibility,
        onSuccess: (data, variables) => {
            alert(`테스트 결과 ${variables.visibility ? "공개" : "비공개"} 처리되었습니다.`);
            queryClient.invalidateQueries(["testResults"]);
        }
    });

    const { mutate: deleteResult } = useMutation({
        mutationFn: deleteTestResult,
        onSuccess: () => {
            alert("테스트 결과가 삭제되었습니다.");
            queryClient.invalidateQueries(["testResults"]);
        }
    });

    const removeHandler = (id) => {
        const userConfirmed = confirm("테스트 결과 삭제하시겠습니까?");
        if (userConfirmed) {
            deleteResult(id);
        }
    };

    const visibilityHandler = (id, isvisible) => {
        updateVisibility({ id, visibility: isvisible });
    };

    const formatDate = (dateString) => {
        const [year, month, day] = dateString.split("T")[0].split("-");
        return `${year}-${month}-${day}`;
    };

    if (isPending) {
        return <div>로딩 중입니다...</div>;
    }

    if (isError) {
        return <div>데이터 조회 중 오류가 발생했습니다...</div>;
    }

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
                            <span className="flex absolute top-7 right-7">{formatDate(testResult.date)}</span>
                        </div>

                        <h2 className="text-4xl">{testResult.testResult}</h2>
                        <div className="flex absolute bottom-7 right-7 gap-3">
                            {user.userId !== testResult.userId ? null : (
                                <>
                                    <button
                                        className={`p-4 rounded-2xl ${
                                            testResult.visibility ? "bg-slate-600" : "bg-amber-100"
                                        }`}
                                        onClick={() => visibilityHandler(testResult.id, !testResult.visibility)}
                                    >
                                        {testResult.visibility ? "비공개" : "공개"}
                                    </button>
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
