import Eclipse from '../../components/Eclipse/Eclipse'

const Landing = () => {
  return (
    <Eclipse type='default' children={
      <div className='p-4'>
        <h1 className='text-[1.7rem] md:text-[2.5rem] text-neutral-200 block font-bold'>
          Eclipse2024
        </h1>
        <p className='text-[0.85rem] md:text-sm text-neutral-500 mt-8 mx-auto max-w-[80%]'>
          The largest youth-led event the world has ever seen.
        </p>
        <p className='text-[0.85rem] md:text-sm font-bold text-neutral-500 mt-4'>
          Let's break some records.
        </p>
      </div>
    }/>
  )
}

export default Landing