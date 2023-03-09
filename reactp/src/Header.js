import React, { useState } from 'react'
import ItemsList from './ItemsList';

const Header = () => {
    const [search,setSearch] = useState("");
    const [price,setPrice] = useState(600);
    const [category,setCategory] = useState("");
   
    const credentialDisplay=()=>{
         const credentialdisplay = document.getElementById("hamburger");
         credentialdisplay.classList.toggle('activate1')
    }

    const sortfunction =()=>{
        const credentialdisplay1 = document.getElementById("sort");
        credentialdisplay1.classList.toggle('sortoptionsclass')
   }

   const filterfunction =()=>{
    const credentialdisplay2 = document.getElementById("filter");
    credentialdisplay2.classList.toggle('sortoptionsclass')
}
  return (
    <div>
      <div className='mainheader'>
        <div className='divforheader'>
           <button className='hambergerbutton' onClick={credentialDisplay}><img src="./media/hamburger_button.png"/></button>
           <ul className="singinoptionsclass" id="hamburger">
              <button><a href='/Signin'>signin</a></button><br/>
              <button><a href='/Signup'>signup</a></button>
           </ul>
        </div>
        <div>
            <div className='title'><h1>Cloud kitchen</h1></div> 
             <input type="text" className='search' value={search} placeholder='search for an item' onChange={(e)=>setSearch(e.target.value)}/>
             <marquee>
                 <h3>-- Hungry? Eat healthy!</h3>
             </marquee>
        </div>
        <div className='divforheader'>
            <button className='hambergerbutton' onClick={sortfunction}><img src="./media/sort.png"/></button>
            <ul className="activate" id="sort">
              <button onClick={()=>setPrice(150)}>below 150</button>
              <button onClick={()=>setPrice(250)}>below 250</button>
              <button onClick={()=>setPrice(350)}>below 350</button>
              <button onClick={()=>setPrice(450)}>below 450</button>
            </ul>
        </div>
        <div className='divforheader'>
        <button className='hambergerbutton' onClick={filterfunction}><img src="./media/filter.jpg"/></button>
           <ul className="activate" id="filter">
              <button onClick={()=>setCategory("VEG")}>VEG</button>
              <button onClick={()=>setCategory("NON VEG")}>NON VEG</button>
              <button onClick={()=>setCategory("DRINKES")}>DRINKS</button>
              <button onClick={()=>setCategory("RICE ITEMS")}>RICE</button>
           </ul>
        </div>
        
      </div>
      <ItemsList/>
    </div>
  )
}

export default Header
