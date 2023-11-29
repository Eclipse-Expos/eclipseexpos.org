import Landing from "./pages/Landing"
import { Routes, Route } from 'react-router-dom'
import Eclipse from "./components/Eclipse/Eclipse"

const App = () => {
  return (
    <div>
      <div className='starbg'></div>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/static' element={<Eclipse type='static' />} />
        <Route path='/animate' element={<Eclipse type='animate' />} />
      </Routes>
    </div>
  )
}

export default App