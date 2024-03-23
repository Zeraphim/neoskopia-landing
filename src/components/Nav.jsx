// import { Link } from "react-router-dom";
import { Link as ScrollLink } from 'react-scroll';

import logo from "../assets/DeepLearner.png";

import { useState } from 'react';

import { FaBars } from 'react-icons/fa';


import "./nav.css"

function Nav() {
    const [mobileMenu, setMobileMenu] = useState(false);

    
  return (
    <>

        {/* <nav className="nav">

            <div className="left">
                <ul>
                    <li>
                    <Link to="/" className="link">Main</Link>
                    </li>
                    <li>
                    <Link to="/about" className="link">About</Link>
                    </li>
                </ul>
            </div>

            <div className="logo"> */}
                {/* Add Image */}
                {/* <Link to="/" className="link"><img src={logo} alt="Logo" /></Link>
            </div>

            <div className="right">
                <ul>
                    <li>
                        <Link to="/works" className="link">Works</Link>
                    </li>
                    <li>
                        <Link to="/sign-up" className="link">Sign-up</Link>
                    </li>
                </ul>
            </div>

        </nav> */}

        <nav className="nav">
        <div className="left">
            <ul>
                <li>
                    <ScrollLink to="top" smooth={true} duration={500} className="link">Main</ScrollLink>
                </li>
                <li>
                    <ScrollLink to="about" smooth={true} duration={500} className="link">About</ScrollLink>
                </li>
            </ul>
        </div>

        <div className="logo">
            <ScrollLink to="top" smooth={true} duration={500} className="link"><img src={logo} alt="Logo" /></ScrollLink>
        </div>

        <div className="right">
            <ul>
                <li className="desktop">
                    <ScrollLink to="works" smooth={true} duration={500} className="link">Works</ScrollLink>
                </li>
                <li className="desktop">
                    <ScrollLink to="sign-up" smooth={true} duration={500} className="link">Sign-up</ScrollLink>
                </li>
                <li className="mobileIcon link">
                    <FaBars />
                </li>
            </ul>
        </div>



        </nav>



    </>
  )
}

export default Nav