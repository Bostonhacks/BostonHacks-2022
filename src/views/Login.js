import * as React from "react";
import {
    useNavigate,
    useLocation
  } from "react-router-dom";
import useAuth from "../components/login/useAuth";
import { signInWithGoogle } from '../services/firebase';

// Login page
export default function Login() {
    const navigate = useNavigate();
    const { login } = useAuth();
    const { state } = useLocation();
  
    const handleLogin = () => {
      signInWithGoogle().then(login().then(() => {
        navigate(state?.path || "/application");
      }));
    };
  
    return (
      <div>
        <h1>Login</h1>
        <button onClick={handleLogin}>Log in</button>
      </div>
    );
}