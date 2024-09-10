import React, { useState } from "react";
import { login } from "../api/auth";
import useUserStore from "../zustand/useUserStore";

const Login = () => {
    const { logInUser } = useUserStore((state) => state);

    const [userData, setUserData] = useState({
        id: "",
        password: ""
    });

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        const data = await login(userData);

        if (data.success) {
            alert("로그인 되었습니다.");
            logInUser(data);
        } else {
            alert(data.message);
            setUserData({
                id: "",
                password: ""
            });
        }
    };

    return (
        <div className="flex flex-col justify-center items-center">
            <h2 className="mb-16 text-5xl">로그인</h2>
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
                        type="text"
                        value={userData.password}
                        onChange={(e) => setUserData({ ...userData, password: e.target.value })}
                        placeholder="PW"
                        required
                    />
                </div>

                <button className="flex justify-center items-center w-96 h-14 bg-red-400 px-4 py-2.5 rounded-2xl shadow-md">
                    로그인
                </button>
            </form>
        </div>
    );
};

export default Login;
