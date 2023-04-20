import React, { useState } from 'react'
import "./Video.css"
function Video(props) {
//   const [play,setplay]=useState(false);
  
//  function handleClick(){
//     if(play){
//       console.log("pause");
//     }
//     else{
//       console.log("play");
//     }
//    setplay(!play);
//   }


  return (
    <div>

        <div>
          <img src={props.src}></img>
          <button onClick={()=>props.deleteVid(props.id)}>X</button>
          <button onClick={()=>props.edit(props.id)}>Edit</button>
          <p>{props.title}</p>
          <p>{props.views}</p>
        </div>
        {/* <button onClick={handleClick}>{play ? "play":"pause"}</button> */}

        </div>
  )
}

export default Video;