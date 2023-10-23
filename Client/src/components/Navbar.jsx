import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import edit from "../assets/edit.png";
import envelop from "../assets/envelope.png";
import logout from "../assets/log-out.png";
import help from "../assets/question.png";
import settings from "../assets/settings.png";
import profile from "../assets/user.png";
import "./Navbar.css";

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  let menuRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });
  const user = localStorage.getItem("token");
  const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};

  return (
    <nav>
      <ul className="nav-element">
        <li>
          <NavLink className="navLink" to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className="navLink" to="/games">
            Games
          </NavLink>
        </li>
        <li>
          <NavLink className="navLink" to="/about">
            About
          </NavLink>
        </li>
        <li>
          <NavLink className="navLink" to="/contact">
            Contact Us
          </NavLink>
        </li>
      </ul>
      <div className="menu-container" ref={menuRef}>
        <div
          className="menu-trigger"
          onClick={() => {
            setOpen(!open);
          }}
        >
          <i className="bx bx-sm bxs-user bx-border-circle"></i>
        </div>
        <div className={`dropdown-menu ${open ? "active" : "inactive"}`}>
          <ul>
            <DropdownItem img={profile} text={"My Profile"} />
            <DropdownItem img={edit} text={"Edit profile"} />
            <DropdownItem img={envelop} text={"Inbox"} />
            <DropdownItem text={"Score Board"} to={"/scoreboard"}/>
            <DropdownItem img={settings} text={"Settings"} />
            <DropdownItem img={help} text={"Helps"} />
            {!user && <DropdownItem img={logout} text={"Sign up"} to={"/signup"}/>}
            {user && <DropdownItem img={logout} text={"Log out"} onClick={handleLogout}/>}
          </ul>
        </div>
      </div>
    </nav>
  );
};

function DropdownItem(props) {
  return (
    <li className="dropdownItem" onClick={props.onClick}>
      <img src={props.img}></img>
      <Link to={props.to}>{props.text}</Link>
    </li>
  );
}
