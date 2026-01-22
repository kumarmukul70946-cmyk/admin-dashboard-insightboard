export default function ChartCard({ title, children }) {
    return (
        <div className='bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-100 dark:border-slate-700 h-full'>
            <h3 className='text-lg font-semibold text-slate-900 dark:text-white mb-6'>{title}</h3>
            <div className='w-full h-[300px]'>
                {children}
            </div>
        </div>
    );
}
