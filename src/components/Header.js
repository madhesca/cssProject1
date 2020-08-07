import React from "react"
import { NavLink } from "react-router-dom"

function Header() {
  return (
    <>
      <div className="header">
        <h1>madhesca.com</h1>
      </div>
      <div className="navbar">
        <ul>
          <li>
            <NavLink
              activeStyle={{
                backgroundColor: "black",
                color: "#f64c72",
                borderRadius: "5px",
              }}
              to="/home"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              activeStyle={{
                backgroundColor: "black",
                color: "#f64c72",
                borderRadius: "5px",
              }}
              to="/lebron"
            >
              Lebron
            </NavLink>
          </li>
          <li>
            <NavLink
              activeStyle={{
                backgroundColor: "black",
                color: "#f64c72",
                borderRadius: "5px",
              }}
              to="/curry"
            >
              Curry
            </NavLink>
          </li>
          <li>
            <NavLink
              activeStyle={{
                backgroundColor: "black",
                color: "#f64c72",
                borderRadius: "5px",
              }}
              to="/wade"
            >
              Wade
            </NavLink>
          </li>
          <li>
            <NavLink
              activeStyle={{
                backgroundColor: "black",
                color: "#f64c72",
                borderRadius: "5px",
              }}
              to="/shaq"
            >
              Shaq
            </NavLink>
          </li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </>
  )
}

export default Header
