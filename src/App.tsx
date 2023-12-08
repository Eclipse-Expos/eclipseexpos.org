import Landing from "./pages/Landing"
import { Routes, Route } from 'react-router-dom'
import Eclipse from "./components/Eclipse/Eclipse"

import hooman from './assets/hooman.webp'
import jeffrey from './assets/jeffrey.jpeg'
import moulik from './assets/moulik.jpeg'

const App = () => {
  return (
    <div>
      <div className='starbg'></div>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/static' element={<Eclipse type='static' />} />
        <Route path='/animate' element={<Eclipse type='animate' />} />
      </Routes>
      {/* <div className='mx-auto mt-16 max-w-[60rem]'>
        <h1 className='text-center font-black text-2xl text-neutral-200'>Our Team</h1>
        <div className='mx-auto flex flex-col md:flex-row text-neutral-200 mt-8 text-center justify-center'>
          <div className='w-full md:w-1/3 text-center flex flex-col items-center justify-center gap-4'>
            <img src={hooman} alt='hooman' className='rounded-full aspect-square w-3/4' />
            <h2 className='text-neutral-200 text-center text-lg mt-2'>Hooman Reza Nezhad</h2>
            <p className='text-neutral-400'>President</p>
          </div>
          <div className='w-full md:w-1/3 text-center flex flex-col items-center justify-center gap-4'>
            <img src={jeffrey} alt='jeffrey' className='rounded-full aspect-square w-3/4' />
            <h2 className='text-neutral-200 text-center text-lg'>Jeffrey Zang</h2>
            <p className='text-neutral-400'>Vice President</p>
          </div>
          <div className='w-full md:w-1/3 text-center flex flex-col items-center justify-center gap-4'>
            <img src={moulik} alt='moulik' className='rounded-full aspect-square w-3/4' />
            <h2 className='text-neutral-200 text-center text-lg'>Moulik Budhiraja</h2>
            <p className='text-neutral-400'>Chief Technology Officer</p>
          </div>
        </div>
      </div> */}
    </div>
  )
}

export default App