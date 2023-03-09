import axios from 'axios'
import React, { useEffect } from 'react'
import {collection,addDoc} from "firebase/firestore";
import { db } from './firebase';

const Push = () => {

    const collectionref = collection(db,"itemlist");
    useEffect(()=>{

     axios.get("https://food-itema-default-rtdb.firebaseio.com/telugu-skillhub-api/-MsE8GfWtRjc8x_t8pCC.json").then(docs=>{addDoc(collectionref,docs.data)});
    
});
  return (
    <div>
      <P>Item added successfully</P>
    </div>
  )
}

export default Push
