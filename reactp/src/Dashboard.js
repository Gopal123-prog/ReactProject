import React from 'react'

const Dashboard = () => {

  return (
     <div >
        <div className='dashboardsidebar'>
              <button className='buttonhead'><a href='./dashboard/home' target='iframetarget'>home</a></button>
              <button className='buttonhead'><a href='./dashboard/orders' target='iframetarget'>orders</a></button>
              <button className='buttonhead'><a href='./dashboard/track' target='iframetarget'>track</a></button>
              <button className='buttonhead'><a href='./dashboard/feedback' target='iframetarget'>feedback</a></button>  
              <a href='./dashboard/cart' target='iframetarget'><img src="./media/cart.png"/></a>
        </div>
        <div className='iframedisplayclass'>
           <iframe  src='./dashboard/home' name="iframetarget" title="iframe"/>
        </div>
     </div>
  )
}

export default Dashboard
