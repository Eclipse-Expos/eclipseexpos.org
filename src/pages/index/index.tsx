import Landing from '../../sections/Landing/Landing'
import About from '../../sections/About/About'
import Cards from '../../sections/Cards/Cards'

const IndexPage: React.FC = () => {
  return (
    <div>
      <Landing />
      <div className='bg-transparent h-24'></div>
      <div className='h-12 bg-neutral-950'></div>
      <div className='h-12 bg-neutral-950 brightness-150'></div>
      <div className='h-12 bg-neutral-900 brightness-90'></div>
      <div className='h-12 bg-[#1c1c1f]'></div>
      <div className='bg-[#1c1c1f] h-[8rem]'></div>
      <About />
      <div className='bg-[#1c1c1f] h-[8rem]'></div>
      <Cards />
    </div>
  )
}

export default IndexPage