import React from 'react';
import './Posts.css'

const Posts = ({ profilePic, image, username, timestamp, message }) => {

console.log(image);
return <>
      <div className="post">
      <div className="post__top">
        <img src={profilePic} className="post__avatar" />
        <div className="post__topInfo">
          <h3>{username}</h3>
          <p>{timestamp}</p>
        </div>
      </div>
      <div className="post__bottom">
        <p>{message}</p>
      </div>
      <div className="post__image">
        <img src={image} alt="" />
      </div>

      <div className="post__options">
        <div className="post__option">
        <i class="fa fa-thumbs-up"></i>
          <p>Like</p>
        </div>
        <div className="post__option">
        <i class='far fa-comment'></i>
          <p>Comment</p>
        </div>
        <div className="post__option">
        <i class="fa fa-share-alt"></i>
          <p>Share</p>
        </div>
        
      </div>
    </div>
</>
};

export default Posts;
