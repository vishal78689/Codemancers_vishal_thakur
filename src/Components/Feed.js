import React, { useState } from 'react';
import Nav from './Nav';
import Post from './Post';
import Posts from './Posts';
import './Feed.css';

const data=[{
    id:"1 ",
    profilePic: "https://vishalthakur24.web.app/static/media/pic.f8b20bc8e24a0780a338.jpg",
    message:"Things aren’t always #000000 and #FFFFFF ",
    timestamp:"20-01-2022 ",
    image:"https://bestprofilepictures.com/wp-content/uploads/2021/04/Cool-Profile-Picture.jpg ",
    username:"Vishal Thakur",
      
},
{
  id:"2",
  profilePic:"https://vishalthakur24.web.app/static/media/pic.f8b20bc8e24a0780a338.jpg",
  message:"Good Morning Everyone..Hope you are doing well. ",
  timestamp:"21-01-2022",
  image:"https://media3.giphy.com/media/l2olcETxXQjImhNcm2/200.gif?cid=d8325c11v0e6bsxqe8syszxig3duygzivm6ps4a324eer8ss&rid=200.gif&ct=g",
  username:"Vishal Thakur"
}
]
const Feed = () => {
  const [posts,setPosts]=useState(data);
  const [active,setActive]=useState(false)
  return  <div className="feed change">
  <Nav setActive={setActive} active={active}/>
  {  (active)?
 <Post posts={posts} setPosts={setPosts}
 setActive={setActive}
    className="add"
 />
 :null
 }
 <div >
 {posts.map(post => (
      <Posts
        key={post.id}
        profilePic={post.profilePic}
        message={post.message}
        timestamp={post.timestamp}
        username={post.username}
        image={post.image}
        className='posts'
      />
      ))}
      </div>
</div>
};

export default Feed;
