import React, { useState } from "react";
import { login } from "../api/auth";
import { useNavigate } from "react-router-dom";
import useUserStore from "../zustand/UseUserStore";

const Login = () => {
    const navigate = useNavigate();
    const { loginUser } = useUserStore((state) => state);

    const [userData, setUserData] = useState({
        id: "",
        password: ""
    });

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        const data = await login(userData);

        if (data.success) {
            alert("로그인 되었습니다.");
            loginUser(data);
            navigate("/");
        } else {
            alert(data.message);
            setUserData({
                id: "",
                password: ""
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
                <button>로그인</button>
            </form>
        </div>
    );
};

export default Login;
