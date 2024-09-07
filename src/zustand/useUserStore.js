import { create } from "zustand";

const useUserStore = create((set) => {
    return {
        user: {
            accessToken: "",
            avatar: null,
            nickname: "",
            success: false,
            userId: ""
        },
        loginUser: (data) =>
            set(() => ({
                user: {
                    accessToken: data.accessToken,
                    avatar: data.avatar,
                    nickname: data.nickname,
                    success: data.success,
                    userId: data.userId
                }
            }))
    };
});

export default useUserStore;
