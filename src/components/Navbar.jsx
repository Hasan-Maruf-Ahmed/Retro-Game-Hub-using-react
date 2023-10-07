import React, {useState, useEffect, useRef} from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import logout from "../assets/log-out.png"
import user from "../assets/user.png"
import settings from "../assets/settings.png"
import edit from "../assets/edit.png"
import envelop from "../assets/envelope.png"
import help from "../assets/question.png"

export const Navbar = () => {
  const [open, setOpen]= useState(false);

  let menuRef = useRef();

  useEffect(() =>{
    let handler = (e)=>{
      if(!menuRef.current.contains(e.target)){
      setOpen(false);
      }
    }
    document.addEventListener("mousedown", handler);
     return() =>{
      document.removeEventListener("mousedown", handler);
     }
  })

  return (
    <nav>
      <ul className="nav-element">
        <li>
          <NavLink className="navLink" to="/">Home</NavLink>
        </li>
        <li>
          <NavLink className="navLink" to="/games">Games</NavLink>
        </li>
        <li>
          <NavLink className="navLink" to="/about">About</NavLink>
        </li>
        <li>
          <NavLink className="navLink" to="/contact">Contact Us</NavLink>
        </li>
      </ul>
      <div className="menu-container" ref={menuRef}>
        <div className="menu-trigger" onClick={()=>{setOpen(!open)}}>
          <i className='bx bx-sm bxs-user bx-border-circle'></i>
        </div>
        <div className={`dropdown-menu ${open? 'active' : 'inactive'}`}>
          <ul>
          <DropdownItem img={user} text={"My Profile"} />
          <DropdownItem img={edit} text={"Edit profile"} />
          <DropdownItem img={envelop} text={"Inbox"} />
          <DropdownItem img={settings} text={"Settings"} />
          <DropdownItem img={help} text={"Helps"} />
            <DropdownItem img={logout} text={"Log out"} />
          </ul>
        </div>
      </div>
    </nav>
  );
};

function DropdownItem (props){
  return (
    <li className="dropdownItem">
      <img src={props.img}  ></img>
      <a href="">{props.text}</a>
    </li>
  )
}
