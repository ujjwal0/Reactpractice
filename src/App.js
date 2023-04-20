import './App.css';
import Video from './Video.js';
import Form from './Form';
import { useReducer, useState } from 'react';
import vid from './VidDb'
function App() {

  const [video,setvideo]=useState([]);


  function addVideo(vid){
    setvideo([...video,{
      ...vid,id:video.length+1}])    
  }
  

  function deleteVid(id){
    setvideo(video.filter(i=>i.id!==id));
  }

  return (

    <div>

      <Form  addVideo={addVideo}  ></Form>
      {
        video.map((i)=>{
         return  <Video id={i.id}  src={i.url} title={i.title} views={i.views} deleteVid={deleteVid} ></Video>
        })
      }
     
   
   

    </div>
  );
}

export default App;
