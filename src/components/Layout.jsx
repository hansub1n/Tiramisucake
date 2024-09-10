import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import useUserStore from "../zustand/useUserStore";

const Layout = ({ children }) => {
    const navigate = useNavigate();
    const { user, logOutUser } = useUserStore((state) => state);

    useEffect(() => {
        navigate("/");
    }, [user.success]);

    const handleLogout = () => {
        logOutUser();
    };

    return (
        <div className="flex flex-col font-notoSansKR ">
            <header className="w-full h-19 py-4 px-16 shadow">
                <nav className="flex flex-row  justify-between items-center text-xl top">
                    <Link to="/" className="flex items-center">
                        홈
                    </Link>

                    {user.success ? (
                        <div className="flex gap-5 items-center">
                            <Link to="/profile">프로필</Link>
                            <Link to="/test">테스트</Link>
                            <Link to="/testResults">결과보기</Link>
                            <button onClick={handleLogout}>로그아웃</button>
                        </div>
                    ) : (
                        <div className="flex gap-5 items-center">
                            <Link to="/signup">회원가입</Link>
                            <Link to="/login">로그인</Link>
                        </div>
                    )}
                </nav>
            </header>
            <main className=" flex justify-center mt-20">{children}</main>
        </div>
    );
};

export default Layout;
