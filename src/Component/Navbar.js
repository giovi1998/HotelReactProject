import {React, useState,useEffect} from 'react';
import "../styles/Navbar.css";
import logo from "../images/logo.png";
import {HiMenu} from "react-icons/hi";
import { Link } from 'react-router-dom';
const Navbar = () => {
const [isOpen,setIsOpen]= useState(false);

/*Function used because when you have screen width less than 768px 
you should not see as mobile but as desktop view.
Therefor you set isOpen to false*/
function handleWindowResize() {
  if (window.innerWidth > 768) {
   setIsOpen(false);
  }
}

window.addEventListener("resize", handleWindowResize);


  const handleClickIcon = () =>{
    if(isOpen===true){
        setIsOpen(false);
    }else{
            setIsOpen(true);
    }
  };
  

  return (
    <nav className='navbar'>
        <div className='nav-center'>
            <div className='nav-header'>
                <Link to="/">
                    <img src={logo} width={50} height={50} alt='Sardinian resort' />
                </Link>
                <button 
                type="button" 
                className='nav-btn' 
                onClick={handleClickIcon}>
                    <HiMenu className="nav-icon" />
                </button>
            </div>
            <ul className={isOpen ? 'nav-links-show-nav' : 'nav-links'}>
                <li>
                    <Link to="/">
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/rooms">
                        Rooms
                    </Link>
                </li>
            </ul>
        </div>
    </nav>
  );
};

export default Navbar;
