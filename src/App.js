import React, { useEffect } from "react";
import {
  Routes,
  Route,
  Navigate,
  useLocation
} from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase/firebase-config";
import Home from "./views/Home";
import Sponsor from "./views/Sponsor";
import Admin from "./views/Admin";
import Login from "./views/Login";
import NotFound from "./views/NotFound";
import NavigationBar from "./components/common/NavigationBar";
import Footer from "./components/common/Footer";
import Application from "./views/Application";

// Router
export default function App() {
  const [user, loading] = useAuthState(auth);
  // Redirect to login page, if use tries to access a restricted page
  function RequireAuth({ children }) {
    const location = useLocation();

    return user ? (
      children
    ) : (
      <Navigate to="/login" replace state={{ path: location.pathname }} />
    );
  }

  useEffect(() => {
    if (loading) return;
  }, [loading]);

  return (
    <div style={{ background: "linear-gradient(180deg, #000000 0%, #304773 52.6%, #F5E2F6 99.48%)"    }}>
      <style jsx="true">{`
        body {
          margin: 0;
          padding: 0;
        }
      `}</style>
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
          path="/admin"
          element={
            <RequireAuth>
              <Admin />
            </RequireAuth>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path='*' exact={true} element={<NotFound />} />
      </Routes>

      <Footer />
    </div>
  );
}