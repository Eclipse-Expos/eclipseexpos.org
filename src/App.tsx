import Landing from "./components/Eclipse/Eclipse"
import { Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <div className='starbg'></div>
      <Routes>
        <Route path='/' element={
          <Landing type='default' children={
            <div className='p-4'>
              <h1 className='text-2xl md:text-[2rem] font-black text-neutral-200 block'>
                Eclipse2024
              </h1>
              <p className='text-sm md:text-base text-neutral-500 mt-8 mx-auto max-w-[80%]'>
                The largest youth-led conference the world has ever seen.
              </p>
              <p className='text-sm md:text-base font-bold text-neutral-500 mt-4'>
                Let's break some records.
              </p>
            </div>
          }/>      
        }/>
      </Routes>
    </div>
  )
}

export default App