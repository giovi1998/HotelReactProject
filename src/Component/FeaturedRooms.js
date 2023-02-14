import React, { useContext } from 'react';
import { RoomContext } from '../RoomContextProvider';
import Loading from './Loading';
import Title from "./Title";
import Room from './Room';
import "../styles/FeaturedRooms.css"
const FeaturedRooms = () => {
    //Le camere
    const  roomsFromTheData = useContext(RoomContext).featuredRooms;
    const  isLoading = useContext(RoomContext).loading;
    const rooms = roomsFromTheData.map (room=>{
        return <Room key={room.id} room={room}/>
    })
  return (
    <section className='featured-rooms'>
        <Title title="Featured Rooms" />
        <div className='featured-rooms-center'>
        {isLoading ? <Loading /> : rooms}
        </div>
      {/* {isLoading ? <Loading /> : rooms.map((room,id)=><div key={id}>{room.name}</div>)} */}
    </section>
  )
}

export default FeaturedRooms
