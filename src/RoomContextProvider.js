import React, { createContext, useEffect, useState } from 'react';
import roomsFromData from "./data";

export const RoomContext = createContext();

const rooms = (items) =>{
  let rooms= items.map(item =>{
      let id = item.sys.id;
      let images = item.fields.images.map(image => image.fields.file.url);
      let room = {...item.fields,images,id}
      return room;
  });
  return rooms;
};

const featuredRooms = (rooms) =>{
  return rooms.filter(room => room.featured === true);
};


export const RoomContextProvider = ({ children }) => {
  const [itemsRooms, setRooms] = useState({
    rooms: rooms(roomsFromData),
    sortedRooms:rooms(roomsFromData),
    featuredRooms: featuredRooms(rooms(roomsFromData)),
    loading:false
  }
  );

  const getRoom = (slug) =>{
    let tempRooms =itemsRooms.rooms;
    const room =tempRooms.find(room =>room.slug===slug);
    return room;
  }
  

  return (
    <RoomContext.Provider value={ {...itemsRooms , getRoom }}>
      {children}
    </RoomContext.Provider>
  );
};