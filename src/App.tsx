import { useRef } from 'react';
import logo from './assets/logo-white.png'

const App = () => {

  const card = useRef<HTMLDivElement>(null);
  const letters = useRef<HTMLDivElement>(null);

  const handleOnMove = (e:any) => {
    let x = 30 * (e.clientX / window.innerWidth) + 35
    let y = 30 * (e.clientY / window.innerHeight) + 35

    letters.current?.style.setProperty("--x", `${x}%`);
    letters.current?.style.setProperty("--y", `${y}%`);
  }

  return (
    <div className='grid place-items-center h-screen app'>
      <div className='text-center text-neutral-100 z-10 pointer-events-none app2 opacity-0'>
        {/* <img src={logo} alt='Logo' className='w-1/5 m-auto opacity-75 logo'></img> */}
        <h1 className='text-3xl font-bold text-neutral-200'>
          Eclipse2024
        </h1>
        <p className='text-neutral-500 mt-4 leading-loose max-w-[40%] mx-auto'>
          We're hosting the largest youth-led conference the world has ever seen. Join us in Waterloo, late 2024. <br/><span className='font-bold'>Let's break some records</span>. 
        </p>
      </div>
      <div className="card-track" onMouseMove={e => handleOnMove(e)}>
        <div className="card-wrapper">
          <div className="card" ref={card}>
            <div className="card-gradient"></div>
            <div className="card-letters" ref={letters}></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App