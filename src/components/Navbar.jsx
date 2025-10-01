import navbarItems from '../data/navbar.json'

const Navbar = () => {
    return (
        <div className='min-h-18 sticky top-0 left-0 flex justify-end gap-8 items-center text-tertiary text-[14px] pr-20 bg-white'>
            {navbarItems.map((item, index) => (
                <div key={index} className='flex items-center gap-1'>
                    <img src={item.icon} alt={item.title || "language"} />

                    {item.languages ?
                        (
                            <select className='bg-transparent outline-none'>
                                {item.languages.map((lang, i) => (
                                    <option key={i} value={lang}>{lang}</option>
                                ))}
                            </select>
                        )
                        :
                        (
                            <a href={item.path} className='hover:underline'>
                                {item.title}
                            </a>
                        )
                    }
                </div>
            ))

            }
        </div>
    )
}

export default Navbar