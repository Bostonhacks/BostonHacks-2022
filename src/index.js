import React from "react";
import {createRoot} from 'react-dom/client';
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "./components/login/useAuth";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
      <Router>
        <AuthProvider>
          <App />
        </AuthProvider>
      </Router>
  </React.StrictMode>
);