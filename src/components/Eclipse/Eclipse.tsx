import { ReactElement, useRef } from 'react';
import cx from 'classnames';
import styles from './Eclipse.module.scss';
// import { motion, useScroll, useMotionValueEvent } from 'framer-motion';

interface EclipseProps {
  children?: ReactElement;
  type?: 'default' | 'static' | 'animate';
}

const Eclipse = (props: EclipseProps) => {
  const card = useRef<HTMLDivElement>(null);
  const mouse = useRef<HTMLDivElement>(null);

  // const { scrollYProgress } = useScroll();

  // useMotionValueEvent(scrollYProgress, "change", (latest) => {
  //   console.log("Page scroll: ", latest)
  // })  

  const handleOnMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const isMobile = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

    if (isMobile) {
      return;
    }

    let x = 20 * (e.clientX / window.innerWidth) + 40;
    let y = 20 * (e.clientY / window.innerHeight) + 40;

    mouse.current?.animate(
      {
        '--x': `${x}%`,
        '--y': `${y}%`,
      },
      {
        duration: 300,
        fill: 'forwards',
        easing: 'ease',
      }
    );
  };


  return (
    <div
      className={`${styles.eclipse}`}
      onMouseMove={(e) => {
        if (props.type === 'default' || !props.type) {
          handleOnMove(e);
        }
      }}
      // style={{
      //   scale: scrollYProgress,
      // }}
    >
      <div className='text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-neutral-100 z-10 w-[14.8rem] sm:w-[20.5rem] md:w-[27rem] rounded-full bg-black aspect-square grid place-items-center'>
        <div className={`${styles.children}`}>{props.children}</div>
      </div>
      <div className={styles.track}>
        <div className={styles.wrapper} ref={card}>
          <div className={styles.gradient}></div>
          <div
            className={
              props.type === 'animate'
                ? cx(styles.mouse, styles.mouseanimate)
                : styles.mouse
            }
            ref={mouse}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Eclipse;
