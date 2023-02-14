import React, { useState } from 'react';
import {FaCocktail,FaHiking,FaShuttleVan,FaBeer} from "react-icons/fa";
import "../styles/Services.css";
import Title from "./Title";

let servicesWithIcon= [
    {
        icon: <FaCocktail />,
        title: "Free Coocktails",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam..."   
    },
    {
        icon: <FaHiking />,
        title: "Endless Hiking",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam..."   
    },
    {
        icon: <FaShuttleVan />,
        title: "Free Shuttle",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam..."   
    },
    {
        icon: <FaBeer />,
        title: "Strongest Beer",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam..."   
    }
]

function Services() {
  const [servicesState,setServicesState] = useState(servicesWithIcon);
  return (
    <section className="services">
      <Title title="Services"/>
      <div className='services-center'>
        {servicesState.map((item,index) => {
            return (<article key={index} className="services" >
                <span className='services-icon'>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
            </article>)
        })}
      </div>
    </section>
  )
}

export default Services
