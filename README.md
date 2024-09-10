# Tiramisucake (T라 미숙해)

#### 리액트 심화 개인과제

T라 미숙해는 MBTI 성격 유형 테스트 서비스 제공하는 웹 애플리케이션입니다. 사용자는 테스트를 통해 자신의 MBTI 성격 유형을 확인할 수 있으며, 결과를 다른 사용자들과 공유할 수 있습니다. 로그인을 통해 사용자 고유의 프로필을 관리할 수 있습니다.<br/><br/>

#### 프로젝트 구조

<details>
<summary>프로젝트 구조</summary>
...
📦Tiramisucake<br/>
 ┣ 📂public<br/>
 ┃ ┗ 📜vite.svg<br/>
 ┣ 📂src<br/>
 ┃ ┣ 📂api<br/>
 ┃ ┃ ┣ 📜auth.js<br/>
 ┃ ┃ ┗ 📜testResults.js<br/>
 ┃ ┣ 📂assets<br/>
 ┃ ┃ ┣ 📜agin.png<br/>
 ┃ ┃ ┗ 📜react.svg<br/>
 ┃ ┣ 📂components<br/>
 ┃ ┃ ┣ 📜AuthForm.jsx(작업중)<br/>
 ┃ ┃ ┣ 📜Layout.jsx<br/>
 ┃ ┃ ┣ 📜ProtectedRoute.jsx<br/>
 ┃ ┃ ┣ 📜TestForm.jsx<br/>
 ┃ ┃ ┗ 📜TestResult.jsx<br/>
 ┃ ┣ 📂data<br/>
 ┃ ┃ ┗ 📜questions.js<br/>
 ┃ ┣ 📂pages<br/>
 ┃ ┃ ┣ 📜Home.jsx<br/>
 ┃ ┃ ┣ 📜Login.jsx<br/>
 ┃ ┃ ┣ 📜Profile.jsx<br/>
 ┃ ┃ ┣ 📜Signup.jsx<br/>
 ┃ ┃ ┣ 📜Test.jsx<br/>
 ┃ ┃ ┗ 📜TestResults.jsx<br/>
 ┃ ┣ 📂shared<br/>
 ┃ ┃ ┗ 📜Router.jsx<br/>
 ┃ ┣ 📂zustand<br/>
 ┃ ┃ ┗ 📜useUserStore.js<br/>
 ┃ ┣ 📜App.jsx<br/>
 ┃ ┣ 📜index.css<br/>
 ┃ ┗ 📜main.jsx<br/>
 ┣ 📜.gitignore<br/>
 ┣ 📜.prettierrc<br/>
 ┣ 📜db.json<br/>
 ┣ 📜eslint.config.js<br/>
 ┣ 📜index.html<br/>
 ┣ 📜package.json<br/>
 ┣ 📜postcss.config.js<br/>
 ┣ 📜README.md<br/>
 ┣ 📜tailwind.config.js<br/>
 ┣ 📜vite.config.js<br/>
 ┗ 📜yarn.lock<br/>
 ...
</details>

#### 실행 방법

1.  **홈페이지**<br/>

    -   "내 성격 알아보기" 버튼을 클릭하여 MBTI 테스트를 시작합니다. 테스트를 진행하려면 로그인이 필요합니다. 로그인하지 않은 경우, 로그인 페이지로 이동하며, 회원가입을 통해 계정을 생성할 수 있습니다.

2.  **테스트 페이지**<br/>

    -   MBTI 질문에 답변하고 제출 후, 성격 유형 결과를 확인합니다. 결과 페이지에서 '다시하기' 또는 '결과 공유' 버튼을 사용할 수 있습니다.

3.  **테스트 결과 페이지**<br/>

    -   자신의 테스트 결과를 공개 또는 비공개로 설정하거나 삭제할 수 있습니다. 다른 사용자의 공개된 결과도 조회할 수 있습니다.

4.  **프로필 변경 페이지**<br/>

    -   사용자의 닉네임을 수정할 수 있습니다.<br/><br/>

#### 주요 기능

-   **기능 요약**<br/>

    -   **Create**: `post` 회원가입 및 로그인 & 테스트 결과 저장<br/>
    -   **Read**: `get` 테스트 결과 출력 & 공개된 테스트 결과 조회<br/>
    -   **Update**: `put` 프로필 닉네임 변경 & 테스트 결과 공개/비공개 설정<br/>
    -   **Delete**: `filter` 테스트 결과 삭제<br/>

-   **페이지 이동**<br/>

    -   `react-router-dom` - `navigate` 페이지 간 이동<br/>

-   **상태 관리**<br/>
    -   `Zustand` 사용자 로그인 상태 및 프로필 변경 관리

#### 개발 환경

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
