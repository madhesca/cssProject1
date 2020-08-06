import React from "react"
import { Link } from "react-router-dom"

function NotFound(props) {
  return (
    <div style={{ textAlign: "center", marginTop: "90px", fontSize: "35px" }}>
      <h1>Page Not Found!</h1>
      <Link to="/">
        <p className="notFound" style={{ color: "white" }}>
          go back to Homepage
        </p>
      </Link>
    </div>
  )
}

export default NotFound
