import React, { useEffect, useState } from 'react'
import { Button, Checkbox, Input } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { PoweroffOutlined } from '@ant-design/icons';
import { Space } from 'antd';
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
      setvid(intial)

   }
  function handlechange(e){
     setvid({...vid,
      [e.target.name]:e.target.value
    })
  }


   return (
    <div>
        <form>
            
            <Input size="large"  prefix={<UserOutlined />} value={vid.title} name="title" placeholder='title' />
            <Input size="large"  prefix={<UserOutlined />} value={vid.views} name="views" placeholder='views' />
            <Button type="primary"  onClick={handleClick}>Click me!</Button>
        </form>
    </div>
  )
}

export default Form