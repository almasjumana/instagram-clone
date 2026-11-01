import React, { useEffect, useState } from 'react'
import axios from 'axios';
export default function Suggestions() {

const [profile,setprofile] = useState(null);
const [suggest,setsuggest] = useState([]);

useEffect(()=>{

fetch("http://localhost:3000/profile")
.then(res=>res.json())
.then(data=>setprofile(data))


fetch("http://localhost:3000/suggestions")
.then(res=>res.json())
.then(data=>setsuggest(data))


},[])
const handleFollow=async (id,username) =>{
  axios.post("http://localhost:3000/followers",{ id, username})
   .then(()=>alert('followed'))
  .catch(err=>console.log(err))
}



return (
<div>

{
profile && 
<div className="d-flex align-items-center">

<img
className="dp rounded-circle"
src={profile.profilePic}
alt="profile"
/>

<h5 className="ms-2">
{profile.username}
</h5>

<small className='ms-auto text-primary'>Switch</small>

</div>
}


<div className='d-flex'>
  <p>Suggested for you</p>
  <b className='ms-auto'>See All</b>
 
</div>

{
suggest.map((user)=>(

<div className="d-flex align-items-center" key={user.id}>

<img
className="dp rounded-circle"
src={user.profilePic}
alt="profile"
/>

<h6 className="ms-2">
{user.username}
 
</h6>
<a className='text-primary ms-auto' onClick={()=>handleFollow(user.id,user.username) }>Follow</a>

</div>

))
}



</div>
)

}