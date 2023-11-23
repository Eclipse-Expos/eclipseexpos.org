import { useRef, useState } from 'react';

const App = () => {

  const card = useRef<HTMLDivElement>(null);
  const letters = useRef<HTMLDivElement>(null);

  const [letterValue, setLetterValue] = useState<string>('');

  const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

  const randomChar = () => chars[Math.floor(Math.random() * (chars.length - 1))],
    randomString = (length:number) => Array.from(Array(length)).map(randomChar).join("");

  const handleOnMove = (e:any) => {
    const rect = card.current?.getBoundingClientRect()
    let x = e.clientX - (rect?.left || 0)
    let y = e.clientY - (rect?.top || 0)

    letters.current?.style.setProperty("--x", `${x}px`);
    letters.current?.style.setProperty("--y", `${y}px`);

    setLetterValue(randomString(10000))
  }

  return (
    <div className='grid place-items-center h-screen'>
      <div className='text-center text-neutral-100 z-10 pointer-events-none'>
        <h1 className='text-3xl font-semibold text-neutral-100'>
          Eclipse2024
        </h1>
        <p className='text-neutral-500 mt-4 leading-loose max-w-[40%] mx-auto'>
          We're hosting the largest youth-led conference the world has ever seen. Join us in Waterloo, late 2024. <span className='font-bold'>Let's break some records</span>. 
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