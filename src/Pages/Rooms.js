import React from 'react'
import Hero from "../Component/Hero";
import Banner from "../Component/Banner";
import {Link} from "react-router-dom";

const Rooms = () => {
  return (
    <div>
      <Hero hero="roomsHero">
        <Banner title="Our rooms">
        <Link to='/' className="btn-primary">
          Return home
        </Link>          
        </Banner>
      </Hero> 
    </div>
  )
}

export default Rooms
