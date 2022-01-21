import React, { useState } from 'react';
import user from '../images/user.png'
import Giphy from './Giphy/gif';
import './Post.css'



const Post = ({posts,setPosts,setActive}) => {

  const [isgif,setIsgif]=useState(false);
  const [gif,setGif]=useState([]);
  const [mess,setMess]=useState("");

console.log(posts);
console.log("vis");
const handlesubmit=()=>{
  let ans={
  id: posts[posts.length-1].id+1,
  profilePic:"https://st2.depositphotos.com/1009634/7235/v/600/depositphotos_72350117-stock-illustration-no-user-profile-picture-hand.jpg",
  message: mess ,
  timestamp:"21-01-2022" ,
  username:"Unknown",
  image:gif.fixed_height.url
  }
  const s=()=>setPosts([...posts,ans]);
  s();
  setGif([]);
  setIsgif(false);
  setActive(false)
  console.log(posts);
};
let a=false;
let now;
const colorchange=(color)=>{
     if(!a){
       a=true;
       now=color;
     }
  

  var ele=document.getElementById('m');
  ele.classList.remove(now);
  ele.classList.add(color);
  now=color;

}
  return <>
       <div className='post1' >
  <div className='content1'>
  <img src={user} className='img1'/>
  <input className='input' placeholder='Whats on your mind?'
    onChange={(e)=>setMess(e.target.value)}
  />
  </div>
  <i className='far fa-grin-alt lg'id="m"/>
  <div className='card' >
  <ul>
            <li  onClick={()=>colorchange("red")} className="color-item" id="red"></li>
            <li   onClick={()=>colorchange("green")} className="color-item" id="green"></li>
            <li  onClick={()=>colorchange("amber")} className="color-item" id="amber"></li>
            <li  onClick={()=>colorchange("blue")} className="color-item" id="blue"></li>
            <li  onClick={()=>colorchange("gray")} className="color-item" id="gray"></li>
        </ul>
  </div>
  <div className='options'>
    
    
    {
      (gif.length!==0)?<div>
       <img src={gif.fixed_height.url} className='imgf'/>
      </div>:
      <div className='options'>
       <div className='option'>
  <div className='item1'>
  <i class="fa fa-tag" aria-hidden="true"></i>
   <span> Tag Friends</span>
  </div>
  <div className='item1 x'>
  <i class="fas fa-map-marker-alt" aria-hidden="true"></i>
   <span> Check in</span>
  </div>

  </div>
  <div className='option'>
  <div onClick={()=>setIsgif(true)} className='item1'>
  <i class="fa fa-file-video"></i>
  
   <span> GIF</span>
  </div>
  <div className='item1 x'>
  <i class='far fa-calendar-alt'></i>
   <span> Tag Event</span>
  </div>

  </div>
  </div> 
    }


  <div className='submit'>
    <div > <i class="fa fa-lock"></i>Only me</div>
   <button className='btn' onClick={handlesubmit}>Post</button>
  </div>
  {

(gif.length==0 && isgif)?<div  className='gif'>
<Giphy setGif={setGif} gif={gif}
  setIsgif={setIsgif}
/>
</div>:null
}
 


  </div>
  </div></>
};

export default Post;
