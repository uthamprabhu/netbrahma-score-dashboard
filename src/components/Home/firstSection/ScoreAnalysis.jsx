import GaugeChart from 'react-gauge-chart'

const ScoreAnalysis = () => {
  return (
    <div className="w-1/2 rounded-[8px] bg-white shadow-[0px_0px_48px_0px_#1F5A8533] flex flex-col">
      <div className="flex flex-col items-center mt-8 pb-2">
        <h2 className="text-[24px] text-tertiary font-bold">Hello, Rahul L.</h2>
        <GaugeChart
          id="gauge-chart"
          nrOfLevels={5}
          arcsLength={[0.2, 0.2, 0.2, 0.2, 0.2]}
          colors={["#FF4E00", "#FF8000", "#FFCC00", "#A6CE39", "#008000"]}
          percent={0.77}
          arcPadding={0.02}
          cornerRadius={0}
          pointerColor="#000000"
          needleBaseColor="#262626"
          textColor="#000000"
          // formatTextValue={value => `${Math.round(value * 900)}`}
          style={{ width: '80%', height: 'auto' }}
        />
        <p className="text-3xl font-bold mt-2">767</p>
        <p className='text-lg text-tertiary'>is your <span className='text-[#00A6CA]'>NB</span> Score as of 19th Apr '22</p>
      </div>
      <div className='flex justify-between items-center px-6 flex-1 shadow-[0px_0px_48px_0px_#1F5A8533]'>
        <a href="/score-analysis" className='!text-[#066A9B] !underline !decoration-[0.5px] underline-offset-2'>Score Analysis</a>
        <button type='button' className='bg-[#FDDC02] py-3 px-6 rounded-[40px] w-[238px] h-[48px]'>Refresh Now</button>
      </div>
    </div>
  )
}

export default ScoreAnalysis