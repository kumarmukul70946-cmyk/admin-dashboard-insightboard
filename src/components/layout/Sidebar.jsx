import { BarChart3, Box, Home, LayoutDashboard, LogOut, Settings, ShoppingBag, Users as UsersIcon } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useAuthStore } from "../../store/authStore";

export default function Sidebar({ isOpen, setIsOpen }) { // Assuming mobile drawer control passed as props or managed locally
    const location = useLocation();
    const { user, logout } = useAuthStore();

    const menuItems = [
        { name: "Dashboard", icon: LayoutDashboard, path: "/dashboard" },
        { name: "Users", icon: UsersIcon, path: "/users" },
        { name: "Orders", icon: ShoppingBag, path: "/orders" },
        { name: "Products", icon: Box, path: "/products" },
        { name: "Reports", icon: BarChart3, path: "/reports" },
        { name: "Settings", icon: Settings, path: "/settings" },
    ].filter(item => item.name !== 'Settings' || user?.role === 'Admin');

    const isActive = (path) => location.pathname === path;

    return (
        <>
            {/* Mobile Overlay */}
            <div
                className={`fixed inset-0 bg-slate-900/50 z-40 lg:hidden transition-opacity ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
                onClick={() => setIsOpen(false)}
            ></div>

            {/* Sidebar Container */}
            <aside className={`fixed top-0 left-0 z-50 h-screen w-64 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 transition-transform transform lg:translate-x-0 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
                <div className="flex flex-col h-full">
                    {/* Logo */}
                    <div className="h-16 flex items-center px-8 border-b border-slate-100 dark:border-slate-800">
                        <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center mr-3">
                            <BarChart3 className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-xl font-bold text-slate-900 dark:text-white">InsightBoard</span>
                    </div>

                    {/* Navigation */}
                    <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
                        {menuItems.map((item) => (
                            <Link
                                key={item.path}
                                to={item.path}
                                onClick={() => setIsOpen(false)} // Close drawer on mobile click
                                className={`flex items-center px-4 py-3 text-sm font-medium rounded-xl transition-all ${isActive(item.path)
                                    ? "bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400"
                                    : "text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-slate-200"
                                    }`}
                            >
                                <item.icon className={`w-5 h-5 mr-3 ${isActive(item.path) ? "text-indigo-600 dark:text-indigo-400" : "text-slate-400 group-hover:text-slate-500"}`} />
                                {item.name}
                            </Link>
                        ))}
                    </nav>

                    {/* Footer / Logout */}
                    <div className="p-4 border-t border-slate-100 dark:border-slate-800">
                        <button
                            onClick={logout}
                            className="flex items-center w-full px-4 py-3 text-sm font-medium text-red-600 dark:text-red-400 rounded-xl hover:bg-red-50 dark:hover:bg-red-900/10 transition-colors"
                        >
                            <LogOut className="w-5 h-5 mr-3" />
                            Sign Out
                        </button>
                    </div>
                </div>
            </aside>
        </>
    );
}
