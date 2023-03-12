import React from 'react'
import Add from './Add'

const Admin = () => {
      
    

  return (
    <div>
      <div className='dashboardsidebar'>
      <button className='buttonhead'><a href='/admin/add-item' target='adminframe'>ADD-ITEM</a></button>
      <button className='buttonhead'><a href='/admin/delete-item' target='adminframe'>DELETE-ITEM</a></button>
      <button className='buttonhead'><a href='/'>LOGOUT</a></button>
      </div>
      <div className='iframedisplayclass'>
        <iframe src='./admin/add-item' name='adminframe'></iframe>
      </div>
    </div>
  )
}

export default Admin