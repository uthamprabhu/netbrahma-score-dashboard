import { useState } from 'react'
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { Info } from 'lucide-react';

const YourAccounts = () => {
    const [activeTab, setActiveTab] = useState('All');

    const allData = [
        { name: 'Closed credit cards', value: 4, color: '#8b5cf6', category: 'closed' },
        { name: 'Closed loans', value: 1, color: '#fbbf24', category: 'closed' },
        { name: 'Open credit cards', value: 2, color: '#60d5a8', category: 'open' },
        { name: 'Open loans', value: 6, color: '#22d3ee', category: 'open' }
    ];

    const getFilteredData = () => {
        if (activeTab === 'All') return allData;
        if (activeTab === 'Open') return allData.filter(item => item.category === 'open');
        if (activeTab === 'Closed') return allData.filter(item => item.category === 'closed');
        return allData;
    };

    const data = getFilteredData();
    const total = data.reduce((sum, item) => sum + item.value, 0);

    return (
        <div className="w-2/3 rounded-[8px] bg-white shadow-[0px_0px_48px_0px_#1F5A8533] flex flex-col border-t-1 border-[#00A6CA]">
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2 pl-2">
                    <h2 className="text-blue-primary">Your Accounts</h2>
                    <Info className="text-blue-primary" size={18} />
                </div>

                <div className="flex gap-2 mt-3 mr-3">
                    {['All', 'Open', 'Closed'].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-4 py-1.5 rounded text-sm font-medium transition-colors ${activeTab === tab
                                ? 'bg-[#066a9b] text-white'
                                : 'bg-primary text-gray-600 hover:bg-gray-200'
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
            </div>

            <div className="flex items-center gap-12">
                <div className="relative" style={{ width: 180, height: 180 }}>
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie
                                data={data}
                                cx="50%"
                                cy="50%"
                                innerRadius={60}
                                outerRadius={80}
                                paddingAngle={2}
                                dataKey="value"
                                startAngle={90}
                                endAngle={450}
                            >
                                {data.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={entry.color} />
                                ))}
                            </Pie>
                        </PieChart>
                    </ResponsiveContainer>

                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <div className="text-tertiary text-sm">Total</div>
                        <div className="text-tertiary text-sm">Accounts</div>
                        <div className="text-tertiary text-lg font-bold">{total}</div>
                    </div>
                </div>

                <div className="flex-1 space-y-4 pr-10">
                    {data.map((item, index) => (
                        <div key={index} className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <div
                                    className="w-2 h-2 rounded-full"
                                    style={{ backgroundColor: item.color }}
                                />
                                <span className="text-tertiary text-sm font-bold">{item.name}</span>
                            </div>
                            <span className="text-tertiary">{item.value}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default YourAccounts