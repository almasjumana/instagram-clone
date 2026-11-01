import React, { useState } from 'react'
import { useEffect } from 'react';

export default function Posts() {
    const [posts,setposts]=useState([]);

    useEffect( ()=>{
        fetch('http://localhost:3000/posts').
        then((data=> data.json())).
        then((data=>setposts(data))).catch
        (err=> console.log(err))
},[]);
    
  return (
    <div className='d-flex justify-content-center'>
    
        {posts.length>0 ? (
            <div>
                {posts.map((post)=>(
                    <div key={post.id}>
                        <div className='d-flex'>
                        
                            <img style={{marginTop:"20px"}}
                            className="dp rounded-circle"
                             src={post.profilePic} alt="profile"
                             
                             />
                            <h6 style={{marginTop:"20px"}}>{post.username}</h6>
                            </div>

                            <img className='post' src={post.postImage} alt="post" />
                            <div>
                                <i className="bi bi-heart"></i>
                                <i className="bi bi-chat"></i>
                                <i className="bi bi-send"></i>
                                </div>
                                <div>
                                    <b>{post.likes} likes</b>
                                    </div>
                                    <p>{post.caption}</p>
            </div>
                ))}
                </div>
        ):(
            <div>
                Loading Posts
                </div>

        )}
    </div>

  )
}
