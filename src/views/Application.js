import * as React from "react";
import {Navigate} from 'react-router-dom';

// Application page
export default function Application() {
    const [goToInfo, setToInfo] = React.useState(false);
    
    if (goToInfo) {
        return <Navigate to="/info"/>
    }

    return (
        <div>
            <h1>Application (Private)</h1>

            <button onClick={() => {
                setToInfo(true);
            }}>
                Start Application
            </button>
        </div>
    )
}