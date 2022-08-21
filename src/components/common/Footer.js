import * as React from "react";
import {
    Link,
} from "react-router-dom";
import "./Footer.css";
import NavbarLogo from "./svg/NavbarLogo";
import SocialMediaIcon from "./svg/SocialMediaIcon";
import Coundown from "./Countdown";

// Navigation bar
export default function Footer() {
    return (
        <div>
            <Coundown/>
            <ul class="footer">
                <li>
                    <SocialMediaIcon platform='facebook'/>
                </li>
                <li>
                    <SocialMediaIcon platform='Instagram'/>
                </li>
                <li>
                    <SocialMediaIcon platform='Twitter' />
                </li>
                {/* <li>
                    <a target='' href='https://static.mlh.io/docs/mlh-code-of-conduct.pdf'>MLH Code of Conduct</a>
                    <span> | </span>
                    <Link to='/privacy'>Privacy Policy</Link>
                </li> */}
            </ul>
        </div>
    );
}