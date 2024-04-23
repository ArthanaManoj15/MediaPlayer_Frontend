import { useState } from 'react'

import './App.css'
import { Route, Routes } from 'react-router-dom'
import Landingpage from './pages/Landingpage'
import Watch_history from './pages/Watch_history'
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    
    <>
    <Header/>
      <Routes>
        {/* / means basic URL */}
        <Route path='/' element={<Landingpage/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/watch-history' element={<Watch_history/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
