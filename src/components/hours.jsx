import React, { useState } from 'react'


function Hours() {
    const [startTime, setStartTime] = useState();
    const [endTime, setEndTime] = useState();
    const [result, setResult] = useState();

    

function calculateHours(){
    const [startHours, StartMinutes] = startTime.split(":").map(Number);
    const [endHours, endMinutes] = endTime.split(":").map(Number);

    const start = new Date();
    const end = new Date();

    start.setHours(startHours,StartMinutes,0);
    end.setHours(endHours,endMinutes,0);

    if(end < start){
        end.setDate(end.getDate() + 1);
    }

     const diffInMs  = end - start;

     const diffInMinutes = diffInMs / ( 1000 * 60 );
      const diffInHours = (diffInMinutes / 60).toFixed(2);


      setResult(diffInHours)

    
     
     }




  return (
    <section className='hours'>
    <div><h1 className='main-header'>Hours Calculator</h1></div>
    <div className='hours-container'>
        <input type="time" onChange={(e) => setStartTime(e.target.value)} /> <span> to </span>
        <input type="time" onChange={(e)=> setEndTime(e.target.value)} />

        <button onClick={calculateHours}>Calculate</button>
<br />
<div className='result-hours'>
        <p>Total hours worked : {result} Hrs</p>
</div>


    </div>
    </section>
  )
}

export default Hours;