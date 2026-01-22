import { create } from 'zustand';

export const useAuthStore = create((set) => ({
    isAuthenticated: localStorage.getItem('isAuthenticated') === 'true',
    user: JSON.parse(localStorage.getItem('user')) || null,
    login: (email, password) => {
        // Dummy login logic
        if (email === 'admin@demo.com' && password === 'admin') {
            const user = { name: 'Admin User', email, role: 'Admin', avatar: 'https://i.pravatar.cc/150?u=admin' };
            localStorage.setItem('isAuthenticated', 'true');
            localStorage.setItem('user', JSON.stringify(user));
            set({ isAuthenticated: true, user });
            return true;
        }
        if (email === 'viewer@demo.com' && password === 'viewer') {
            const user = { name: 'Viewer User', email, role: 'Viewer', avatar: 'https://i.pravatar.cc/150?u=viewer' };
            localStorage.setItem('isAuthenticated', 'true');
            localStorage.setItem('user', JSON.stringify(user));
            set({ isAuthenticated: true, user });
            return true;
        }
        return false;
    },
    logout: () => {
        localStorage.removeItem('isAuthenticated');
        localStorage.removeItem('user');
        set({ isAuthenticated: false, user: null });
    },
}));
