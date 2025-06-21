import { Route, Routes } from 'react-router-dom'
import './App.css'
import Sidebar from './components/sidebar'
import Normal from './components/Normal'
import Age  from './components/Age'

function App() {


  return (
    <>
    <section className='main-page'>
    <div className='sidebar-main'>
    <Sidebar/>
    </div>
    <div className='hero'>
    <Routes>
      <Route path="/" element={<Normal/>}/>
      <Route path="/age" element={<Age/>}/>
    </Routes>
    </div>

</section>

  
    </>
  )}
export default App
