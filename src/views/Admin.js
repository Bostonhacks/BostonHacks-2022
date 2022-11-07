import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/firebase-config";
import AdminPanel from "../components/admin/AdminPanel";
import {
  updateDoc,
  doc,
  getDoc,
  deleteDoc
} from "firebase/firestore";
import { db } from "../firebase/firebase-config";
import { ActionCodeOperation } from "firebase/auth";


export default function Admin() {
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
  // Must match list in firestore rules
  const admins = ["mraigoza@bu.edu", "davegod@bu.edu", "scen01@bu.edu", "firminm@bu.edu", "simran27@bu.edu", "danyu@bu.edu", "minpark@bu.edu", "dmarston@bu.edu", "kbbtan@bu.edu", "lyoon02@bu.edu", "eschoi@bu.edu", "tompan@bu.edu"];
  const url = new URL(window.location.href);
  const params = new URLSearchParams(url.search)

  const checkInUser = async (userId) => {
    const userDoc = doc(db, "applications", userId);
    const docSnap = await getDoc(userDoc);

    if (docSnap.exists()) {
      await updateDoc(userDoc, {"status": "Checked In"});
      alert('Checked in ' + docSnap.data().name);
      console.log("Document data:", docSnap.data());
    } else {
      alert("No user found!");
    }
  }

  const acceptUsers = async (users) => {
    for (var i = 0; i < users.length; i++) {
      var userId = users[i];
      const userDoc = doc(db, "applications", userId);
      const docSnap = await getDoc(userDoc);

      if (docSnap.exists()) {
        await updateDoc(userDoc, {"status": "Accepted"});
      } else {
        alert("No user found!");
      }
    }
    console.log("accepted")
  }

  const rejectUsers = async (users) => {
    for (var i = 0; i < users.length; i++) {
      var userId = users[i];
      const userDoc = doc(db, "applications", userId);
      const docSnap = await getDoc(userDoc);

      if (docSnap.exists()) {
        await updateDoc(userDoc, {"status": "Rejected"});
      } else {
        alert("No user found!");
      }
    }
    console.log("Rejected")
  }

  // Delete users will Status = Not Started
  // Requires their ids which is accuired from src/firebase/analytics.py
  const deleteUsers = async (users) => {
    for (var i = 0; i < users.length; i++) {
      var userId = users[i];
      const userDoc = doc(db, "applications", userId);
      const docSnap = await getDoc(userDoc);

      if (docSnap.exists()) {
        await deleteDoc(userDoc);
      } else {
        alert("No user found!");
      }
    }
    console.log("Deleted")
  }

  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/login");

    if (!admins.includes(user.email)) return navigate("/application");
    const userId = params.get('id');
    if (userId !== null) {
      checkInUser(userId)
    }
  }, [user, loading, navigate]); 

  return (
  <div>
    {/* Check user's email, if admin show application */}
    {admins.includes(user?.email) && <AdminPanel/>}
  </div>
)};