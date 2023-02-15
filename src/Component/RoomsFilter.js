import React from 'react'
import { useContext } from 'react';
import { RoomContext } from '../RoomContextProvider';
import Title from "../Component/Title.js";
import "../styles/RoomsFilter.css"

//get all unique values
const getUnique = (items,value)=>{
  return [...new Set(items.map(item=> item[value]))];
}

function RoomFilter({rooms}) {
  const context = useContext(RoomContext);
  const { 
    handleChange,
    type,
    capacity,
    minPrice,
    maxPice,
    minSize,
    maxSize,
    breakfast,
    pets}=context;
  //get unique types
  let types = getUnique(rooms,"type");
  //Add All type
  types =['All',...types];
  //map to jsx
  types = types.map ((item,index) =>{
    return (
    <option value={item} key={index}>
      {item}
    </option>)
  });
  //get unique types
  let people = getUnique(rooms,"capacity");
  //Add All type
  people =['All',...people];
  //map to jsx
  people = people.map ((item,index) =>{
    return (
    <option value={item} key={index}>
      {item}
    </option>)
  });
  return (
  <section className="filter-container">
  <Title title="Search rooms" />
   <form className='filter-form'>
    {/* Select type */}
    <div className='form-group'>
      <label htmlFor='type'>
        Room type 
      </label>
      <select name="type" id="type" value={type} className="form-control" onChange={handleChange}> 
      {types}
      </select>
    </div>
    {/* End Select type */}
    {/* Select guests */}
    <div className='form-group'>
      <label htmlFor='capacity'>
        Capacity
      </label>
      <select name="type" id="capacity" value={capacity} className="form-control" onChange={handleChange}> 
      {people}
      </select>
    </div>
    {/* End Select guests */}
    {/*  */}
    {/*  */}
    {/*  */}
    {/*  */}
   </form>
  </section>
  )
}

export default RoomFilter
