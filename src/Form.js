import React, { useEffect, useState } from 'react'

const initial={
  url:"https://loremflickr.com/320/240/dog",
  
}

function Form( {addVid} ) {    
    const [video,setVideo]=useState(
      initial
      )
    function handleClick(e){
        e.preventDefault();
        addVid(video);
        setVideo(initial)
        
      }
    
  function handle(e){
    
    console.log(e.target.name,e.target.value);
    setVideo({...video,
        [e.target.name]:e.target.value
    })
    
  } 

 
  return (
    <div>
        <form>
            <input type='text' name="title" placeholder='title' onChange={handle} id='ok'></input>
            <input type='text' name="views" placeholder='views' onChange={handle} id='notok' ></input>
            <button onClick={handleClick}>Submit</button>
        </form>
    </div>
  )
}

export default Form