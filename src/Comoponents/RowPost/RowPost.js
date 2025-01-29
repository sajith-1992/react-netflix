import React, { useEffect,useState} from 'react'
import axios from '../../axios'
 import { imgBaseUrl,API_Key } from '../../Constants/constant'
 import  YouTube from 'react-youtube'

import './RowPost.css'


function RowPost(props) {
  const[post,setPost]=useState([])
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
    width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };












  const vedioHandler=(id)=>{
    axios.get(`${id}/videos?language=en-US'&api_key=${API_Key}`).then((Response)=>{
      console.log(Response.data)
    })
    

  }
  
  


  return (
    <div className='row'>
      <h1>{props.title}</h1>
      <div className='posters' >


        {post.map((obj)=><img onClick={()=>vedioHandler(obj.id)} className={ props.isSmall ? 'smallposter' :'poster'} src={`${imgBaseUrl + obj.backdrop_path }`}alt='post' />)
       
}
        

      </div>
            
            
            <YouTube videoId="62gSxdSkUsQ" opts={opts} />

    </div>
  )
}

export default RowPost
