import styles from './Cards.module.scss'
import { CardsData } from './Cards.data'

const Cards = () => {

  return (
    <div 
      className={`${styles.cardswrapper} relative spaced border-t-[1px] border-t-neutral-700 py-16`}
      id='cards'
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 typography gap-8">
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