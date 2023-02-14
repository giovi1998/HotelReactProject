import React from 'react'
import "../styles/Hero.css"

function Hero({children,hero}) {
  return (
    <header className={hero}>
      {children}
    </header>
  )
}

Hero.defaultProps ={
    hero:"defaultHero"
}
export default Hero
