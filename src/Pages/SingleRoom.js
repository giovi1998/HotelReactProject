import React, { useContext ,useState} from 'react';
import { RoomContext } from '../RoomContextProvider';
import Hero from "../Component/Hero";
import Banner from "../Component/Banner";
import {Link , useParams  } from "react-router-dom";
import defaultImg from "../images/room-1.jpeg";
import "../styles/SingleRoom.css"
import "../styles/Hero.css"



const SingleRoom = () => {
  let { slug } = useParams();
  console.log(slug);
  const [singleRoom,setSingleRoom] = useState({
    slug:slug,
    defaultBcg:defaultImg
  });
  
  console.log(singleRoom.slug);
  const  getRoom = useContext(RoomContext).getRoom;
  const room = getRoom(singleRoom.slug);
  console.log(room);
  if(!room){
    return (<div className='error'>
      <h3>No such room could be found</h3>
      <Link to="/" className='btn-primary'>
        Back to Home
      </Link>
    </div>);
  }
  console.log(room);
  const {
    name,
    description,
    capacity,
    size,
    price,
    extras,
    breakfast,
    pets,
    images
  }=room;
  return (
    <>
    <Hero hero='roomsHero'>
      <Banner title={`${name} room`} >
      <Link to="/rooms" className='btn-primary'>
        Back to Rooms
      </Link>
      </Banner>
    </Hero>
    <section className='single-room'>
      <div className='single-room-images'>
        {images.map((item,index)=>{
          return <img key={index} src={item} alt ={name} />;
        })}
      </div>
      <div className='single-room-info'>
        <article className='desc'>
          <h3>details</h3>
          <p>{description}</p>
        </article>
        <article className='info'>
          <h3>info</h3>
          <h6>price: ${price}</h6>
          <h6>size: ${size} MQ</h6>
          <h6>
           {capacity >1 ? `${capacity} people` : 
            `${capacity} person`}
          </h6>
          <h6>{pets ? "pets allowed" : "pets not allowed"}</h6>
          <h6>{breakfast && "free breakfast included"}</h6>
        </article>
      </div>
    </section>
    <section className='room-extras'>
      <h6>extras</h6>
      <ul className='extras'>
        {extras.map((item,index) => {
          return <li key={index}>-{item}</li>;
        })}
      </ul>
    </section>
    </>
    
  )
}

export default SingleRoom
