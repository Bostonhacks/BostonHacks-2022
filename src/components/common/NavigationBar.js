import React, { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import {
    Link,
    useNavigate
} from "react-router-dom";
import { auth, logout } from "../../firebase/firebase-config";
import NavbarLogo from "./svg/NavbarLogo";
import "./NavigationBar.css"

// Navigation bar
export default function NavigationBar() {
    const [user, loading] = useAuthState(auth);
    const navigate = useNavigate();
  
    const handleLogout = () => {
      logout();
      navigate("/");
    };

    useEffect(() => {
      if (loading) return;
    }, [loading]);

    return (
      <div>
        <ul className="nav">
          <li>
            <Link to="/"><NavbarLogo /></Link>
          </li>
          <li>
            {user && <button onClick={handleLogout} style={{	background: "none",	color: "white",	border: "none",	padding: 0,	font: "inherit",	cursor: "pointer",	outline: "inherit"}}>Logout</button>}
          </li>
          <li style={{float: "right"}}>
            <Link to="/sponsor">Sponsors</Link>
          </li>
          <li style={{float: "right"}}>
            <Link to="/admin">Admin</Link>
          </li>
          <li style={{float: "right"}}>
            <Link to="/application">Apply</Link>
          </li>
        </ul>
      </div>
    );
  }