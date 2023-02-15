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

const maxPrice = (rooms) =>{
  return Math.max(...rooms.map(item =>item.price));
};

const maxSize = (rooms) =>{
  return Math.max(...rooms.map(item =>item.size));
};



export const RoomContextProvider = ({ children }) => {
  const [itemsRooms, setRooms] = useState({
    rooms: rooms(roomsFromData),
    sortedRooms:rooms(roomsFromData),
    featuredRooms: featuredRooms(rooms(roomsFromData)),
    loading:false,
    type:"All",
    capacity:"All",
    maxPrice:maxPrice(roomsFromData),
    minPrice:0,
    maxSize:maxSize(roomsFromData),
    minSize:0,
    breakfast: false,
    pets:false
  }
  );

  const getRoom = (slug) =>{
    let tempRooms =itemsRooms.rooms;
    const room =tempRooms.find(room =>room.slug===slug);
    return room;
  }
  
 const handleChange =(Event) =>{
  const target= Event.target;
  let value= Event.type ==='checkbox'? target.checked:target.value;
  const name = Event.target.name;
  console.log(target + "-" + value + "-" + name);
  // console.log({
  //   [name]:value
  // });
  // setRooms(
  //   {
  //     [name]:value
  //   },
  if(!isNaN(value)){
    value = parseInt(value);
  }

  filterRooms (value);
}

 const filterRooms = (valueForSorting) => {
  console.log(valueForSorting);
  //===True if is string ->is False if ===number
  // console.log(isNaN(valueOfType));
  let rooms=itemsRooms.rooms;
  let tempSorted=itemsRooms.sortedRooms;
  let condition1=(itemsRooms.capacity ==='All') && (valueForSorting !=="All" && isNaN(valueForSorting));
  let condition2=!isNaN(valueForSorting)&&itemsRooms.type==="All";
  let condition3=!isNaN(valueForSorting)&&itemsRooms.type!=="All";
  let condition4 =itemsRooms.capacity!=="All" && isNaN(valueForSorting);

   
  if(condition1){
    // console.log("Condizione 1 you are modifing only room Type " + condition1 );
    rooms = rooms.filter(room=>room.type === valueForSorting);
    console.log(valueForSorting);
    setRooms({
      ...itemsRooms,
      sortedRooms:rooms,
      tempSorted:rooms,
      type: valueForSorting
    })
  } 
  else if(condition2){
    // console.log("Condizione 2 you are changing capacity and type ==All"+ condition2);
    rooms = rooms.filter(room=>room.capacity === valueForSorting);
      setRooms({
        ...itemsRooms,
        sortedRooms:rooms,
        tempSorted:rooms,
        capacity: valueForSorting
      })
  }else if(condition3){
    // console.log("Condizione 3 you are changing capacity but type is not equal to All "+ condition3);
    //Estract the type 
    // console.log(tempSorted.type);
    tempSorted = rooms.filter(room=>room.type === itemsRooms.type);
    tempSorted = tempSorted.filter(room=>room.capacity === valueForSorting);
      
    setRooms({
      ...itemsRooms,
      sortedRooms:tempSorted,
      capacity: valueForSorting
    })

  } else if (condition4){
    // console.log("Condizione 4 you are changing type but capacity is not equal to All "+ condition3 );
    //Estract the capacity 
    //  console.log(tempSorted.capacity);
     tempSorted = rooms.filter(room=>room.capacity === itemsRooms.capacity);
     tempSorted = tempSorted.filter(room=>room.type === valueForSorting);
       
     setRooms({
       ...itemsRooms,
       sortedRooms:tempSorted,
       type: valueForSorting
     })
  }
  if(valueForSorting==="All"){
    console.log("final");
    setRooms({
      ...itemsRooms,
      sortedRooms:rooms,
      type: "All",
      capacity: "All",
   })
  }

};

  return (
    <RoomContext.Provider value={ {...itemsRooms , getRoom , handleChange }}>
      {children}
    </RoomContext.Provider>
  );
};
