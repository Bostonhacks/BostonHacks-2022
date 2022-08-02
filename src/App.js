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
import Admin from "./views/Admin";
import Login from "./views/Login";
import NotFound from "./views/NotFound";
import NavigationBar from "./components/common/NavigationBar";
import Footer from "./components/common/Footer";
import Application from "./views/Application";

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

// Router
export default function App() {
  return (
    <div>
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