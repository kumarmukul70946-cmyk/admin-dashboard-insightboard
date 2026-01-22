import { CreditCard, DollarSign, Package, ShoppingCart, TrendingUp, Users } from "lucide-react";

export const statsData = [
    { title: "Total Revenue", value: "$45,231.89", icon: DollarSign, change: "+20.1%", trend: "up", color: "text-green-500" },
    { title: "Subscriptions", value: "+2350", icon: Users, change: "+180.1%", trend: "up", color: "text-blue-500" },
    { title: "Sales", value: "+12,234", icon: CreditCard, change: "+19%", trend: "up", color: "text-orange-500" },
    { title: "Active Now", value: "+573", icon: TrendingUp, change: "+201", trend: "up", color: "text-purple-500" },
];

export const mockUsers = [
    { id: 1, name: "Alice Johnson", email: "alice@example.com", status: "Active", role: "Admin", image: "https://i.pravatar.cc/150?u=1" },
    { id: 2, name: "Bob Smith", email: "bob@example.com", status: "Inactive", role: "User", image: "https://i.pravatar.cc/150?u=2" },
    { id: 3, name: "Charlie Brown", email: "charlie@example.com", status: "Active", role: "User", image: "https://i.pravatar.cc/150?u=3" },
    { id: 4, name: "Diana Prince", email: "diana@example.com", status: "Active", role: "Manager", image: "https://i.pravatar.cc/150?u=4" },
    { id: 5, name: "Evan Wright", email: "evan@example.com", status: "Blocked", role: "User", image: "https://i.pravatar.cc/150?u=5" },
];

export const mockOrders = [
    { id: "#ORD-7234", customer: "Alice Johnson", amount: "$120.50", status: "Completed", date: "2023-10-25" },
    { id: "#ORD-7235", customer: "Bob Smith", amount: "$85.00", status: "Pending", date: "2023-10-26" },
    { id: "#ORD-7236", customer: "Charlie Brown", amount: "$250.00", status: "Completed", date: "2023-10-26" },
    { id: "#ORD-7237", customer: "Diana Prince", amount: "$50.00", status: "Failed", date: "2023-10-27" },
    { id: "#ORD-7238", customer: "Evan Wright", amount: "$99.99", status: "Processing", date: "2023-10-28" },
];

export const mockProducts = [
    { id: 1, name: "Wireless Headphones", category: "Electronics", price: "$199.99", stock: 15, status: "In Stock" },
    { id: 2, name: "Smart Watch", category: "Electronics", price: "$299.99", stock: 8, status: "Low Stock" },
    { id: 3, name: "Running Shoes", category: "Fashion", price: "$89.99", stock: 50, status: "In Stock" },
    { id: 4, name: "Leather Jacket", category: "Fashion", price: "$150.00", stock: 0, status: "Out of Stock" },
    { id: 5, name: "Coffee Maker", category: "Home", price: "$75.00", stock: 20, status: "In Stock" },
];

export const salesData = [
    { name: "Jan", sales: 4000 },
    { name: "Feb", sales: 3000 },
    { name: "Mar", sales: 5000 },
    { name: "Apr", sales: 4500 },
    { name: "May", sales: 6000 },
    { name: "Jun", sales: 5500 },
    { name: "Jul", sales: 7000 },
];

export const categoryData = [
    { name: "Electronics", value: 400 },
    { name: "Fashion", value: 300 },
    { name: "Home", value: 300 },
    { name: "Others", value: 200 },
];

export const recentActivity = [
    { id: 1, user: "Alice Johnson", action: "Purchased Wireless Headphones", time: "2 min ago" },
    { id: 2, user: "Bob Smith", action: "Added Smart Watch to wishlist", time: "15 min ago" },
    { id: 3, user: "Charlie Brown", action: "Left a review", time: "1 hour ago" },
    { id: 4, user: "System", action: "Backup completed", time: "3 hours ago" },
];
