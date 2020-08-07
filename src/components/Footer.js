import React from "react"
import { NavLink, Switch, Route } from "react-router-dom"
import About from "./About"
import Contacts from "./Contacts"
import Profile from "./Profile"

function Footer() {
  return (
    <div className="footer">
      <ul>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/profile">Profile</NavLink>
        </li>
        <li>
          <NavLink to="/contacts">Contact</NavLink>
        </li>
      </ul>
      <p>&copy; 2020 All Rights Reserved.</p>
    </div>
  )
}

export default Footer
