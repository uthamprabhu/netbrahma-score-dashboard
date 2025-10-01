import SegmentedBar from './SegmentedBar';

const segments = [
    { color: "#FF4E00", percent: 15 },
    { color: "#FF8000", percent: 22 },
    { color: "#FFCC00", percent: 26 },
    { color: "#A6CE39", percent: 18 },
    { color: "#008000", percent: 20 }
];

const scoreRanges = [
    { percent: 15, color: 'bg-orange-600', label: '300-722' },
    { percent: 22, color: 'bg-orange-400', label: '723-747' },
    { percent: 26, color: 'bg-yellow-300', label: '748-764' },
    { percent: 18, color: 'bg-lime-400', label: '765-777' },
    { percent: 20, color: 'bg-green-600', label: '778-900' },
];

const FourthSection = () => {
    return (
        <div className='bg-white px-12 mb-20'>
            <div className='uppercase flex items-center justify-start gap-3 mb-2'>
                <h1 className='uppercase text-lg text-[#046899]'>where you stand</h1>
                <img src="/assets/home/info.png" alt="info" className='object-contain' />
            </div>
            <div className='bg-primary rounded-[12px] p-8'>
                <SegmentedBar
                    score={767}
                    scoreRanges={scoreRanges}
                    minScore={300}
                    maxScore={900}
                    title="Your NB Score"
                />
                <div className='flex flex-col items-center justify-center gap-1 mt-5'>
                    <p className='text-tertiary'>Your NB Score lies in the top 70% in All Of India.</p>
                    <p className='text-tertiary text-sm'>Based on the NB Data</p>
                </div>
            </div>
        </div>
    )
}

export default FourthSection