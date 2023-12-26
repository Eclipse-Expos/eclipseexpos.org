import Eclipse from '../../components/Eclipse/Eclipse'

const Landing = () => {
  return (
    <Eclipse type='default' children={
      <div className='p-4'>
        <h2 className='text-2xl md:text-[2.25rem] text-neutral-200 block'>
          Eclipse2024
        </h2>
        <p className='text-sm md:text-base text-neutral-500 mt-8 mx-auto max-w-[80%]'>
          The largest youth-led conference the world has ever seen.
        </p>
        <p className='text-sm md:text-base font-bold text-neutral-500 mt-4'>
          Let's break some records.
        </p>
      </div>
    }/>
  )
}

export default Landing