import React, {  useState } from 'react'

const Interest = () => {

    const [principal, setPrincipal] = useState("");
    const [rate, setRate] = useState("");
    const [time, setTime] = useState("");
    const [interest, setInterest] = useState("")

    function calculateInterest(){
        const simpleInterest = (principal*rate*time)/100;
        setInterest(simpleInterest);

    }
  return (
    <section className='interest-section'>
    <div className='interest-calculator'>
        <h1 className='main-header'>Interest calculator</h1>
         <div className='interest-calculator-container'>
         <div>   <p>Principal (initial money):</p><input value={principal} onChange={(e)=>setPrincipal(e.target.value)} type="number" /></div>
         <div >   <p>Annual Interest Rate:</p><input  value={rate} onChange={(e)=>setRate(e.target.value) } type="number" max={99} /> </div>
         <div>   <p>Time in years:</p><input value={time} onChange={(e => setTime(e.target.value))} type="number" /></div>
         <div>   <button onClick={calculateInterest}>Calculate</button></div>

            
         </div>
    </div>
    <div className='answer-section'>
        <h3>Total interest in {time} years: ${interest} </h3>
        <h3>Total interest every month: ${(interest / (time * 12)).toFixed(2)} </h3>
    </div>
    </section>
  )
}

export default Interest