import hooman from '../../assets/img/people/hooman.webp'
import styles from './Message.module.scss'

const Message = () => {
  return (
    <div className='mx-[2rem]' id='message'>
      <div className={`typography p-16  ${styles.message}`}>
        <div className='flex gap-8 flex-col md:flex-row'>
          <div className='w-full md:w-2/3 flex flex-col justify-center'>
            <h3 className='text-left text-[2rem] text-neutral-300'>A message from our President</h3>
            <p className='text-left mx-auto mt-8'>
              "Eclipse2024 is an incredible opportunity: a melting pot of talent, innovation, ambition, a showcase of what is possible when great minds come together. I'm extremely excited to see the amazing things that will come next."
            </p>
            <p className='font-bold mt-8 text-left'>
              Hooman Reza Nezhad
            </p>
            <p className='text-left'>
              Founder & President, Eclipse Expositions
            </p>
          </div>

          <div className='w-2/3 mx-auto md:w-1/3'>
            <img src={hooman} className='mx-auto mt-8'></img>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Message