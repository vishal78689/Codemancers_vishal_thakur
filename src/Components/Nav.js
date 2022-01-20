import React from 'react';
import './nav.css'
const Nav = ({active,setActive}) => {
   
const handlechange=()=>{
  setActive(true);
  var element = document.getElementById("create");
  element.classList.add("active");
}
const reverse=()=>{
  setActive(false);
  var element = document.getElementById("create");
  element.classList.remove("active");
}
  return <div className='nav1'>
      <div className='bttn ' 
        id="create"
      onClick={handlechange}>
      <i class='fas fa-pen'></i>
          <span>Compose Post</span>
      </div>
      <div className='bttn'>
      <i class='far fa-file-image'></i>
          <span>Photo/Video Album</span>
      </div>
      <div className='bttn'>
      <i class='fas fa-video' ></i>
          <span>Live Video</span>
      </div>

      {  (active)?
        <i class="fa fa-close" onClick={reverse}></i>
        :null
      }
    
  </div>;
};

export default Nav;
