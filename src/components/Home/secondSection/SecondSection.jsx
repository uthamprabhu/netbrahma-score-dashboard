import YourAccounts from "./YourAccounts"
import homeSecondSection from '../../../data/homeSecondSection.json'

const SecondSection = () => {
  return (
    <div className=" bg-white px-12 py-10">
      <div className="flex gap-5">
        <YourAccounts />

        <div className="flex flex-1 flex-col gap-5">
          {homeSecondSection.map((item, index) => (
            <div key={index} className='rounded-[8px] border-t-1 border-[#00A6CA] flex overflow-hidden'>
              <div className="w-[12%] bg-[#e0f9ff] flex items-baseline justify-center pt-5">
                <img src={item.icon} alt={item.title} />
              </div>
              <div className="flex flex-1 justify-center flex-col p-5">
                <div className={`flex justify-between ${item.href && "mb-4"}`}>
                  <span className="text-blue-primary font-bold">{item.title}</span>
                  <span className="text-tertiary text-lg font-bold">{item.metrics}</span>
                </div>
                <div className="text-[#595959] text-sm mb-1">{item.moreDetails}</div>
                {item.href &&
                  <a href={item.href} className="!text-[#066A9B] !underline !decoration-[0.5px] underline-offset-2">{item.hrefTitle}</a>
                }
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SecondSection