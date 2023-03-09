import React from 'react'

const Feedback = () => {
  return (
    <div style={{textAlign:'center'}}>     
      <input type="textarea" className='inputs feed' placeholder='  Enter feedback here'></input><br/><br/>
      <button>SUBMIT</button>
    </div>
  )
}

export default Feedback