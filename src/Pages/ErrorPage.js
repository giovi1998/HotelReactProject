import React from 'react'
import Hero from "../Component/Hero";
import Banner from "../Component/Banner";
import {Link} from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <Hero>
        <Banner title="404" subtile="Page not found">
        <Link to='/' className="btn-primary">
          Return home
        </Link>          
        </Banner>
      </Hero> 
      Error Page 
    </div>
  )
}

export default ErrorPage
