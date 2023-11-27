import { useRef } from 'react';
import styles from './Landing.module.scss'

const Landing = () => {
  const card = useRef<HTMLDivElement>(null);
  const mouse = useRef<HTMLDivElement>(null);

  const handleOnMove = (e:React.MouseEvent<HTMLDivElement>) => {

    const isMobile = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

    if (isMobile) {
      return;
    }

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

  return (
    <div className='grid place-items-center h-[100svh] bg-transparent' onMouseMove={e => handleOnMove(e)}>
      <div className='text-center text-neutral-100 z-10 w-[18rem] md:w-[27rem] rounded-full bg-black aspect-square grid place-items-center'>
        <div className='p-4'>
          <h1 className='text-2xl md:text-3xl font-black text-neutral-200 block' 
            onMouseEnter={() => console.log('sadofjas')} 
          >
            Eclipse2024
          </h1>
          <p className='text-sm md:text-base text-neutral-500 mt-8 mx-auto max-w-[80%]'>
            The largest youth-led conference the world has ever seen.
          </p>
          <p className='text-sm md:text-base font-bold text-neutral-500 mt-4'>
            Let's break some records.
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