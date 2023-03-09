import React, { useEffect, useState } from 'react'

const Orders = () => {

    const [orders,setOrders] = useState([])
    useEffect(()=>{
        fetch("https://food-itema-default-rtdb.firebaseio.com/telugu-skillhub-api/-MsE8GfWtRjc8x_t8pCC.json").then(res=>res.json()).then(data=>setOrders(data.items))
    })
  return (
    <div>
      {
          orders.map((post)=>
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
                </div>
              </div>
            </div>
          
          )} 

       
    </div>
  )
}

export default Orders