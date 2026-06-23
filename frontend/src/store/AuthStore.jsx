import { create } from 'zustand';

const useAuthStore = create((set) => ({
    user: null,
    userName: '',
    email: '',
    setUser: (user) => set({ user }),
    setUserName: (userName) => set({ userName }),
    setEmail: (email) => set({ email }),
    logout: () => set({ user: null, userName: '', email: '' }),
}));

const useAuth = (selector) => useAuthStore(selector);

export { useAuth, useAuthStore };
export default useAuthStore;

