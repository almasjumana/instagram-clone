import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react';
export default function Profile() {

    const [profile,setprofile]=useState(null);
  const[unfollow,setunfollow]=useState(0);
    const [followers,setfollowers]=useState([]);
    useEffect(()=>{
axios.get('http://localhost:3000/profile')
.then(data=>{setprofile(data.data); console.log(data)})
.catch(err=> console.log(err))

axios.get('http://localhost:3000/followers')
.then(data=>{setfollowers(data.data); console.log(data)})
.catch(err=> console.log(err))
    },[]);

   

const handleUnFollow=async (id) =>{
  axios.delete(`http://localhost:3000/followers/${id}`)
   .then(alert('Unfollowed'))
   .then(setunfollow(!unfollow))
  .catch(err=>console.log(err))
}

    function HandleOnChange(e){
        setprofile(prev =>({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }
    const handleUpdate=async()=>{
        axios.put('http://localhost:3000/profile',profile)
        .then(console.log("Updated.."))
        .catch(err=> console.log(err))
    }

    
  return (
    <div className='m-5'>
        {profile ?(
            <div>
              <img src={profile.profilePic} className='profile rounded-circle' />
            <h6>{profile.username}</h6>

            <input type="text" value={profile.username} name="username" className='form-control my-4'  onChange={HandleOnChange} />
            <button className='btn btn-primary my-4' onClick={handleUpdate}>Update</button>

            <input type="text" name="profilePic" value={profile.profilePic} className='form-control my-4' onChange={HandleOnChange} />
            <button className='btn btn-primary my-4' onClick={handleUpdate}>Update</button>
            </div>
        ):(
            <div>Loading..</div>
        )}
     
<div>
         

    {
      followers.length > 0 ? (

        followers.map(follower => (

          <div key={follower.id} className='d-flex my-4'>

            <img 
              src={follower.profilePic}
              className="rounded-circle dp"
              alt="follower"
            />

            <p>{follower.username}</p>
            <button className='btn btn-secondary ms-auto' onClick={()=>{handleUnFollow(follower.id)}}>Unfollow</button>

          </div>

        ))

      ) : (

        <p>Loading..</p>

      )
    }

    </div>


  </div>
)
}