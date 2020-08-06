import React from "react"

function NotFound(props) {
  const specs = {
    p: {
      fontSize: "36px",
      ":hover": {
        color: "red",
      },
    },
  }

  return (
    <div style={{ textAlign: "center", marginTop: "90px", fontSize: "35px" }}>
      <h1>Page Not Found!</h1>
      <p
        style={{
          color: "greenyellow",
          ":hover": { color: "red", fontSize: "24px" },
          cursor: "pointer",
        }}
        onClick={() => props.history.push("/")}
      >
        Go Back
      </p>
      {/* <Link to="/">
        <p className="notFound" style={{ color: "white" }}>
          go back to Homepage
        </p>
      </Link> */}
    </div>
  )
}

export default NotFound
