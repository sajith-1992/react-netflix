import React, { useEffect,useState} from 'react'
import axios from '../../axios'
 import { imgBaseUrl} from '../../Constants/constant'

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


  
  


  return (
    <div className='row'>
      <h1>{props.title}</h1>
      <div className='posters' >


        {post.map((obj)=><img  className={ props.isSmall ? 'smallposter' :'poster'} src={`${imgBaseUrl + obj.backdrop_path }`}alt='post' />)
       
}
        

      </div>
    </div>
  )
}

export default RowPost
