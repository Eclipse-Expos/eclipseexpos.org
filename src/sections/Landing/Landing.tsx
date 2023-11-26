import { useRef, useState } from 'react';
import styles from './Landing.module.scss'

const Landing = () => {
  const card = useRef<HTMLDivElement>(null);
  const mouse = useRef<HTMLDivElement>(null);

  const [hovered, setHovered] = useState<boolean>(false);

  const handleOnMove = (e:React.MouseEvent<HTMLDivElement>) => {
    let x = 30 * (e.clientX / window.innerWidth) + 35
    let y = 30 * (e.clientY / window.innerHeight) + 35
    
    mouse.current?.animate({
      "--x": `${x}%`,
      "--y": `${y}%`
    }, {
      duration: 300,
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
      easing: "ease-in",
    });
  }

  return (
    <div className='grid place-items-center h-screen bg-transparent' onMouseMove={e => handleOnMove(e)}>
      <div className='text-center text-neutral-100 z-10 w-[26rem] rounded-full bg-black aspect-square grid place-items-center'>
        <div className='p-4'>
          <h1 className='text-3xl font-black text-neutral-200 block' 
            onMouseEnter={() => console.log('sadofjas')} 
          >
            Eclipse2024
          </h1>
          <p className='text-neutral-500 mt-4 leading-loose mx-auto max-w-[80%]'>
            The largest youth-led conference the world has ever seen.<br/><span className='font-bold'>Let's break some records</span>. 
          </p>
        </div>
      </div>
      <div className={styles.track}>
        <div className={styles.wrapper} ref={card}>
          <div className={styles.gradient}></div>
          <div className={styles.mouse} ref={mouse}></div>
        </div>
      </div>
    </div>
  )
}

export default Landing