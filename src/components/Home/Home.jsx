import Sidebar from '../Sidebar'
import Navbar from '../Navbar'
import Footer from '../Footer'
import FirstSection from './firstSection/FirstSection'
import SecondSection from './secondSection/SecondSection'
import ThirdSection from './thirdSection/ThirdSection'
import FourthSection from './fourthSection/FourthSection'

const Home = () => {
    return (
        <div className='flex h-screen'>
            <Sidebar />
            <div className='flex-1 flex flex-col overflow-y-auto'>
                <Navbar />
                <FirstSection />
                <SecondSection />
                <ThirdSection />
                <FourthSection />
                <Footer />
            </div>
        </div>
    )
}

export default Home