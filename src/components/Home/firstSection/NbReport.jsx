import nbReport from '../../../data/nbReport.json'

const NbReport = () => {
  return (
    <div className="rounded-[8px] bg-white p-8 flex flex-col gap-6">
      <div className="flex gap-8">
        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-[#046899] text-lg">NB Report</h3>
          <p className="text-tertiary">Get your personalized NB Report to plan your financial future.</p>
        </div>
        <img src="/assets/home/report.png" alt="NB Report" />
      </div>
      <div className="flex flex-col gap-3">
        {nbReport.map((item, id) => (
          <div key={id} className="flex">
            <img src={item.icon} alt={item.title} />&nbsp;&nbsp;
            <a href={item.path} className="!text-[#066A9B] !underline !decoration-[0.5px] underline-offset-2">{item.title}</a>
            <img src={item.rightArrowIcon} alt="right arrow" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default NbReport