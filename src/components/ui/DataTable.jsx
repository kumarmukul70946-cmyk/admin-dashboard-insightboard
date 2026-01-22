import { ChevronLeft, ChevronRight, Search } from "lucide-react";
import { useState } from "react";

export default function DataTable({ columns, data, title, onSearch, isLoading }) {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;
    const totalPages = Math.ceil(data.length / itemsPerPage);

    const currentData = data.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    return (
        <div className='bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 overflow-hidden'>
            {/* Header */}
            <div className='p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 dark:border-slate-700'>
                <h3 className='text-lg font-semibold text-slate-900 dark:text-white'>{title}</h3>
                <div className='relative'>
                    <Search className='absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400' />
                    <input
                        type="text"
                        placeholder="Search..."
                        className='pl-10 pr-4 py-2 rounded-lg border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 w-full sm:w-64 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-400'
                        onChange={(e) => onSearch && onSearch(e.target.value)}
                    />
                </div>
            </div>

            {/* Table */}
            <div className='overflow-x-auto'>
                <table className='w-full'>
                    <thead className='bg-slate-50 dark:bg-slate-700/50'>
                        <tr>
                            {columns.map((col, idx) => (
                                <th key={idx} className='px-6 py-3 text-left text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider'>
                                    {col.header}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className='divide-y divide-slate-100 dark:divide-slate-700'>
                        {isLoading ? (
                            <tr><td colSpan={columns.length} className="px-6 py-4 text-center">Loading...</td></tr>
                        ) : currentData.length > 0 ? (
                            currentData.map((row, rowIdx) => (
                                <tr key={rowIdx} className='hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors'>
                                    {columns.map((col, colIdx) => (
                                        <td key={colIdx} className='px-6 py-4 whitespace-nowrap text-sm text-slate-600 dark:text-slate-300'>
                                            {col.render ? col.render(row) : row[col.accessor]}
                                        </td>
                                    ))}
                                </tr>
                            ))
                        ) : (
                            <tr><td colSpan={columns.length} className="px-6 py-8 text-center text-slate-500">No results found</td></tr>
                        )}
                    </tbody>
                </table>
            </div>

            {/* Pagination */}
            <div className='px-6 py-4 border-t border-slate-100 dark:border-slate-700 flex items-center justify-between'>
                <p className='text-sm text-slate-500 dark:text-slate-400'>
                    Showing <span className='font-medium'>{(currentPage - 1) * itemsPerPage + 1}</span> to <span className='font-medium'>{Math.min(currentPage * itemsPerPage, data.length)}</span> of <span className='font-medium'>{data.length}</span> results
                </p>
                <div className='flex items-center gap-2'>
                    <button
                        onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                        disabled={currentPage === 1}
                        className='p-2 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed text-slate-600 dark:text-slate-400'
                    >
                        <ChevronLeft className="w-4 h-4" />
                    </button>
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Page {currentPage} of {totalPages}</span>
                    <button
                        onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                        disabled={currentPage === totalPages}
                        className='p-2 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed text-slate-600 dark:text-slate-400'
                    >
                        <ChevronRight className="w-4 h-4" />
                    </button>
                </div>
            </div>
        </div>
    );
}
