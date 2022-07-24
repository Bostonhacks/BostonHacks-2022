import * as React from "react";
import {
    Link,
    useNavigate,
} from "react-router-dom";
import useAuth from "../login/useAuth";

// Navigation bar
export default function NavigationBar() {
    const { authed, logout } = useAuth();
    const navigate = useNavigate();
  
    const handleLogout = () => {
      logout();
      navigate("/");
    };
  
    return (
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/sponsor">Sponsor</Link>
          </li>
          <li>
            <Link to="/application">Application</Link>
          </li>
          <li>
            <Link to="/admin">Admin</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
        {authed && <button onClick={handleLogout}>Logout</button>}
      </nav>
    );
  }