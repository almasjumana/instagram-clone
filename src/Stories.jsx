import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Stories() {

  const [stories,setstories] = useState([]);

  const navigate = useNavigate();

  let tot = stories.length;

  useEffect(()=>{

    fetch("http://localhost:3000/stories")
      .then(data=>data.json())
      .then(data=>setstories(data))
      .catch(err=>console.log(err));

  },[]);


  return (

    <div className='story d-flex'>

      {
        stories.length > 0 ?

        stories.map((story)=>(

          <div 
            key={story.id} 
            className='mx-1'
            onClick={()=>{

              navigate(`/story/${story.id}/${tot}`)

            }}
          >

            <div className='gradient-border'>

              <img 
                src={story.profilePic}
                alt="dp"
                className="story-dp rounded-circle"
              />

            </div>


            <p 
              className='text-truncate'
              style={{width:"50px"}}
            >
              {story.username}
            </p>


          </div>

        ))

        :

        <p>Loading..</p>

      }

    </div>

  )
}