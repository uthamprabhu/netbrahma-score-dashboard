import { useState } from 'react'
import logo from '../assets/sidebar/logo.png'
import sidebarItems from '../data/sidebarItemms.json'

const Sidebar = () => {
    const [active, setActive] = useState(null)

    const handleToggle = (title) => {
        setActive(active === title ? null : title)
    }

    return (
        <aside className='w-70 bg-sidebarBg text-white max-md:hidden'>
            <div className='mt-10 ml-8'>
                <img
                    src={logo}
                    alt='netbrahma logo'
                />
            </div>
            <ul className='mt-4 flex flex-col gap-3'>
                {sidebarItems.map((item, id) => (
                    <li key={id}>
                        {item.subcategories ?
                            (
                                <div className={`mt-5 ${active === item.title ? "bg-sidebarFocus pb-7" : ""}`} >
                                    <div
                                        className={`flex items-center gap-3 p-3 rounded cursor-pointer pl-8 select-none hover:bg-sidebarFocus
                                        ${active === item.title ? "bg-sidebarFocus" : "bg-sidebarBg"}`}
                                        onClick={() => handleToggle(item.title)}
                                    >
                                        <div className='flex items-center gap-3'>
                                            <img src={item.icon} alt={item.title} />
                                            <span className='font-normal text-[16px]'>{item.title}</span>
                                        </div>

                                        <img
                                            src={item.arrowIcon}
                                            alt="arrow"
                                            className={`transition-transform duration-300 ${active === item.title ? "rotate-180" : ""}`}
                                        />
                                    </div>

                                    {active === item.title && (
                                        <ul className='ml-12 mt-2 flex flex-col gap-1 relative'>
                                            <span className='absolute left-[-6px] top-0 w-[1px] h-full bg-white opacity-20'></span>
                                            {item.subcategories.map((sub, i) => (
                                                <li
                                                    key={i}
                                                    className='pl-4 text-sm hover:text-gray-300 cursor-pointer'>
                                                    {sub}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            )
                            :
                            (
                                <a
                                    href={item.path}
                                    className='flex items-center gap-3 p-3 rounded hover:bg-sidebarFocus cursor-pointer pl-8 focus:outline-none focus:ring-0 select-none'
                                >
                                    <img src={item.icon} alt={item.title} />
                                    <span className='font-normal text-[16px]'>{item.title}</span>
                                    {item.notification &&
                                        <span className='w-6 h-6 bg-yellow-300 rounded-full flex justify-center items-center text-sm text-black'>{item.alerts}</span>
                                    }
                                </a>
                            )
                        }

                    </li>
                ))}
            </ul>
        </aside >
    )
}

export default Sidebar