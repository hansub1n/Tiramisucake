import React from "react";

const Layout = ({ children }) => {
    //유저 정보 가지고 오기
    //유저 정보 없으면 회원가입 혹은 로그인 페이지 이동

    return (
        <div>
            <nav>
                {/* 유저 존재 */}
                <Link to="/">홈</Link>
                <Link to="/test">테스트</Link>
                <Link to="/testresult">결과보기</Link>
                <Link to="/signup">회원가입</Link>
                <button>로그아웃</button>
                {/* 유저 존재 X */}
                <Link to="/signup">회원가입</Link>
                <Link to="/login">로그인</Link>
            </nav>
            <main>{children}</main>
        </div>
    );
};

export default Layout;
