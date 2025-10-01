import Sidebar from '../Sidebar'
import Navbar from '../Navbar'
import Footer from '../Footer'
import FirstSection from './firstSection/FirstSection'

const Home = () => {
    return (
        <div className='flex h-screen'>
            <Sidebar />
            <div className='flex-1 flex flex-col bg-yellow-50 overflow-y-auto'>
                <Navbar />
                <FirstSection />
                <Footer />
            </div>
        </div>
    )
}

export default Home