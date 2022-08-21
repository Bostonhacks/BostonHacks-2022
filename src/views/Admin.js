import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/firebase-config";
import AdminPanel from "../components/admin/AdminPanel";

export default function Admin() {
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
  // Must match list in firestore rules
  const admins = [ "mraigoza48@gmail.com" ];

  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/login");

    if (!admins.includes(user.email)) return navigate("/application");
  }, [user, loading, navigate]); 

  return (
  <div>
    {/* Check user's email, if admin show application */}
    {admins.includes(user?.email) && <AdminPanel/>}
  </div>
)};