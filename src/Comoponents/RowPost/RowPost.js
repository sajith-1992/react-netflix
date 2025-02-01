import React, { useEffect,useState} from 'react'
import axios from '../../axios'
 import { imgBaseUrl,API_Key } from '../../Constants/constant'
 import  YouTube from 'react-youtube'

import './RowPost.css'


function RowPost(props) {
  const[post,setPost]=useState([])
  const[vedioUrl,setvedioUrl]=useState()

  useEffect(()=>{
   axios.get(props.url).then((Response)=>{
    console.log(Response.data.results)
    setPost(Response.data.results)
   }).catch(err=>{
    alert('network error')
   })
  },[props.url])

  const opts = {
    height: '390',
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };












  const vedioHandler=(id)=>{

    console.log(id)
    axios.get(`movie/${id}/videos?language=en-US&api_key=${API_Key}`).then(Response=>{
      console.log(Response.data)
      if(Response.data.result.length !== 0){
        setvedioUrl(Response.data.results[0]
 )
      }else{
        console.log("Array Empty")
      }
      
    })
    

  }
  
  


  return (
    <div className='row'>
      <h1>{props.title}</h1>
      <div className='posters' >


        {    post.map((obj)=>(<img onClick={()=>vedioHandler(obj.id)}  className={ props.isSmall ? 'smallposter' :'poster'} src={`${imgBaseUrl + obj.backdrop_path }`}alt='post' />))
       
}
        

      </div>
            
            
       {  url && <YouTube videoId= opts={opts} />}

    </div>
  )
}

export default RowPost
