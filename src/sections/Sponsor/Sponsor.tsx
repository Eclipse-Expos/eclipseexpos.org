const Sponsor = () => {
  return (
    <div className='typography !max-w-[40rem]' id='sponsor'>
      <h2 className='text-center'>Sponsor the <span className='font-bold bg-gradient-to-r from-yellow-300 to-green-600 bg-clip-text text-transparent'>next generation</span></h2>
      <p className='mt-4 text-center'>Empower youth to take the lead in turning ideas into reality. Investing in Eclipse2024 means investing a future of creativity, innovation, and positive change.</p>
      <button className='shadow-md hover:brightness-[1.15] transition-all border-white hover:border-white bg-gradient-to-r from-yellow-500 to-green-600 shadow-yellow-400 mx-auto mt-8' onClick={() => {window.open('mailto:sponsor@eclipseexpos.org')}}>Become a sponsor</button>
      <p className="mt-8 text-center">
        This is an opportunity to support something truly unique—something that will <span className='font-bold'>eclipse</span> records and change the lives of many.
      </p>
    </div>
  )
}

export default Sponsor