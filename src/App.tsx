import IndexPage from "./pages/index"
import { Routes, Route } from 'react-router-dom'
import Eclipse from "./components/Eclipse/Eclipse"
import stars from './styles/stars.module.scss'
import React from 'react'

const App: React.FC = () => {
  return (
    <div id='App'>
      <div id='bg'>
        <div className={stars.background}></div>
        <div className={stars.foreground}></div>
      </div>
      <Routes>
        <Route path='/' element={<IndexPage />} />
        <Route path='/static' element={<Eclipse type='static' />} />
        <Route path='/animate' element={<Eclipse type='animate' />} />
        <Route path='/blank' element={<Eclipse />} />
      </Routes>
    </div>
  )
}

export default App