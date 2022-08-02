import React, { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import {
    Link,
    useNavigate
} from "react-router-dom";
import { auth, logout } from "../../firebase/firebase-config";

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
        {user && <button onClick={handleLogout}>Logout</button>}
      </nav>
    );
  }