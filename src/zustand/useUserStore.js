import { create } from "zustand";
import { persist } from "zustand/middleware";

const useUserStore = create(
    persist(
        (set) => ({
            user: {
                accessToken: "",
                avatar: null,
                nickname: "",
                success: false,
                userId: ""
            },
            logInUser: (data) =>
                set(() => ({
                    user: {
                        accessToken: data.accessToken,
                        avatar: data.avatar,
                        nickname: data.nickname,
                        success: data.success,
                        userId: data.userId
                    }
                })),
            logOutUser: () => {
                set({
                    user: {
                        accessToken: "",
                        avatar: null,
                        nickname: "",
                        success: false,
                        userId: ""
                    }
                });
            },
            changeNickName: (data) =>
                set((state) => ({
                    user: {
                        ...state.user,
                        nickname: data
                    }
                }))
        }),
        {
            name: "user"
        }
    )
);

export default useUserStore;
