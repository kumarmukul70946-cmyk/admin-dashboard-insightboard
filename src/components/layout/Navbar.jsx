import { Bell, Menu, Moon, Search, Sun, User } from "lucide-react";
import { useAuthStore } from "../../store/authStore";
import { useThemeStore } from "../../store/themeStore";

export default function Navbar({ onMenuClick }) {
    const { theme, toggleTheme } = useThemeStore();
    const { user } = useAuthStore();

    return (
        <header className="sticky top-0 z-30 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 h-16 px-4 sm:px-6 lg:px-8 flex items-center justify-between">
            <div className="flex items-center">
                <button
                    onClick={onMenuClick}
                    className="p-2 -ml-2 mr-2 lg:hidden text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
                >
                    <Menu className="w-6 h-6" />
                </button>

                {/* Search Bar - Hidden on mobile for simplicity or can be an icon */}
                <div className="hidden md:flex relative text-slate-400 focus-within:text-indigo-500">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Search className="h-5 w-5" />
                    </div>
                    <input
                        type="text"
                        placeholder="Search..."
                        className="block w-64 pl-10 pr-3 py-2 border border-slate-200 dark:border-slate-700 rounded-lg leading-5 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm transition duration-150 ease-in-out"
                    />
                </div>
            </div>

            <div className="flex items-center gap-2 sm:gap-4">
                <button
                    onClick={toggleTheme}
                    className="p-2 text-slate-500 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-amber-400 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                >
                    {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                </button>

                <button className="relative p-2 text-slate-500 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                    <Bell className="w-5 h-5" />
                    <span className="absolute top-1.5 right-1.5 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-white dark:ring-slate-900"></span>
                </button>

                <div className="flex items-center gap-3 pl-4 border-l border-slate-200 dark:border-slate-700">
                    <div className="hidden sm:block text-right">
                        <p className="text-sm font-medium text-slate-900 dark:text-white">{user?.name || 'User'}</p>
                        <p className="text-xs text-slate-500 dark:text-slate-400">{user?.role || 'Admin'}</p>
                    </div>
                    <div className="h-9 w-9 rounded-full bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center border border-indigo-200 dark:border-indigo-800">
                        {user?.avatar ? (
                            <img src={user.avatar} alt="User" className="h-9 w-9 rounded-full object-cover" />
                        ) : (
                            <User className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
}
