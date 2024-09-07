import React, { useEffect } from "react";
import useUserStore from "../zustand/UseUserStore";
import { Link, useNavigate } from "react-router-dom";

const Layout = ({ children }) => {
    const navigate = useNavigate();
    const { user, logOutUser } = useUserStore((state) => state);

    useEffect(() => {
        console.log("Current user state:", user);
        if (!user.success) {
            // navigate("/");
        }
    }, [user, navigate]);

    const handleLogout = () => {
        logOutUser();
        navigate("/");
    };
    return (
        <div>
            <header>
                <nav>
                    <Link to="/">홈</Link>

                    {user.success ? (
                        <>
                            <Link to="/profile">프로필</Link>
                            <Link to="/test">테스트</Link>
                            <Link to="/testResults">결과보기</Link>
                            <button onClick={handleLogout}>로그아웃</button>
                        </>
                    ) : (
                        <>
                            <Link to="/signup">회원가입</Link>
                            <Link to="/login">로그인</Link>
                        </>
                    )}
                </nav>
            </header>
            <main>{children}</main>
        </div>
    );
};

export default Layout;
