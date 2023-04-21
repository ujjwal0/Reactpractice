import React, { useState } from 'react'
import "./Video.css"
function Video(props) {


  return (
    <div>

        <div>
          <img src={props.src} alt='pic'></img>
          <button onClick={()=>props.deleteVid(props.id)}>X</button>
          <button onClick={()=>props.edit(props.id)}>Edit</button>
          <p>{props.title}</p>
          <p>{props.views}</p>
        </div>
        
        </div>
  )
}

export default Video;