import * as React from "react";
import "./Footer.css";
import SocialMediaIcon from "./svg/SocialMediaIcon";
import Countdown from "./Countdown";

// Navigation bar
export default function Footer() {
    return (
        <div>
            <Countdown/>
            <ul className="footer">
                <li>
                    <SocialMediaIcon platform='Instagram'/>
                </li>
                <li>
                    <SocialMediaIcon platform='Twitter' />
                </li>
                <li>
                    <SocialMediaIcon platform='facebook'/>
                </li>
            </ul>
        </div>
    );
}