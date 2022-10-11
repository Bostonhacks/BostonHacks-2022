import React, { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import {
    Link,
    useNavigate
} from "react-router-dom";
import { auth, logout } from "../../firebase/firebase-config";
import NavbarLogo from "./svg/NavbarLogo";
import "./NavigationBar.css"
import styled from "styled-components";

// Navigation bar
export default function NavigationBar() {
    const [user, loading] = useAuthState(auth);
    const navigate = useNavigate();
  
    const handleLogout = () => {
      logout();
      navigate("/");
    };

    const Button = styled.button`
      font-family: 'Montserrat';
      border: 0;
      cursor: pointer;
      padding: 14px 5px;
      height: 100%;
      box-shadow: none;
      font-weight: none;
      font-weight: inherit;
      font-size: inherit;
      color: white;
    `;

    useEffect(() => {
      if (loading) return;
    }, [loading]);

    return (
      <div>
        <ul className="nav">
          <li className="logo">
            <Link to="/"><NavbarLogo /></Link>
          </li>
          <li className="navItem">
            {user && <Button onClick={handleLogout}>LOGOUT</Button>}
          </li>
          <li className="navItem">
            <a href="https://forms.gle/FoYrDSqjTiKvWPcg6" target="_blank">MENTORS</a>
          </li>
          <li className="navItem">
            <Link to="/sponsor">SPONSORS</Link>
          </li>
          <li className="navItem">
            <Link to="/application">APPLY</Link>
          </li>
        </ul>
      </div>
    );
  }
