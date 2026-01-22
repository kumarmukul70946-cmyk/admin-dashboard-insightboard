import { Edit3, MoreHorizontal, Trash2 } from "lucide-react";
import { useState } from "react";
import DataTable from "../../components/ui/DataTable";
import { mockUsers } from "../../data/mockData";

import { useAuthStore } from "../../store/authStore";

export default function Users() {
    const [data, setData] = useState(mockUsers);
    const { user } = useAuthStore();

    const handleSearch = (query) => {
        const filtered = mockUsers.filter(user =>
            user.name.toLowerCase().includes(query.toLowerCase()) ||
            user.email.toLowerCase().includes(query.toLowerCase())
        );
        setData(filtered);
    };

    const columns = [
        {
            header: "User",
            accessor: "name",
            render: (row) => (
                <div className="flex items-center">
                    <img className="h-8 w-8 rounded-full object-cover mr-3" src={row.image} alt="" />
                    <div>
                        <div className="font-medium text-slate-900 dark:text-white">{row.name}</div>
                        <div className="text-slate-500 dark:text-slate-400 text-xs">{row.email}</div>
                    </div>
                </div>
            )
        },
        {
            header: "Role",
            accessor: "role",
            render: (row) => (
                <span className="text-slate-700 dark:text-slate-300">{row.role}</span>
            )
        },
        {
            header: "Status",
            accessor: "status",
            render: (row) => (
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium 
              ${row.status === 'Active' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' :
                        row.status === 'Inactive' ? 'bg-slate-100 text-slate-800 dark:bg-slate-700 dark:text-slate-300' :
                            'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400'
                    }`}>
                    {row.status}
                </span>
            )
        },
        {
            header: "Actions",
            render: () => (
                <div className="flex items-center gap-2">
                    <button className="p-1 text-slate-400 hover:text-indigo-600 transition-colors">
                        <Edit3 className="w-4 h-4" />
                    </button>
                    <button className="p-1 text-slate-400 hover:text-red-600 transition-colors">
                        <Trash2 className="w-4 h-4" />
                    </button>
                    <button className="p-1 text-slate-400 hover:text-slate-600 transition-colors">
                        <MoreHorizontal className="w-4 h-4" />
                    </button>
                </div>
            )
        }
    ].filter(col => col.header !== 'Actions' || user?.role === 'Admin');

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Users</h1>
                {user?.role === 'Admin' && (
                    <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors shadow-lg shadow-indigo-500/30">
                        Add User
                    </button>
                )}
            </div>
            <DataTable
                columns={columns}
                data={data}
                title="All Users"
                onSearch={handleSearch}
            />
        </div>
    );
}
