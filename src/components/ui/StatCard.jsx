import { ArrowDownRight, ArrowUpRight } from "lucide-react";

export default function StatCard({ title, value, icon, change, trend, color }) {
    const Icon = icon;
    return (
        <div className='bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-100 dark:border-slate-700 transition-all hover:shadow-md'>
            <div className='flex justify-between items-start'>
                <div>
                    <p className='text-sm font-medium text-slate-500 dark:text-slate-400'>{title}</p>
                    <h3 className='text-2xl font-bold text-slate-900 dark:text-white mt-2'>{value}</h3>
                </div>
                <div className={`p-3 rounded-lg bg-opacity-10 ${color.replace('text-', 'bg-')}`}>
                    <Icon className={`w-6 h-6 ${color}`} />
                </div>
            </div>

            <div className='flex items-center mt-4'>
                <span className={`flex items-center text-sm font-medium ${trend === 'up' ? 'text-green-500' : 'text-red-500'}`}>
                    {trend === 'up' ? <ArrowUpRight className="w-4 h-4 mr-1" /> : <ArrowDownRight className="w-4 h-4 mr-1" />}
                    {change}
                </span>
                <span className='text-sm text-slate-400 ml-2'>vs last month</span>
            </div>
        </div>
    );
}
