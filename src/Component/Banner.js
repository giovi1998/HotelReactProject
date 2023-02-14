import React from 'react'
import "../styles/Banner.css"
const Banner = ({children,title,subtile}) => {
  return (
    <div className='banner'>
      <h1>{title}</h1>
      <div></div>
      <p>{subtile}</p>
      {children}
    </div>
  )
}

export default Banner
