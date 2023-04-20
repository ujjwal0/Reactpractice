import React, { useEffect, useState } from 'react'

function Form({addVideo}) { 
  const intial={
    url:'https://picsum.photos/200/300',
    title:"",
    views:''
  }   
  const [vid,setvid]=useState(intial);

   function handleClick(e){
      e.preventDefault();
      addVideo(vid);
      
      
   }
  function handlechange(e){
     setvid({...vid,
      [e.target.name]:e.target.value
    })
    setvid(intial);


  }


   return (
    <div>
        <form>
            <input type='text' name="title" placeholder='title' onChange={handlechange}></input>
            <input type='text' name="views" placeholder='views' onChange={handlechange}></input>
            <button onClick={handleClick}>Submit</button>
        </form>
    </div>
  )
}

export default Form