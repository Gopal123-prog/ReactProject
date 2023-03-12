import React, { useEffect, useState } from 'react'

const Delete = () => {

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
                  <button className='button' onClick={(e)=>setAdd(post.id)}>DELETE</button>
                </div>
              </div>
            </div>
          )} 
    </div>
  )
}

export default Delete