import axios from "axios";
import React, { useState } from "react";
import { register } from "../api/auth";
import { useNavigate } from "react-router-dom";

const Signup = () => {
    const navigate = useNavigate();
    const [userData, setUserData] = useState({
        id: "",
        password: "",
        nickname: ""
    });

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        const { message, success } = await register(userData);

        if (success) {
            alert(message);
            navigate("/");
        } else {
            alert(message);
            setUserData({
                id: "",
                password: "",
                nickname: ""
            });
        }
    };

    return (
        <div>
            <form onSubmit={onSubmitHandler}>
                <input
                    type="text"
                    value={userData.id}
                    onChange={(e) => setUserData({ ...userData, id: e.target.value })}
                    placeholder="ID"
                    required
                />
                <input
                    type="text"
                    value={userData.password}
                    onChange={(e) => setUserData({ ...userData, password: e.target.value })}
                    placeholder="PW"
                    required
                />
                <input
                    type="text"
                    value={userData.nickname}
                    onChange={(e) => setUserData({ ...userData, nickname: e.target.value })}
                    placeholder="NickName"
                    required
                />

                <button>회원가입</button>
            </form>
        </div>
    );
};

export default Signup;
