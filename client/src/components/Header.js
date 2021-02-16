import React from "react";
import { Link, useHistory } from "react-router-dom";
import "./Header.css";

export default function Header(props) {
  //local variable to use history method
  let history = useHistory();

  const { user,setUser } = props;
  const handleClick =(event) => {
    event.preventDefault();
    localStorage.setItem("token", "");
    setUser(undefined);
    history.push('/');
  }

    return (
      <nav className="nav-container">
          <div className="nav-div-image">
            <img src="/image/logo.png" alt="logo" />
          </div>
          {user && <div className="nav-links">
            <span className="nav-link-id" onClick={(event) => handleClick(event)}>Logout</span>
          </div>
          }
      </nav>
    );
}
