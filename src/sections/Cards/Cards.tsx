import styles from './Cards.module.scss'
import { CardsData } from './Cards.data'

const Cards = () => {

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const isMobile = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

    if (isMobile) {
      return;
    }

    for (const card of document.getElementsByClassName(
      'card'
    ) as HTMLCollectionOf<HTMLElement>) {
      const rect = card.getBoundingClientRect(),
        x = e.clientX - rect.left,
        y = e.clientY - rect.top;

      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    }
  };

  return (
    <div 
      className={`${styles.cardswrapper} relative spaced border-t-[1px] border-t-neutral-700 py-16`}
      onMouseMove={handleMove}
      id='cards'
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 typography gap-8">
        {CardsData.map((card, index) => {
          return (
            <div className={`${styles.card} card`}>
              <div className={`${styles.cardcontent}`} key={`card-${index}`}>
                <h3>{card.title}</h3>
                <p>
                  {card.description}
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Cards