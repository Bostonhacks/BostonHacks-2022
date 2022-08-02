import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth, signInWithGoogle } from "../firebase/firebase-config";
import { useAuthState } from "react-firebase-hooks/auth";

// Login page
export default function Login() {
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) return;

    if (user) navigate("/application");

  }, [user, loading, navigate]);

  return (
    <div>
      <button onClick={signInWithGoogle}>
        Login with Google
      </button>
    </div>
  );
}