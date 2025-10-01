function SegmentedBar({ score, scoreRanges, minScore, maxScore, title = "Your NB Score" }) {
    const pointerPosition = ((score - minScore) / (maxScore - minScore)) * 100;

    return (
        <div className="w-full bg-white p-10 rounded-[5px]">
            <div className="relative flex rounded-xl overflow-hidden shadow" style={{ height: 38 }}>
                {scoreRanges.map((range, i) => (
                    <div
                        key={i}
                        className={`${range.color} flex items-center justify-center`}
                        style={{ width: `${range.percent}%` }}
                    >
                        <span className="text-white font-semibold text-sm">{range.percent}%</span>
                    </div>
                ))}
                <div
                    className="absolute top-8 z-10"
                    style={{
                        left: `${pointerPosition}%`,
                        transform: 'translateX(-50%)'
                    }}
                >
                    <svg width="28" height="16" viewBox="0 0 28 16" fill="none">
                        <polygon points="14,0 0,16 28,16" fill="#292929" />
                    </svg>
                </div>
            </div>
            <div className="text-center pt-4">
                <span className="block text-gray-700 text-lg">{title}</span>
                <span className="block text-4xl font-bold text-gray-800">{score}</span>
            </div>
            <div className="flex items-center justify-between mt-6">
                <span className="w-[20%] text-center">Score Range</span>
                <div className="flex justify-center text-xs text-center text-gray-500 font-semibold flex-1">
                    {scoreRanges.map((range, i) => (
                        <div key={i} className="flex-1">
                            <span className={`inline-block w-3 h-3 mr-2 ${range.color}`}></span>
                            {range.label}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default SegmentedBar