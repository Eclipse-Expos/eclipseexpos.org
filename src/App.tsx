import { useRef, useState } from 'react';

const App = () => {

  const card = useRef<HTMLDivElement>(null);
  const letters = useRef<HTMLDivElement>(null);

  const [letterValue, setLetterValue] = useState<string>('');

  const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

  const randomChar = () => chars[Math.floor(Math.random() * (chars.length - 1))],
    randomString = (length:number) => Array.from(Array(length)).map(randomChar).join("");

  const handleOnMove = (e:any) => {
    let x = 30 * (e.clientX / window.innerWidth) + 35
    let y = 30 * (e.clientY / window.innerHeight) + 35

    console.log(x, y)

    letters.current?.style.setProperty("--x", `${x}%`);
    letters.current?.style.setProperty("--y", `${y}%`);

    setLetterValue(randomString(10000))
  }

  return (
    <div className='grid place-items-center h-screen'>
      <div className='text-center text-neutral-100 z-10 pointer-events-none'>
        {/* <h1 className='text-3xl font-semibold text-neutral-200'>
          Eclipse2024
        </h1>
        <p className='text-neutral-400 mt-4 leading-loose max-w-[40%] mx-auto'>
          We're hosting the largest youth-led conference the world has ever seen. Join us in Waterloo, late 2024. <br/><span className='font-bold'>Let's break some records</span>. 
        </p> */}
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