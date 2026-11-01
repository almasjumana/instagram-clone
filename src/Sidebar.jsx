import React from 'react'
import instafont2 from "./assets/instafont2.jpg"
import { useNavigate } from 'react-router-dom'
export default function Sidebar() {

  const navigate=useNavigate();
  return (
   <div className='m-3 position-fixed'>
    <div className='d-flex flex-column gap-3 margin-right:20px '>
<img className='logo-text' src={instafont2} alt="instagram" width="200"/>
<div><i className="bi bi-house-fill"></i>Home</div>
<div><i className="bi bi-search-heart"></i>Search</div>
<div><i className="bi bi-compass"></i>Explore</div>
<div><i className="bi bi-collection-play-fill"></i>Reels</div>
<div><i className="bi bi-chat-dots"></i>Msg</div>
<div><i className="bi bi-plus-circle"></i>Create</div>
<div onClick={()=>{navigate('/profile')}}><i className="bi bi-person-fill"></i>Profile</div>
    </div>
    <div className='position fixed bottom 0 d-flex flex-column gap-3'>
      <div><i class="bi bi-threads"></i>Threads</div>
      
      <div><i class="bi bi-list"></i>More</div>
    </div>
   </div>
  )
}
