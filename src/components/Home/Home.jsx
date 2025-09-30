import React from 'react'
import Sidebar from '../Sidebar'
import Navbar from '../Navbar'
import Footer from '../Footer'

const Home = () => {
    return (
        <div className='flex h-screen'>
            <Sidebar />
            <div className='flex-1 flex flex-col bg-yellow-50 overflow-y-auto'>
                <Navbar />
                <div className=" bg-gray-200 p-4">
                    <h1 className="text-2xl font-bold mb-4">Main Content</h1>
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default Home