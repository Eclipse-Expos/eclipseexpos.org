import Eclipse from '../../components/Eclipse/Eclipse'

const Landing = () => {
  return (
    <Eclipse type='default' children={
      <div className='p-4'>
        <h1 className='text-[1.5rem] sm:text-[2rem] md:text-[2.5rem] text-neutral-200 block font-bold'>
          Eclipse2024
        </h1>
        <p className='text-[0.75rem] sm:text-sm text-neutral-500 mt-6 md:mt-8 mx-auto max-w-[80%]'>
          The largest youth-led event the world has ever seen.
        </p>
        <p className='text-[0.75rem] sm:text-sm font-bold text-neutral-500 mt-2 md:mt-4'>
          Let's break some records.
        </p>
      </div>
    }/>
  )
}

export default Landing