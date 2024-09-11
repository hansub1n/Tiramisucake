import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../api/auth";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const Signup = () => {
    const queryClient = useQueryClient();
    const navigate = useNavigate();
    const [userData, setUserData] = useState({
        id: "",
        password: "",
        nickname: ""
    });

    const { mutate } = useMutation({
        mutationFn: register,
        onSuccess: (data) => {
            if (data.success) {
                alert(data.message);
                navigate("/");
                queryClient.invalidateQueries(["user"]);
            } else {
                alert(data.message);
                setUserData({
                    id: "",
                    password: "",
                    nickname: ""
                });
            }
        }
    });

    const onSubmitHandler = (e) => {
        e.preventDefault();
        mutate(userData);
    };

    return (
        <div className="flex flex-col justify-center items-center">
            <h2 className="mb-16 text-5xl">회원가입</h2>
            <form className="flex flex-col justify-center items-center gap-8" onSubmit={onSubmitHandler}>
                <div>
                    <input
                        className="flex w-96 h-14 bg-white px-4 py-2.5 rounded-t-lg shadow-md border-b-4 "
                        type="text"
                        value={userData.id}
                        onChange={(e) => setUserData({ ...userData, id: e.target.value })}
                        placeholder="ID"
                        required
                    />
                    <input
                        className="flex w-96 h-14 bg-white px-4 py-2.5 rounded-b-lg shadow-md "
                        type="password"
                        value={userData.password}
                        onChange={(e) => setUserData({ ...userData, password: e.target.value })}
                        placeholder="PW"
                        required
                    />
                </div>
                <input
                    className="flex w-96 h-14 px-4 py-2.5 bg-white shadow-md rounded-2xl"
                    type="text"
                    value={userData.nickname}
                    onChange={(e) => setUserData({ ...userData, nickname: e.target.value })}
                    placeholder="NickName"
                    required
                />

                <button className="flex justify-center items-center w-96 h-14 bg-red-400 px-4 py-2.5 rounded-2xl shadow-md">
                    회원가입
                </button>
            </form>
        </div>
    );
};

export default Signup;
