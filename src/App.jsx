import { Route, Routes } from 'react-router-dom'
import logo from "./assets/images/logo.svg"
import './App.css'
import Sidebar from './components/sidebar'
import Normal from './components/Normal'
import Age  from './components/Age'
import Interest from './components/interest'
import Scientific from './components/scientific'
import Hours from './components/hours'
import Grade from './components/grade'
import { useState } from 'react'
import { RxCross2 } from "react-icons/rx";


import { IoMdMenu } from "react-icons/io";


function App() {
    const [isClicked, setIsClicked] = useState("");

    const ToggleSidebar = () => {
      setIsClicked(!isClicked);
    };


  return (
    <>
    <div className='mobile-nav'> 
       <div onClick={ToggleSidebar} className="hamburger">
        {isClicked? <RxCross2 />:<IoMdMenu />}
      </div>
       <div>
      <img src={logo} alt="" />
      </div>
      <div>
        <a href="#">About</a>
      </div>
    
    </div>
    <section className='main-page'>
    <div className={isClicked?"clicked-sidebar-main":'sidebar-main'}>
    <Sidebar isClicked={isClicked} setIsClicked={setIsClicked} ToggleSidebar={ToggleSidebar}/>
    </div>
  
 
    <div className={isClicked?"clicked-hero":'hero'}>
      
      
        
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
