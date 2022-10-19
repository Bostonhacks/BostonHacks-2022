import React, { useEffect } from "react";
import {
  Routes,
  Route,
  Navigate,
  useLocation
} from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase/firebase-config";
import Sponsor from "./views/Sponsor";
import Admin from "./views/Admin";
import Login from "./views/Login";
import NavigationBar from "./components/common/NavigationBar";
import Application from "./views/Application";
import Home from "./views/Home";
import Schedule from "./views/Schedule";

// Router
export default function App() {
  const [user, loading] = useAuthState(auth);

  useEffect(() => {
    if (loading) return;
  }, [loading]);

  return (
    <div style={{ background: "linear-gradient(180deg, #000000 0%, #304773 52.6%, #F5E2F6 99.48%)", minHeight: "100vh", width:"100%", fontFamily:  'Montserrat' }}>
      <style jsx="true">{`
        body {
          margin: 0;
          padding: 0;
        }
      `}</style>
      <NavigationBar />

      <div style={{paddingTop: "75px"}}/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sponsor" element={<Sponsor />} />
        <Route
          path="/application"
          element={
            <Application />
          }
        />
        <Route
          path="/admin"
          element={
            <Admin />
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path='*' exact={true} element={<Home />} />

      </Routes>
    </div>
  );
}