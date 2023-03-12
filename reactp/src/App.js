import Signin  from './Signin'
import React from 'react'
import Signup from './Signup'
// import ItemsList from './ItemsList';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Errorpage from './Errorpage'; 
import Dashboard from './Dashboard'; 
import Header from './Header';
import Home from './Home';
import Orders from './Orders';
import Track from './Track';
import Feedback from './Feedback';
import  Cart  from './Cart';
import Admin from './Admin';
import Add from './Add';
import Delete from './Delete';
import AdminSignin from './AdminSignin';
// import Push from './Push'


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* <Route path='/Push' element={<Push/>}/> */}
          <Route path='/signin' element={<Signin/>}></Route>
          <Route path='/signup' element={<Signup/>}></Route>
          <Route path="/adminsignin" element={<AdminSignin/>}></Route>
          <Route path="/admin" element={<Admin/>}></Route>
          <Route path="/admin/add-item" element={<Add/>}></Route>
          <Route path="/admin/delete-item" element={<Delete/>}></Route>
          <Route path='/' element={<Header/>}></Route>
          <Route path='/dashboard' element={<Dashboard/>}></Route>
          <Route path='/dashboard/cart' element={<Cart/>}></Route>
          <Route path='/dashboard/home' element={<Home/>}></Route>
          <Route path='/dashboard/orders' element={<Orders/>}></Route>
          <Route path='/dashboard/track' element={<Track/>}></Route>
          <Route path='/dashboard/feedback' element={<Feedback/>}></Route>
          <Route path='*' element={<Errorpage/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App