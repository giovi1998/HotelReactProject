import React from 'react'
import Hero from "../Component/Hero";
import Banner from "../Component/Banner";
import {Link} from "react-router-dom";
import Services from '../Component/Services';
import FeaturedRooms from '../Component/FeaturedRooms';


const RoomContext = React.createContext({});
const HomePage = () => {
  return (
    <div>
      <Hero>
        <Banner title="Luxurios rooms" subtile="Deluxe rooms starting at $299">
        <Link to='/rooms' className="btn-primary">
          Go to our rooms
        </Link>          
        </Banner>
      </Hero> 
      <Services />
      <FeaturedRooms />
    </div>
  )
}

export default HomePage
