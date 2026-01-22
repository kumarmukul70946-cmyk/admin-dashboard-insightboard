import { Edit, Package } from "lucide-react"; // Import compatible icons
import { useState } from "react";
import DataTable from "../../components/ui/DataTable";
import { mockProducts } from "../../data/mockData";

import { useAuthStore } from "../../store/authStore";

export default function Products() {
    const [data, setData] = useState(mockProducts);
    const { user } = useAuthStore();

    const handleSearch = (query) => {
        const filtered = mockProducts.filter(product =>
            product.name.toLowerCase().includes(query.toLowerCase()) ||
            product.category.toLowerCase().includes(query.toLowerCase())
        );
        setData(filtered);
    };

    const columns = [
        {
            header: "Product",
            accessor: "name",
            render: (row) => (
                <div className="flex items-center">
                    <div className="h-10 w-10 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center mr-3 text-slate-400">
                        <Package className="w-5 h-5" />
                    </div>
                    <div>
                        <div className="font-medium text-slate-900 dark:text-white">{row.name}</div>
                        <div className="text-slate-500 dark:text-slate-400 text-xs">{row.category}</div>
                    </div>
                </div>
            )
        },
        { header: "Price", accessor: "price", render: (row) => <span className="font-medium text-slate-900 dark:text-white">{row.price}</span> },
        {
            header: "Stock",
            accessor: "stock",
            render: (row) => (
                <div className="flex items-center">
                    <span className="text-sm text-slate-600 dark:text-slate-300 mr-2">{row.stock}</span>
                    {row.stock < 10 && <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400">Low</span>}
                </div>
            )
        },
        {
            header: "Status",
            accessor: "status",
            render: (row) => (
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium 
              ${row.status === 'In Stock' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' :
                        'bg-slate-100 text-slate-800 dark:bg-slate-700 dark:text-slate-300'
                    }`}>
                    {row.status}
                </span>
            )
        },
        {
            header: "Actions",
            render: () => (
                <button className="text-slate-400 hover:text-indigo-600 transition-colors">
                    <Edit className="w-4 h-4" />
                </button>
            )
        }
    ].filter(col => col.header !== 'Actions' || user?.role === 'Admin');

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Products</h1>
                {user?.role === 'Admin' && (
                    <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors shadow-lg shadow-indigo-500/30">
                        Add Product
                    </button>
                )}
            </div>
            <DataTable
                columns={columns}
                data={data}
                title="Product Inventory"
                onSearch={handleSearch}
            />
        </div>
    );
}
