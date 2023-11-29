import Landing from "./components/Eclipse/Eclipse"

const App = () => {
  return (
    <div>
      <div className='starbg'></div>
      <Landing type='default' children={
        <div className='p-4'>
          <h1 className='text-2xl md:text-3xl font-black text-neutral-200 block' 
            onMouseEnter={() => console.log('sadofjas')} 
          >
            Eclipse2024
          </h1>
          <p className='text-sm md:text-base text-neutral-500 mt-8 mx-auto max-w-[80%]'>
            The largest youth-led conference the world has ever seen.
          </p>
          <p className='text-sm md:text-base font-bold text-neutral-500 mt-4'>
            Let's break some records.
          </p>
        </div>
      }/>
    </div>
  )
}

export default App