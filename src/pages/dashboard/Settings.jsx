import { Bell, Lock, Moon, Shield, User } from "lucide-react";
import { useAuthStore } from "../../store/authStore";
import { useThemeStore } from "../../store/themeStore";

export default function Settings() {
    const { theme, toggleTheme } = useThemeStore();
    const { user } = useAuthStore();

    return (
        <div className='max-w-4xl mx-auto space-y-6'>
            <h1 className='text-2xl font-bold text-slate-900 dark:text-white'>Settings</h1>

            {/* Profile Details */}
            <div className='bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 overflow-hidden'>
                <div className='p-6 border-b border-slate-100 dark:border-slate-700'>
                    <h2 className='text-lg font-semibold text-slate-900 dark:text-white flex items-center'>
                        <User className="w-5 h-5 mr-2 text-indigo-600" />
                        Profile Information
                    </h2>
                </div>
                <div className='p-6 space-y-4'>
                    <div className='flex items-center gap-4'>
                        <div className='h-20 w-20 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center overflow-hidden'>
                            {user?.avatar ? <img src={user.avatar} className="w-full h-full object-cover" /> : <User className="w-10 h-10 text-slate-400" />}
                        </div>
                        <div>
                            <button className='text-sm text-indigo-600 font-medium hover:text-indigo-500'>Change Avatar</button>
                            <p className='text-xs text-slate-500 mt-1'>JPG, GIF or PNG. 1MB Max.</p>
                        </div>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                        <div>
                            <label className='block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1'>Full Name</label>
                            <input type="text" defaultValue={user?.name || "Admin User"} className='w-full px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none' />
                        </div>
                        <div>
                            <label className='block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1'>Email Address</label>
                            <input type="email" defaultValue={user?.email || "admin@demo.com"} className='w-full px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none' />
                        </div>
                    </div>
                </div>
            </div>

            {/* Appearance */}
            <div className='bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 overflow-hidden'>
                <div className='p-6 border-b border-slate-100 dark:border-slate-700'>
                    <h2 className='text-lg font-semibold text-slate-900 dark:text-white flex items-center'>
                        <Moon className="w-5 h-5 mr-2 text-indigo-600" />
                        Appearance
                    </h2>
                </div>
                <div className='p-6 flex items-center justify-between'>
                    <div>
                        <p className='font-medium text-slate-900 dark:text-white'>Dark Mode</p>
                        <p className='text-sm text-slate-500 dark:text-slate-400'>Switch between light and dark themes.</p>
                    </div>
                    <button
                        onClick={toggleTheme}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${theme === 'dark' ? 'bg-indigo-600' : 'bg-slate-200'}`}
                    >
                        <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${theme === 'dark' ? 'translate-x-6' : 'translate-x-1'}`} />
                    </button>
                </div>
            </div>

            {/* Notifications */}
            <div className='bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 overflow-hidden'>
                <div className='p-6 border-b border-slate-100 dark:border-slate-700'>
                    <h2 className='text-lg font-semibold text-slate-900 dark:text-white flex items-center'>
                        <Bell className="w-5 h-5 mr-2 text-indigo-600" />
                        Notifications
                    </h2>
                </div>
                <div className='p-6 space-y-4'>
                    {['Email Notifications', 'Push Notifications', 'Weekly Reports'].map((item, idx) => (
                        <div key={idx} className='flex items-center justify-between'>
                            <span className='text-slate-700 dark:text-slate-300'>{item}</span>
                            <input type="checkbox" defaultChecked className="w-5 h-5 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
