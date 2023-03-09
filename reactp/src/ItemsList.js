import Header from './Header'
import React, { useEffect, useState } from 'react'

  const ItemsList = () => {
  const [itemdata,setItemdata] = useState([])
  const [rating,setRating] = useState(0)
  const [add,setAdd] = useState("")
 
  useEffect(()=>{
    fetch('https://food-itema-default-rtdb.firebaseio.com/telugu-skillhub-api/-MsE8GfWtRjc8x_t8pCC.json').then(res=>res.json()).then(data=>{setItemdata(data.items)});
  },[rating])

  return (
    <div>
        {
          itemdata.map((post)=>
            <div key={post.id} className='itemscontainer'>
              <div className='item'>
                <img src={post.url} className='image'/> 
                <div>
                  <p>Name: {post.name}</p>
                  <p>Price: {post.prize}</p>
                  <p>Rating: {post.rating}</p>
                  <ul className='ratingclass'>
                     <button onClick={()=>setRating(2)}>&#9733;</button>
                     <button onClick={()=>setRating(3)}>&#9733;</button>
                     <button onClick={()=>setRating(1)}>&#9733;</button>
                     <button onClick={()=>setRating(4)}>&#9733;</button>
                     <button onClick={()=>setRating(5)}>&#9733;</button>
                  </ul>
                  <button className='button' onClick={(e)=>setAdd(post.id)}>ADD</button>
                </div>
              </div>
            </div>
          
          )} 
    </div>
  )
}

export default ItemsList
