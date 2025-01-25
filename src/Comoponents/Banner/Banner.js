import React, { useEffect } from 'react'
import { API_Key } from '../../Constants/constant'
import axios from '../../axios'
import  './banner.css'
function Banner() {
  // useEffect(() => {
  //   axios.get(`trending/movie/week?language=en-US&api_key=${API_Key}`).then((Response)=>{
  //     console.log(Response.data)
  //   }) 
   
  // }, [])
  
 
  

  return (
    <div className='banner'>

        <div  className='content'>
         <h1  className='title'>Movie Name</h1>
         <div className='banner_button' >
            <button className='button' >play</button>
            <button className='button' >Mylist</button>r
         </div>
         <h1 className='discription'>t looks like you’re no longer using the Ubersuggest Chrome extension. We’ve automatically disabled it. You can turn it back on quickly by clicking the “Unhide” button.</h1>


        </div>
      
        <div className="fade">
            
        </div>
      
    </div>
  )
}

export default Banner


