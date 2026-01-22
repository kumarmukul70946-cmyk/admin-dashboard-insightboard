import { Eye } from "lucide-react";
import { useState } from "react";
import DataTable from "../../components/ui/DataTable";
import { mockOrders } from "../../data/mockData";

import { useAuthStore } from "../../store/authStore";

export default function Orders() {
    const [data, setData] = useState(mockOrders);
    const { user } = useAuthStore();

    const handleSearch = (query) => {
        const filtered = mockOrders.filter(order =>
            order.id.toLowerCase().includes(query.toLowerCase()) ||
            order.customer.toLowerCase().includes(query.toLowerCase())
        );
        setData(filtered);
    };

    const columns = [
        { header: "Order ID", accessor: "id", render: (row) => <span className="font-medium text-slate-900 dark:text-white">{row.id}</span> },
        { header: "Customer", accessor: "customer" },
        { header: "Date", accessor: "date" },
        { header: "Amount", accessor: "amount", render: (row) => <span className="font-medium text-slate-900 dark:text-white">{row.amount}</span> },
        {
            header: "Status",
            accessor: "status",
            render: (row) => (
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium 
              ${row.status === 'Completed' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' :
                        row.status === 'Pending' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400' :
                            'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400'
                    }`}>
                    {row.status}
                </span>
            )
        },
        {
            header: "Actions",
            render: () => (
                <button className="flex items-center text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300 text-sm font-medium transition-colors">
                    <Eye className="w-4 h-4 mr-1" /> View
                </button>
            )
        }
    ];

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Orders</h1>
                {user?.role === 'Admin' && (
                    <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors shadow-lg shadow-indigo-500/30">
                        Create Order
                    </button>
                )}
            </div>
            <DataTable
                columns={columns}
                data={data}
                title="Recent Orders"
                onSearch={handleSearch}
            />
        </div>
    );
}
