import Landing from '../../sections/Landing/Landing'
import About from '../../sections/About/About'
import Cards from '../../sections/Cards/Cards'
import Sponsor from '../../sections/Sponsor/Sponsor'
import Message from '../../sections/Message/Message'
import Join from '../../sections/Join/Join'
// import CTA from '../../sections/CTA/CTA'
import Footer from '../../sections/Footer/Footer'

const IndexPage: React.FC = () => {
  return (
    <div className='w-screen h-screen relative left-0 top-0 overflow-x-clip'>
      <Landing />
      <div className='bg-transparent h-24'></div>
      <div className='h-12 bg-neutral-950'></div>
      <div className='h-12 bg-neutral-950 brightness-150'></div>
      <div className='h-12 bg-neutral-900 brightness-90'></div>
      <div className='h-12 bg-[#1c1c1f]'></div>
      <div className='bg-[#1c1c1f] h-[8rem]'></div>
    </div>
  )
}

export default IndexPage