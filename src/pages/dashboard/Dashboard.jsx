import { Area, AreaChart, Bar, BarChart, CartesianGrid, Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import ChartCard from '../../components/ui/ChartCard';
import StatCard from '../../components/ui/StatCard';
import { categoryData, mockOrders, salesData, statsData } from '../../data/mockData';

const COLORS = ['#4f46e5', '#10b981', '#f59e0b', '#ef4444'];

export default function Dashboard() {
    return (
        <div className='space-y-6'>
            <div className='flex flex-col sm:flex-row sm:items-center justify-between gap-4'>
                <div>
                    <h1 className='text-2xl font-bold text-slate-900 dark:text-white'>Dashboard Overview</h1>
                    <p className='text-slate-500 dark:text-slate-400'>Welcome back, here's what's happening today.</p>
                </div>

                <div className='flex gap-2'>
                    <select className='bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500 dark:text-white'>
                        <option>Last 7 Days</option>
                        <option>Last 30 Days</option>
                        <option>Last 90 Days</option>
                    </select>
                    <button className='bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors shadow-lg shadow-indigo-500/30'>
                        Export Report
                    </button>
                </div>
            </div>

            {/* Stats Grid */}
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
                {statsData.map((stat, idx) => (
                    <StatCard key={idx} {...stat} />
                ))}
            </div>

            {/* Charts Section */}
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
                <ChartCard title="Revenue Trend">
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={salesData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                            <defs>
                                <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#4f46e5" stopOpacity={0.3} />
                                    <stop offset="95%" stopColor="#4f46e5" stopOpacity={0} />
                                </linearGradient>
                            </defs>
                            <XAxis dataKey="name" stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
                            <YAxis stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `$${value}`} />
                            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
                            <Tooltip
                                contentStyle={{ backgroundColor: '#fff', borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                                itemStyle={{ color: '#4f46e5' }}
                            />
                            <Area type="monotone" dataKey="sales" stroke="#4f46e5" strokeWidth={3} fillOpacity={1} fill="url(#colorSales)" />
                        </AreaChart>
                    </ResponsiveContainer>
                </ChartCard>

                <ChartCard title="Orders by Category">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={categoryData}>
                            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
                            <XAxis dataKey="name" stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
                            <YAxis stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
                            <Tooltip
                                contentStyle={{ backgroundColor: '#fff', borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                                cursor={{ fill: 'transparent' }}
                            />
                            <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                                {categoryData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Bar>
                        </BarChart>
                    </ResponsiveContainer>
                </ChartCard>
            </div>

            {/* Recent Orders & Top Users */}
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
                <div className='lg:col-span-2 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 overflow-hidden'>
                    <div className='p-6 border-b border-slate-100 dark:border-slate-700 flex justify-between items-center'>
                        <h3 className='text-lg font-semibold text-slate-900 dark:text-white'>Recent Orders</h3>
                        <a href="#" className='text-sm text-indigo-600 font-medium hover:text-indigo-500'>View All</a>
                    </div>
                    <div className='overflow-x-auto'>
                        <table className='w-full'>
                            <thead className='bg-slate-50 dark:bg-slate-700/50'>
                                <tr>
                                    <th className='px-6 py-3 text-left text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase'>Order ID</th>
                                    <th className='px-6 py-3 text-left text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase'>Customer</th>
                                    <th className='px-6 py-3 text-left text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase'>Status</th>
                                    <th className='px-6 py-3 text-right text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase'>Amount</th>
                                </tr>
                            </thead>
                            <tbody className='divide-y divide-slate-100 dark:divide-slate-700'>
                                {mockOrders.map((order) => (
                                    <tr key={order.id} className='hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors'>
                                        <td className='px-6 py-4 text-sm font-medium text-slate-900 dark:text-white'>{order.id}</td>
                                        <td className='px-6 py-4 text-sm text-slate-600 dark:text-slate-300'>{order.customer}</td>
                                        <td className='px-6 py-4'>
                                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium 
                                         ${order.status === 'Completed' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' :
                                                    order.status === 'Pending' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400' :
                                                        'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400'
                                                }`}>
                                                {order.status}
                                            </span>
                                        </td>
                                        <td className='px-6 py-4 text-sm text-right font-medium text-slate-900 dark:text-white'>{order.amount}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className='bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 p-6'>
                    <h3 className='text-lg font-semibold text-slate-900 dark:text-white mb-4'>User Types</h3>
                    <div className='h-[250px] w-full'>
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={[
                                        { name: 'Free', value: 400 },
                                        { name: 'Pro', value: 300 },
                                        { name: 'Enterprise', value: 100 },
                                    ]}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={60}
                                    outerRadius={80}
                                    fill="#8884d8"
                                    paddingAngle={5}
                                    dataKey="value"
                                >
                                    {categoryData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                                <Tooltip />
                                <Legend verticalAlign="bottom" height={36} />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
        </div>
    );
}
