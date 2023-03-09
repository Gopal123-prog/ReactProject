import React, { useEffect, useState } from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const Track = () => {
  const [latitude,setLatitude] = useState('')
  const [longitude,setLongitude] = useState('')

  useEffect(()=>{
      navigator.geolocation.getCurrentPosition(position=>{
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
      console.log(latitude,longitude)
    })
  },[latitude,longitude])
  const mapStyles = {        
    height: "1000px",
    width: "1200px"};
  
  const defaultCenter = {
    lat:latitude, 
    lng:longitude
  }
  
  return (
     <LoadScript
       googleMapsApiKey='AIzaSyA-wbEdigBLfaucHelrOOnKzx-scNzZJrY'>
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={13}
          center={defaultCenter}
        />
     </LoadScript>
  )
}

export default Track;