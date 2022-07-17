import * as React from "react";
import {
    Link,
} from "react-router-dom";
import {
    Container
//     Box,
//     Container,
//     Row,
//     Column,
//     FooterLink,
//     Heading,
//     SocialLogo
  } from "./FooterStyles";
import NavbarLogo from "./svg/NavbarLogo";
import SocialMediaIcon from "./svg/SocialMediaIcon";


// Navigation bar
export default function Footer() {
    return (
        <Container>
        <nav style={{'color': 'FBDF94'}}>
            <ul>
                <li>
                    <Link to="/"><NavbarLogo /></Link>
                </li>
                <li>
                    <SocialMediaIcon platform='facebook'/>
                </li>
                <li>
                    <SocialMediaIcon platform='Instagram'/>
                </li>
                <li>
                    <SocialMediaIcon platform='Twitter' />
                </li>
                <li>
                    <a target='_blank' href='https://static.mlh.io/docs/mlh-code-of-conduct.pdf'>MLH Code of Conduct</a>
                    <span> | </span>
                    <Link to='/privacy'>Privacy Policy</Link>
                </li>
            </ul>
        </nav>
        </Container>
    );
}