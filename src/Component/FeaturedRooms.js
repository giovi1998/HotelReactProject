import React, { useContext } from 'react';
import { RoomContext } from '../RoomContextProvider';
import Loading from './Loading';

const FeaturedRooms = () => {
    //Le camere
    const  rooms = useContext(RoomContext).featuredRooms;
  return (
    <>
      {rooms.map((room,id)=><div key={id}>{room.name}</div>)||<Loading />}

    </>
  )
}

export default FeaturedRooms
