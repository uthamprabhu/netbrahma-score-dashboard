import { ArrowUp, ArrowDown, ArrowRight } from 'lucide-react';

const ScoreHistorySidebar = ({ title, historyData }) => {
    const getArrowIcon = (trend) => {
        switch (trend) {
            case 'up': return <ArrowUp className="text-green-500" size={16} />;
            case 'down': return <ArrowDown className="text-red-500" size={16} />;
            default: return <ArrowRight className="text-blue-400" size={16} />;
        }
    };

    return (
        <div className="w-48">
            <div className="mb-4">
                <h4 className="text-gray-900 font-semibold text-sm">{title}</h4>
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
    );
};

export default ScoreHistorySidebar