import React, { useState ,useEffect} from 'react'
import {useNavigate} from 'react-router-dom';
import {collection,getDocs} from "firebase/firestore";
import {db} from "./firebase";

const AdminSignin = () => {
  
  const navigate = useNavigate();
  const vdata = [];
  const collectionreff = collection(db,"userdata"); 

   useEffect(()=>{
    getDocs(collectionreff).then((snapshot)=>{
      snapshot.docs.forEach((doc)=>{
        vdata.push({...doc.data(),id:doc.id})
      })
    }).catch(err=>{console.log(err.message)})
  },[])
 
  
   const adminHandler=(e)=>{
    e.preventDefault();
    var flag = 0;
    var i=0;
    for (i=0;i<vdata.length;i++){
      if (vdata[i].username1===username){
        flag = 1;
        if (vdata[i].password1===password){
          navigate("../admin");
          alert("successfully loggedin")
          break;
        }
      }
      if (flag===1 && password1!==""){
        alert("Incorrect Password");
        break;
      }
    }
    if (flag===0 && i===vdata.length){
      alert("User does not exist");
    }
    
   }

    const [admin,setAdmin] = useState({
        username:"",
        password:""
    })
    const adminchangehandler =(e)=>{
        setAdmin({...admin,[e.target.name]:e.target.value})
    }
  return (
    <div style={{textAlign:"center"}}>
        <form id='signin' onSubmit={adminHandler}>
              <input type="text" placeholder='   adminUserName' name='adminusername' className='inputs' onChange={adminchangehandler}></input><br/><br/>
              <input type='password' placeholder=' adminPassword' name='password' className='inputs' onChange={adminchangehandler}></input><br/><br/>
              <input type="button" value="login" className='button'></input>
      </form>
    </div>
  )
}

export default AdminSignin