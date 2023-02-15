import React from 'react'
import RoomsFilter from "./RoomsFilter";
import RoomsList from "./RoomsList";
import { RoomContext } from '../RoomContextProvider';
import Loading from "./Loading";

//You can use consumer or useContext
function RoomsContainer() {

  return (
    <RoomContext.Consumer>
        {(value) =>{
             const {loading,sortedRooms,rooms}=value;
             console.log(rooms);
            return  (<div>
            <RoomsFilter rooms={rooms}/>
            {!loading ? <RoomsList rooms={sortedRooms}/> : <Loading/>}
            </div>
        );}
    }
    </RoomContext.Consumer>
  );
}

export default RoomsContainer
