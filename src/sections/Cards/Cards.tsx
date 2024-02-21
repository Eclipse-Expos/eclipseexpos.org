import { CardBody, CardContainer, CardItem } from '../../components/Card/Card';
import { motion } from 'framer-motion';
import styles from './Cards.module.scss';

import { CardData } from '../../data/Cards.data';

const Cards = () => {
  return (
    <div className={`bg-bg ${styles.cards}`} id='cards'>
      <motion.div
        className='typography gap-8 py-32 grid grid-cols-1 md:grid-cols-3'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        {CardData.map((card, index) => {
          return (
            <CardContainer key={`card-${index}`} className='h-full'>
              <CardBody className='bg-[#2A2A32] flex flex-col justify-between gap-4 p-4 h-full rounded-md border-[1px] border-solid border-[#404040]'>
                <div className='flex flex-col gap-2'>
                  <CardItem translateZ='50'>
                    <h3>{card.title}</h3>
                  </CardItem>
                  <CardItem as='p' translateZ='60'>
                    {card.desc}
                  </CardItem>
                </div>
                <CardItem translateZ='100' className='w-full h-[10rem]'>
                  <img
                    src={card.img}
                    className='rounded-md object-cover h-full w-full'
                    alt={`card-img-${index}`}
                  />
                </CardItem>
              </CardBody>
            </CardContainer>
          );
        })}
      </motion.div>
    </div>
  );
};

export default Cards;
