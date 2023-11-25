import { useRef } from 'react';
import logo from './assets/logo-white.png'

const App = () => {

  const card = useRef<HTMLDivElement>(null);
  const mouse = useRef<HTMLDivElement>(null);

  const handleOnMove = (e:any) => {
    let x = 40 * (e.clientX / window.innerWidth) + 30
    let y = 40 * (e.clientY / window.innerHeight) + 30
    
    mouse.current?.animate({
      "--x": `${x}%`,
      "--y": `${y}%`
    }, {
      duration: 500,
      fill: "forwards",
      easing: "ease",
    });
  }

  const handleOnEnter = () => {
    console.log('YEET')
    mouse.current?.animate({
      "--x": `58%`,
      "--y": `37%`
    }, {
      duration: 500,
      fill: "forwards",
      easing: "ease",
    });
  }

  return (
    <div className='grid place-items-center h-screen'>
      <div className='text-center text-neutral-100 z-20 pointer-events-none'>
        {/* <img src={logo} alt='Logo' className='w-1/5 m-auto opacity-75 logo'></img> */}
        <h1 className='text-3xl font-black text-neutral-200'>
          asdfds
        </h1>
        <p className='text-neutral-500 mt-4 leading-loose max-w-[40%] mx-auto'>
          We're hosting the largest youth-led conference the world has ever seen. Join us in Waterloo, late 2024. <br/><span className='font-bold'>Let's break some records</span>. 
        </p>
      </div>
      <div className="card-track" onMouseMove={e => handleOnMove(e)}>
        <div className="card-wrapper">
          <div className="card" ref={card}>
            <div className="card-gradient"></div>
            <div className="card-mouse" ref={mouse}></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App