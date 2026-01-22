import { Navigate, Route, Routes } from "react-router-dom";
import DashboardLayout from "../components/layout/DashboardLayout";
import ProtectedRoute from "../components/layout/ProtectedRoute";
import Login from "../pages/auth/Login";
import Dashboard from "../pages/dashboard/Dashboard";
import Orders from "../pages/dashboard/Orders";
import Products from "../pages/dashboard/Products";
import Reports from "../pages/dashboard/Reports";
import Settings from "../pages/dashboard/Settings";
import Users from "../pages/dashboard/Users";
import { useAuthStore } from "../store/authStore";

export default function AppRoutes() {
    const { isAuthenticated, user } = useAuthStore();

    return (
        <Routes>
            {/* Public Route */}
            <Route path="/login" element={!isAuthenticated ? <Login /> : <Navigate to="/dashboard" />} />

            {/* Private Routes */}
            <Route element={<ProtectedRoute />}>
                <Route element={<DashboardLayout />}>
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/users" element={<Users />} />
                    <Route path="/orders" element={<Orders />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/reports" element={<Reports />} />
                    <Route path="/settings" element={user?.role === 'Admin' ? <Settings /> : <Navigate to="/dashboard" replace />} />
                </Route>
            </Route>

            {/* Redirects */}
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route path="*" element={<Navigate to="/dashboard" replace />} />
        </Routes>
    );
}
