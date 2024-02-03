const Join = () => {
  return (
    <div className="bg-bg pb-16" id='join'>
      <div className="typography"> 
        <h2>Join a <span className='font-bold bg-gradient-to-r from-purple-600 to-blue-400 bg-clip-text text-transparent'>global</span> team</h2>
        <p className="mt-4">
          Organizing the largest youth-led event ever run is tough, and we couldn't do it without all of our amazing team members, who come from over 10 countries and dozens of cities. Eclipse2024 still has room to grow! We're expanding our team in all departments, including operations, tech, marketing, production, and business development. If you think your story fits well with ours, feel free to reach out using the button below!
        </p>
        <button className='mt-8' onClick={() => {window.open('mailto:hiring@eclipseexpos.org')}}>Count me in</button>
      </div>
    </div>
  )
}

export default Join