import InfoCard from "./InfoCard"
import NbReport from "./NbReport"
import ScoreAnalysis from "./ScoreAnalysis"

const FirstSection = () => {
    return (
        <div className=" bg-primary px-12 py-10">
            <div className="flex gap-5">
                <ScoreAnalysis />

                <div className="w-1/2 flex flex-col gap-5">
                    <NbReport />
                    <InfoCard />
                </div>
            </div>
        </div>
    )
}

export default FirstSection