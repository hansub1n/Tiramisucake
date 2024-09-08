import React, { useState } from "react";
import { getUserProfile, updateProfile } from "../api/auth";
import useUserStore from "../zustand/useUserStore";

const Profile = () => {
    // 로컬스토리지에 유저토큰 가져와 넣음 -> json 파싱 귀찮
    // zustand로 변경
    // 닉네임 변경한 값 넣기
    const { user, changeNickName } = useUserStore((state) => state);

    const [userData, setUserData] = useState({
        accessToken: user.accessToken || "",
        nickname: ""
    });

    const onChangeHandle = async () => {
        const data = await getUserProfile(user.accessToken);
        console.log(data);
        if (data.success) {
            const changeData = await updateProfile(userData);
            if (changeData.success) {
                alert(changeData.message);
                changeNickName(changeData);
            } else {
                alert(changeData.message);
            }
        } else {
            alert(data.message);
        }
    };
    return (
        <div>
            <h2>프로필 수정</h2>
            <input
                type="text"
                value={userData.nickname}
                onChange={(e) => setUserData({ ...userData, nickname: e.target.value })}
                placeholder="nickname"
            />
            <button onClick={onChangeHandle}>등록</button>
        </div>
    );
};

export default Profile;
