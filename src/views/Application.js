import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Info from "../components/application/Info"
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../firebase/firebase-config";
import {
  updateDoc,
  doc
} from "firebase/firestore";
import { query, collection, getDocs, where } from "firebase/firestore";
import './Application.css';

// Application page
export default function Application() {
    const [user, loading] = useAuthState(auth);
    const [application, setApplication] = useState({});
    const [qrCode, setQrCode] = useState("");
    const navigate = useNavigate();
    const applicationTypes = [ "Submitted", "Waitlisted", "Rejected", "Declined", "Confirmed", "Accepted", "Checked In" ];

    // Change user's status to confirmed
    const confirmUser = async (userId) => {
      const userDoc = doc(db, "applications", userId);
      await updateDoc(userDoc, {"status": "Confirmed"});
      setApplication({
        ...application,
        "status" : "Confirmed"
      });
    }

    // Change user's status to declined
    const declineUser = async (userId) => {
      const userDoc = doc(db, "applications", userId);
      await updateDoc(userDoc, {"status": "Declined"});
      setApplication({
        ...application,
        "status" : "Declined"
      });
    }

    // Call function every second until it responds
    const fetchApplication = async (intervalId) => {
      try {
        const q = query(collection(db, "applications"), where("uid", "==", user?.uid));
        const doc = await getDocs(q);
        if (doc.docs.length !== 0) {
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
        <div style={{display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", paddingBottom: "250px"}}>
            <div style={{color: "white", fontSize: "50px"}}>
              <h3>Welcome Back, {application?.name}!</h3>
            </div>

            {/* Check user's status, if not started show application */}
            {application?.status === "Not Started" && <Info applicationId={application.id}/>}

            {/* Otherwise, show their status */}
            {applicationTypes.includes(application?.status) && 
              <div style={{color: "white", fontSize: "25px", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", paddingBottom: "60px"}}>
                <h3>Your Status:</h3>
                <div style={{    background: "rgba(255, 255, 255, 0.6)", width: "200px", height: "50px", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", borderRadius: "20px"}}>
                  <h3>{application?.status}</h3>
                </div>
              </div>
            }

            {/* Check user's status, if submitted say hello */}
            {application?.status === "Submitted" && 
              <div style={{color: "white", background: "rgba(255, 255, 255, 0.15)", width: "80%", height: "auto", fontSize: "25px", borderRadius: "20px", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column"}}>
                <h3 style={{textAlign: "center"}}>Thank you for applying to BostonHacks 2022! We will review your application and update you when our decisions are released!</h3>
              </div>
              }

            {/* Check user's status, if accepted show confirmation button */}
            {application?.status === "Accepted" && 
              <div style={{color: "white", background: "rgba(255, 255, 255, 0.15)", width: "80%", height: "auto", fontSize: "25px", borderRadius: "20px", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", paddingBottom: "60px"}}>
                <h3 style={{textAlign: "center"}}>Congratulations on being accepted into BostonHacks, please confirm that you are coming in order for us to be better prepared!</h3>
                <button class="accept" onClick={()=>confirmUser(application?.id)}>I Confirm</button>
                
                <h3 style={{textAlign: "center"}}>If your plans have changed and can no longer attend BostonHacks, please decline.</h3>
                <button class="decline" onClick={()=>declineUser(application?.id)}>I Decline</button>
              </div>
              }

            {/* Check user's status, if confirmed show qr code */}
            {application?.status === "Confirmed" && 
              <div style={{color: "white", background: "rgba(255, 255, 255, 0.15)", width: "80%", height: "auto", fontSize: "25px", borderRadius: "20px", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", paddingBottom: "60px"}}>
              <h3 style={{textAlign: "center"}}>Thank you for confirming your spot at BostonHacks 2022. Keep an eye out for important emails from us. FAQ and our schedule can be found at bostonhacks.io, we will see you at the event!</h3>
              <h3 style={{textAlign: "center"}}>Please bring a screenshot of the QR code below for check in with us!</h3>
              <img
                className="img-fluid"
                src={qrCode}
                width={150} height={150} alt='None' 
              />
              </div>
              }

        </div>
    )
}