import React, { useState } from 'react'

const Add = () => {
      const [item,setItem] = useState({
          ItemName:"",
          Itemprice:"",
          ItemType:""
      })
    const additemfun=(e)=>{
      setItem({...item,[e.target.name]:e.target.value})
    }
    const addFunHandler =()=>{
        console.log("hello")
    }
  return (
    <div style={{textAlign:'center',marginTop:'50px'}}>
        <form onSubmit={addFunHandler}>
            <input type='file'></input><br/><br/>
            <strong style={{color:'#e8b652'}}>Name : </strong> <input type="text" name='name' className='inputs' placeholder='  Item-name' onChange={additemfun}></input><br/><br/>
            <strong style={{color:'#e8b652'}}>Price : </strong><input type="text" name='price' className='inputs' placeholder='   Item-price' onChange={additemfun}></input><br/><br/>
            <strong style={{color:'#e8b652'}}>Type : </strong><input type='text' name='type' className='inputs' placeholder='  Category-Of-Item' onChange={additemfun}></input><br/><br/> 
            <input type="submit" value="ADD" className='button'></input><br></br><br></br>

        </form>
    </div>
  )
}

export default Add