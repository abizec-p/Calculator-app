import { Route, Routes } from 'react-router-dom'
import './App.css'
import Sidebar from './components/sidebar'
import Normal from './components/Normal'
import Age  from './components/Age'
import Interest from './components/interest'
import Scientific from './components/scientific'
import Hours from './components/hours'
import Grade from './components/grade'

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
      <Route path="/interest" element={<Interest/>}/>
      <Route path="/scientific" element={<Scientific/>}/>
      <Route path="/hours" element={<Hours/>}/>
      <Route path="/grade" element={<Grade/>}/>
    </Routes>
    </div>

</section>

  
    </>
  )}
export default App
