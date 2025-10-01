const InfoCard = () => {
    return (
        <div className="flex rounded-[8px] bg-[radial-gradient(19.11%_89.96%_at_95.54%_0%,_#FFF8D4_0%,_#FEEF93_100%)]">
            <div className="w-[60%] p-8 pr-0 flex justify-center items-center">
                <p className="text-tertiary">You currently have an active subscription. You will be able to access Free Annual NB Score & Report after the subscription period expires.</p>
            </div>
            <div className="flex flex-1 justify-center items-center">
                <img
                    src="/assets/home/metergauge.png"
                    alt="metergauge"
                />
            </div>
        </div>
    )
}

export default InfoCard