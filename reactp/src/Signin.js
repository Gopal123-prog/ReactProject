import React, {useState,useEffect} from 'react';
import {Link,useNavigate} from 'react-router-dom';
import {collection,getDocs} from "firebase/firestore";
import {db} from "./firebase";

const Signin = () => {
  const [username1, setUsername1] = useState('');
  const [password1, setPassword1] = useState('');

  useEffect(()=>{
    getDocs(collectionreff).then((snapshot)=>{
      snapshot.docs.forEach((doc)=>{
        vdata.push({...doc.data(),id:doc.id})
      })
    }).catch(err=>{console.log(err.message)})
  })
  const navigate = useNavigate();
  
  const vdata = [];
  const collectionreff = collection(db,"userdata");

  const submitHandler1=(e)=>{
    e.preventDefault();
    var flag = 0;
    var i=0;
    for (i=0;i<vdata.length;i++){
      if (vdata[i].username===username1){
        flag = 1;
        if (vdata[i].password===password1){
          navigate("./dashboard");
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
  return (
    <div>
    
      <form id='signin' onSubmit={submitHandler1}>
        <center>
         <h2>Signin</h2>
           <input type="text" name={username1} className='inputs' placeholder='  username' onChange={(e)=>setUsername1(e.target.value)}></input><br/><br/>
           <input type="password" name={password1} className='inputs' placeholder='   password' onChange={(e)=>setPassword1(e.target.value)}></input><br/><br/>
           <input type="submit" value="Login" className='button'></input><br></br><br></br>
           Not a member?&nbsp;<Link to='/signup'>signup</Link>
          

        </center>
      </form>
    </div>
  )
  }

export default Signin