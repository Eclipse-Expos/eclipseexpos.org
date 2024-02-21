import { ReactElement, useRef, useState } from 'react';
import cx from 'classnames';
import styles from './Eclipse.module.scss';

interface EclipseProps {
  children?: ReactElement;
  type?: 'default' | 'static' | 'animate';
}

const Eclipse = (props: EclipseProps) => {
  const card = useRef<HTMLDivElement>(null);
  const mouse = useRef<HTMLDivElement>(null);
  const [animationCount, setAnimationCount] = useState<number>(0);

  const handleOnMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const isMobile = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

    if (isMobile) {
      return;
    }

    if (animationCount >= 4) {
      let x = 20 * (e.clientX / window.innerWidth) - 10;
      let y = 20 * (e.clientY / window.innerHeight) - 10;

      mouse.current?.animate(
        {
          transform: `translate(${x}%, ${y}%)`,
        },
        {
          duration: 300,
          fill: 'forwards',
          easing: 'ease',
        }
      );
    }
  };

  return (
    <div
      className={`${styles.eclipse}`}
      onAnimationEnd={() => {
        setAnimationCount(animationCount + 1);
      }}
      onMouseMove={(e) => {
        if (props.type === 'default' || !props.type) {
          handleOnMove(e);
        }
      }}
    >
      <div className='text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-neutral-100 z-10 w-[14.8rem] sm:w-[20.5rem] md:w-[27rem] h-[14.8rem] sm:h-[20.5rem] md:h-[27rem] rounded-full bg-black aspect-square grid place-items-center'>
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
