import React from 'react'
import { useEffect } from 'react';
import { useState} from 'react';
import { useParams,Link, useNavigate } from 'react-router-dom'
export default function Viewstories() {

  const {id,tot}=useParams();

  const [story,setstory]=useState(null);
  const navigate=useNavigate();
  useEffect(()=>{

  fetch(`http://localhost:3000/stories/${id}`)
    .then(data=>data.json())
    .then(data=>setstory(data))
    .catch(err=>console.log(err))

},[id]);
if(id>tot || id<=0){
  navigate('/');
}
  return (
  <div>

    {
      story ?

      <div className="d-flex justify-content-center align-items-center bg-dark vh-100">

        <Link to={
  Number(id)-1 <= 0 
  ? "/" 
  : `/story/${Number(id)-1}/${tot}`
}>
          <i className="bi bi-arrow-left-circle-fill fs-1 text-white"></i>
        </Link>


        <img 
          src={story.image}
          alt="story"
          style={{
            height:"100vh",
            maxWidth:"500px",
            objectFit:"cover"
          }}
        />


        <Link to={`/story/${Number(id)+1}/${tot}`}>
          <i className="bi bi-arrow-right-circle-fill fs-1 text-white"></i>
        </Link>


      </div>

      :

      <p>Loading...</p>

    }

  </div>
)
}