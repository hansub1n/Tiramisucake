import React, { useState } from "react";
import { getUserProfile, updateProfile } from "../api/auth";
import useUserStore from "../zustand/useUserStore";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const Profile = () => {
    const queryClient = useQueryClient();
    const { user, changeNickName } = useUserStore((state) => state);

    const [userData, setUserData] = useState({
        accessToken: user.accessToken || "",
        nickname: ""
    });

    const { isLoading, isError } = useQuery({
        queryKey: ["user", user.accessToken],
        queryFn: () => getUserProfile(user.accessToken)
    });

    const { mutate } = useMutation({
        mutationFn: updateProfile,
        onSuccess: (data) => {
            if (data.success) {
                alert(data.message);
                changeNickName(data.nickname);
                setUserData({ ...userData, nickname: "" });
                queryClient.invalidateQueries(["user"]);
            } else {
                alert(data.message);
            }
        }
    });

    const onChangeHandle = async () => {
        mutate(userData);
    };

    if (isLoading) {
        return <div>로딩 중입니다...</div>;
    }
    if (isError) {
        return <div>데이터 조회 중 오류가 발생했습니다...</div>;
    }
    return (
        <div className="flex flex-col justify-center items-center">
            <h2 className="mb-12 text-5xl">프로필 수정</h2>
            <div className="flex relative justify-center items-center">
                <input
                    className="flex w-[500px] h-[55px] bg-white shadow-md rounded-3xl p-8"
                    type="text"
                    value={userData.nickname}
                    onChange={(e) => setUserData({ ...userData, nickname: e.target.value })}
                    placeholder="nickname"
                />
                <button className="flex absolute bg-red-400 rounded-3xl p-3 right-0 mr-3" onClick={onChangeHandle}>
                    등록
                </button>
            </div>
        </div>
    );
};

export default Profile;
