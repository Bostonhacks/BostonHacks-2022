import * as React from "react";
import {
    Link
} from "react-router-dom";

// Error 404 not found page
export default function NotFound() {
    return (
        <div>
            <h2>404 Not Found</h2>
            <p>
                Oops, it looks like we could not find that page 😬... Try going 
                <Link to="/">home</Link> 🏠
            </p>
        </div>
    )
}