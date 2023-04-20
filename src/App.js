import './App.css';
import Video from './Video.js';
import Form from './Form';
import { useReducer, useState } from 'react';
function App() {
   const [vid,setvid]=useState([]);
  
  // const [videos,dispatch]=useReducer(VideoReducer,vid);


  function VideoReducer(vid,action){
      switch(action.type){
        case 'addVid':
          return [...vid,
           {...action.payload,id:vid.length+1}
          ]
      }
  }



   function addVid(videos){
    setvid([...vid,
      {...videos,id:vid.length+1}
    ])
    
    // dispatch({type:'addVid',payload:videos});

  }
    function deleteVid(id){
      setvid(vid.filter(i=>(i.id!==id)))
    }
   

  return (

    <div>
     
     <Form addVid={addVid}></Form>

      {
      vid.map(i => <Video src={i.url} title={i.title} views={i.views} id={i.id} deleteVid={deleteVid}></Video>)

      }

    </div>
  );
}

export default App;
