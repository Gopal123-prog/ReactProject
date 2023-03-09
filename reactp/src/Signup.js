import React, { useRef } from 'react';
import { useState,useEffect} from 'react';
import {Link,useNavigate} from 'react-router-dom';
import {collection,addDoc,getDocs} from "firebase/firestore";
import {db} from "./firebase";

const Signup = () => {
  const form = useRef();
  const [datasubmited,setDatasubmited] = useState({
    mail:"",
    username:"",
    password:"",
    conformpasswword:""
  })
 const navigate = useNavigate();
 const indata = []
  useEffect(()=>{
    getDocs(collectionreff).then((snapshot)=>{
      snapshot.docs.forEach((doc)=>{
        indata.push({...doc.data()})
      })
    }).catch(err=>{console.log(err.message)})
  })

 
const collectionreff = collection(db,"userdata");
const onchangeHandler = (e)=>{
  setDatasubmited({...datasubmited,[e.target.name]:e.target.value})
}
const onsubmithandler = async(e)=>{
  e.preventDefault();
  var istheir = 0;
  for (var i=0;i<indata.length;i++){
    if (indata[i].username===datasubmited.username){
      alert("User name already exist");
      istheir = 1;
      break;
    }
  }

   if (istheir===0){
    if ((datasubmited.username!=="" &&  datasubmited.mail!=="" && datasubmited.password!=="" && datasubmited.password==datasubmited.conformpasswword)){
      await addDoc(collectionreff,datasubmited);
      alert("Accounted created successfully");
      navigate('/signin')
    }else{
      alert("fill the details to create account or the password doesn't match");
    }
    
   }
}
  
  return (
    <div id='signup'>
        <form method="post"  ref={form} autoComplete='off'>
        <center>
        <h2>Signup</h2>
        <input type="mail" name='mail' className='inputs'   placeholder='  mail' onChange={onchangeHandler}></input><br/><br/>
           <input type="text" name='username' className='inputs' placeholder='  username' onChange={onchangeHandler}></input><br/><br/>
           <input type="password" name='password' className='inputs' placeholder='  password' onChange={onchangeHandler}></input><br/><br/>
           <input type="password" name='password' className='inputs' placeholder='  conform password' onChange={onchangeHandler}></input><br/><br/>
           <button onClick={onsubmithandler} className='button'>Create account</button><br/><br/>
           <Link to='/signin'><button className='button'>Signin</button></Link>
        </center>
      </form>
    </div>

  )
}

export default Signup