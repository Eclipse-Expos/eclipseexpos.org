import styles from './Cards.module.scss'
import { CardsData } from './Cards.data'


const Cards = () => {
  return (
    <div className='bg-bg spaced border-t-[1px] border-t-neutral-700 py-16'>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 typography gap-8">
        {CardsData.map((card, index) => {
          return (
            <div className={`${styles.card}`} key={`card-${index}`}>
              <h3>{card.title}</h3>
              <p>
                {card.description}
              </p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Cards