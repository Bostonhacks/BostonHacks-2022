import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Info from "../components/application/Info"
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../firebase/firebase-config";
import { query, collection, getDocs, where } from "firebase/firestore";

// Application page
export default function Application() {
    const [user, loading] = useAuthState(auth);
    const [application, setApplication] = useState({});
    const navigate = useNavigate();

    const fetchUserName = async () => {
        try {
          const q = query(collection(db, "applications"), where("uid", "==", user.uid));
          const doc = await getDocs(q);
        //   if (doc.docs.length === 0) return;
          if (doc.docs.length !== 0) setApplication(doc.docs[0].data());
        } catch (err) {
          console.error(err);
          alert("An error occured while fetching user data");
        }
      };

    function isEmpty(object) { for(var i in object) { return true; } return false; }

    useEffect(() => {
        if (loading) return;
        if (!user) return navigate("/login");

        fetchUserName();

        if (isEmpty(application)) return;
    }, [loading]);

    return (

        <div>
            <h1>Application (Private)</h1>

            {/* Check user's status, if not started show application */}
            {application.status === "Not Started" && <Info/>}

            {/* Otherwise, show their status */}
            {application.status !== "Not Started" && <h3>Status is {application.status}</h3>}
            {console.log(application)}
        </div>
    )
}