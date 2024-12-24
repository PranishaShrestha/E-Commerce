import { Route, Routes } from 'react-router-dom'
import './App.css'
import Landingpage from './assets/Pages/Landingpage'


function App() {
 
  return (
    <>
   <Routes>
    <Route path='/'element={<Landingpage/> }/>
    <Route path='/Contact'element={<Landingpage/> }/>
   </Routes>
    </>
  )
}

export default App
