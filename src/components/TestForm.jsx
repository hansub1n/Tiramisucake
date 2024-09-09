import React, { useState } from "react";
import { questions } from "../data/questions";
import { creatTestResult } from "../api/testResults";
import useUserStore from "../zustand/useUserStore";

const TestForm = ({ setSubmit, setMbtiResult, setResultId }) => {
    const { user } = useUserStore((state) => state);

    const [answers, setAnswers] = useState({});
    console.log(answers);

    const updateAnswers = (answer, type, id) => {
        let value = "";

        if (type === "E/I") {
            value = answer === "예" ? "E" : "I";
        } else if (type === "S/N") {
            value = answer === "예" ? "S" : "N";
        } else if (type === "T/F") {
            value = answer === "예" ? "T" : "F";
        } else if (type === "J/P") {
            value = answer === "예" ? "J" : "P";
        }

        setAnswers({ ...answers, [id]: value });
    };

    const testResult = async (answers) => {
        const answersArr = Object.values(answers);
        if (answersArr.length === 20) {
            const result = {};
            answersArr.forEach((answer) => {
                result[answer] = (result[answer] || 0) + 1;
            });
            const { E, I, S, N, T, F, J, P } = result;
            const mbtiResult = (E > I ? "E" : "I") + (S > N ? "S" : "N") + (T > F ? "T" : "F") + (J > P ? "J" : "P");

            setMbtiResult(mbtiResult);
            setSubmit(true);
            //테스트 결과 저장하기
            const resultData = {
                userId: user.userId,
                nickname: user.nickname,
                testResult: mbtiResult,
                date: new Date().toISOString(),
                visibility: false
            };
            const data = await creatTestResult(resultData);
            const resultId = data.id;
            setResultId(resultId);
        } else {
            alert("선택하지 않은 문항이 있습니다.");
        }
    };

    return (
        <div>
            <h2>MBTI 테스트</h2>
            {questions.map((q) => {
                return (
                    <form key={q.id}>
                        <span>{q.question}</span>
                        {q.options.map((answer, index) => {
                            return (
                                <div key={answer[index]}>
                                    <input
                                        type="radio"
                                        name={q.id}
                                        value={answer}
                                        onClick={() => updateAnswers(answer, q.type, q.id)}
                                    />
                                    {answer}
                                </div>
                            );
                        })}
                    </form>
                );
            })}
            <button onClick={() => testResult(answers)}>제출</button>
        </div>
    );
};

export default TestForm;
