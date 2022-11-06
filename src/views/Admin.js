import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/firebase-config";
import AdminPanel from "../components/admin/AdminPanel";
import {
  updateDoc,
  doc,
  getDoc
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

  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/login");

    if (!admins.includes(user.email)) return navigate("/application");
    const userId = params.get('id');
    if (userId !== null) {
      checkInUser(userId)
    }
    // rejectUsers(['2FGeXeWwcQTWn9NxWPja', '4NPGI5UvLrLCipbNdMrx', '7UTl1p4X7jhXpWtlPQr1', 'LZJQ22aMNK3pa056CZ0Y', 'M4yLxdAwH039ZUgVyPCe', 'N0u3c79SA4dLTSTyk1Xx', 'O41jlZBFhjY1bCWPxXIY', 'OKFW4DAM1MFj1XhaZo60', 'P9i0oR3DLlsA5PDk1taU', 'ZTzsPUNcBJGtZpkipNp2', 'aETa1PAiFBOqTSum5Or6', 'iCv5ma3eUvjbItQL1ObG', 'iZPvG3uOirDi2Da5BjZY', 'jgXlllbq30EvHjp6xxkW', 'kxnwAvGN1pZgelvoyttS', 'nvRRSfxHBpfBKoDMEUqc', 'oRex7XJkVNwW3tooIFXJ', 'rqnVd1lbgDoseQ7Qqaew', 'tiEZzgCoinCCRCtLEqqy', 'uKt1KFXQ4BXHlXl1be67', 'zAuAhyMCIFN9Pyyv8SwG'])
  }, [user, loading, navigate]); 

  return (
  <div>
    {/* Check user's email, if admin show application */}
    {admins.includes(user?.email) && <AdminPanel/>}
  </div>
)};