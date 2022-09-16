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
    const [qrCode, setQrCode] = useState("");
    const navigate = useNavigate();
    const applicationTypes = [ "Submitted", "Waitlisted", "Rejected", "Declined", "Confirmed", "Accepted", "Checked In" ];

    // Call function every second until it responds
    const fetchApplication = async (intervalId) => {
      try {
        const q = query(collection(db, "applications"), where("uid", "==", user?.uid));
        const doc = await getDocs(q);
        if (doc.docs.length !== 0) {
          // setApplication(doc.docs[0].data());
          setApplication({ ...doc.docs[0].data(), id: doc.docs[0].id });
          const word = "http:/bostonhacks.io/admin?id=" + doc.docs[0].id;
          setQrCode(`http://api.qrserver.com/v1/create-qr-code/?data=${word}&size=400x400&bgcolor=ffffff`);
          // Stop calling the function
          clearInterval(intervalId) 
        }
      } catch (err) {
        console.error(err);
        alert("An error occured while fetching user data");
      }
    };

    useEffect(() => {
        if (loading) return;
        if (!user) return navigate("/login");

        var intervalId = window.setInterval(function(){
            fetchApplication(intervalId)
          }, 1000);
    }, [user, loading, navigate]);

    return (
        <div style={{    background: "rgb(245, 226, 246)", minWidth: "600px"}}>
            {/* Check user's status, if not started show application */}
            {application?.status === "Not Started" && <Info applicationId={application.id}/>}

            {/* Otherwise, show their status */}
            {applicationTypes.includes(application?.status) && <h3>Status is {application?.status}</h3>}

            {/* Check user's status, if accepted show qr code */}
            {application?.status === "Accepted" && 
              <img
                className="img-fluid"
                src={qrCode}
                width={150} height={150} alt='None' 
              />
              }

        </div>
    )
}