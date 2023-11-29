import { ReactElement, useRef } from 'react';
import styles from './Eclipse.module.scss'
import cx from 'classnames'

const Landing = (props: { 
  children?: ReactElement
  type?: 'default' | 'static' | 'animate'
}) => {
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
      easing: "ease-out",
    });
  }

  return (
    <div className='grid place-items-center h-[100svh] bg-transparent' onMouseMove={e => {
      if (props.type === 'default' || !props.type) {
        handleOnMove(e)
      } 
    }}>
      <div className='text-center text-neutral-100 z-10 w-[18rem] md:w-[27rem] rounded-full bg-black aspect-square grid place-items-center'>
        {props.children}
      </div>
      <div className={styles.track}>
        <div className={styles.wrapper} ref={card}>
          <div className={styles.gradient}></div>
          <div className={(props.type === 'animate') ? cx(styles.mouse, styles.mouseanimate) : styles.mouse} ref={mouse}></div>
        </div>
      </div>
    </div>
  )
}

export default Landing