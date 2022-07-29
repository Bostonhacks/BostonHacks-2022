import * as React from "react";
import {
  Routes,
  Route,
  Navigate,
  useLocation
} from "react-router-dom";
import useAuth from "./components/login/useAuth";
import Home from "./views/Home";
import Sponsor from "./views/Sponsor";
import Settings from "./views/Settings";
import Login from "./views/Login";
import NotFound from "./views/NotFound";
import NavigationBar from "./components/common/NavigationBar";
import Footer from "./components/common/Footer";
import Application from "./views/Application";

//google sign on 
import { useState, useEffect } from 'react';
import firebase from './services/firebase';

// Redirect to login page, if use tries to access a restricted page
function RequireAuth({ children }) {
  const { authed } = useAuth();
  const location = useLocation();

  return authed === true ? (
    children
  ) : (
    <Navigate to="/login" replace state={{ path: location.pathname }} />
  );
}

//display user home page after login
function Loggedin() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      setUser(user);
    })
  }, [])

  console.log(user);

  return (
    <div>
      { user ? <Login user={user} /> : <Login/>}
    </div>
  );
}

// Router
export default function App() {
  return (
    <div>
      <NavigationBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sponsor" element={<Sponsor />} />
        <Route
          path="/application"
          element={
            <RequireAuth>
              <Application />
            </RequireAuth>
          }
        />
        <Route
          path="/settings"
          element={
            <RequireAuth>
              <Settings />
            </RequireAuth>
          }
        />
        <Route path="/login" element={<Loggedin />} />
        <Route path='*' exact={true} element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}