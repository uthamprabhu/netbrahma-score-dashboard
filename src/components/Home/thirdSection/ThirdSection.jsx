import NBScoreTrendChart from './NbScoreTrendChart';
import { ArrowUp, ArrowDown, ArrowRight } from 'lucide-react';

const chartData = [520, 580, 493, 510];
const labels = ['APR', 'MAY', 'JUN', 'AUG'];

const historyData = [
    { score: 493, date: '18/08/2022', trend: 'up' },
    { score: 490, date: '16/08/2022', trend: 'down' },
    { score: 510, date: '14/08/2022', trend: 'up' },
    { score: 509, date: '12/08/2022', trend: 'right' },
    { score: 'N/H', date: '09/08/2022', trend: 'none' },
];

const ThirdSection = () => {
    const getArrowIcon = (trend) => {
        switch (trend) {
            case 'up': return <ArrowUp className="text-green-500" size={16} />;
            case 'down': return <ArrowDown className="text-red-500" size={16} />;
            case 'right': return <ArrowRight className="text-blue-400" size={16} />;
            default: return null;
        }
    };

    return (
        <div className="bg-white p-8">
            <div className="bg-primary rounded-lg shadow-sm max-w-5xl mx-auto">
                <div className="px-6 py-4">
                    <div className="flex items-center gap-2">
                        <h2 className="text-blue-primary font-bold text-sm uppercase tracking-wide">
                            NB Score History
                        </h2>
                        <img src="/assets/home/info.png" alt="info" className="w-4 h-4" />
                    </div>
                </div>

                <div className="p-6">
                    <div className="flex gap-8">
                        <NBScoreTrendChart chartData={chartData} labels={labels} />

                        <div className="w-48 pl-6">
                            <div className="mb-4">
                                <h3 className="text-gray-900 font-semibold text-sm">August 2022</h3>
                            </div>
                            <div className="space-y-3">
                                {historyData.map((item, index) => (
                                    <div key={index} className="flex items-center justify-between text-sm">
                                        <div className="flex items-center gap-2">
                                            {getArrowIcon(item.trend)}
                                            <span className="font-semibold text-gray-900">{item.score}</span>
                                        </div>
                                        <span className="text-gray-500 text-xs">{item.date}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ThirdSection;