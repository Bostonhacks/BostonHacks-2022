import * as React from "react";
import {Navigate} from 'react-router-dom';
import Info from "../components/application/Info"

// Application page
export default function Application() {
    return (
        <div>
            <h1>Application (Private)</h1>

            <Info/>
        </div>
    )
}