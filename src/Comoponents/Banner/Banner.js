import React, { useEffect, useState } from 'react'
import { API_Key,imgBaseUrl } from '../../Constants/constant'
import axios from '../../axios'
import  './banner.css'
function Banner() {
 const [movie, setMovie] = useState()
  useEffect(() => {
    console.log("fetch")
    axios.get(`trending/movie/week?language=en-US&api_key=${API_Key}`).then((Response)=>{
      setMovie(Response.data.results[0])
    }) 
   
  }, [])
  


  return (
    
    <div style={{ backgroundImage: `url(${movie ? imgBaseUrl+movie.backdrop_path :""}) `}}
    className='banner'>
      
        <div  className='content'>
         <h1  className='title'>{movie ?  movie.title : ""  }</h1>
         <div className='banner_button' >
            <button className='button' >play</button>
            <button className='button' >Mylist</button>
         </div>
         <h1 className='discription'>{movie ? movie.overview : ""}</h1>


        </div>
      
        <div className="fade">
            
        </div>
      
    </div>
    
  )
}

export default Banner


