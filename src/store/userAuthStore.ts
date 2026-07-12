import { create } from "zustand";

type User = {
    username: string;
};

type AuthState = {
    user: User | null;
    isAuthenticated: boolean;

    login: (user: User) => void;
    logout: () => void;
};

const useUserAuthStore = create<AuthState>((set) => ({
    user: null,
    isAuthenticated: false,

    login: (user) =>
        set({
            user,
            isAuthenticated: true,
        }),

    logout: () =>
        set({
            user: null,
            isAuthenticated: false,
        }),
}));

export default useUserAuthStore;