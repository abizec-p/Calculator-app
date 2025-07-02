import React from 'react'

function Grade() {
  return (
    <section className='grade'>
    <div className='main-header'>
      <h3>Grade Calculator</h3>
    </div>
    <div className='grade-container' >
      <div className='title'>
        <div>Subject</div>
        <div>Acheived marks</div>
        <div>Full marks</div>
      </div>
      <div className='first value'>
        <div><input type="text" /></div>
        <div><input type="number" /></div>
        <div><input type="number" /></div>
      </div>
      <div className='second value'>
        <div><input type="text" /></div>
        <div><input onChange={(e)=> e.target.value} type="number" /></div>
        <div><input type="number" /></div>
      </div>
      <div className='third value'>
        <div><input type="text" /></div>
        <div><input onChange={(e)=> e.target.value} type="number" /></div>
        <div><input type="number" /></div>
      </div>
      <div className='fourth value'>
        <div><input type="text" /></div>
        <div><input onChange={(e)=> e.target.value} type="number" /></div>
        <div><input type="number" /></div>
      </div>
      <div className='fifth value'>
        <div><input type="text" /></div>
        <div><input onChange={(e)=> e.target.value} type="number" /></div>
        <div><input type="number" /></div>
      </div>
      <div className='sixth value'>
        <div><input type="text" /></div>
        <div><input onChange={(e)=> e.target.value} type="number" /></div>
        <div><input type="number" /></div>
      </div>
    

    </div>

    <div className='grade-result'>
      <p>Total marks acheived: </p>
    </div>
    </section>
  )
}

export default Grade