import './App.css';
import Video from './Video.js';
import Form from './Form';
import { useReducer, useState } from 'react';
function App() {

  // const [video,setvideo]=useState([]);

  const [videok,dispatch]=useReducer(reducerFunction,[]);

  function reducerFunction(videok,action){
       switch(action.type){
          case 'addVideo':
            return ([...videok,{
            ...action.payload,id:videok.length+1}])

          case 'deleteVid':
            return (videok.filter(i=>i.id!==action.payload))

          default: return videok
       }
  }

  function addVideo(vid){
    dispatch({type:"addVideo",payload:vid})
    console.log(vid);
    console.log(videok)
  }
  

  function deleteVid(id){
    dispatch({type:"deleteVid",payload:id})  }

  return (

    <div>

      <Form  addVideo={addVideo}  ></Form>

    {
       videok.map((i)=>{return <Video id={i.id}  src={i.url} title={i.title} views={i.views} deleteVid={deleteVid} ></Video>
    }
    )} 

   

    </div>
  );
}

export default App;
