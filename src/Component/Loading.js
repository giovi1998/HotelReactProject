import React from 'react'
import "../styles/Loading.css"
import LoadingSpinner from "../images/gif/loading-gear.gif"
const Loading = () => {
  return (
    <div className='loading'>
      <h4> Rooms data loading...</h4>
      <img src={LoadingSpinner} alt="Loading spinner" />
    </div>
  )
}

export default Loading
