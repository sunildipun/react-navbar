import React from 'react';

import './navbar.style.css';

import { links, social } from './../../data';

import {ReactComponent as Logo} from  './../../logo.svg';
import { FaBars } from 'react-icons/fa';


import './navbar.style.css';

const Navbar = () => {
    return (
        <nav>
            <div className='nav-center'>
                <div className='nav-header'>
                {/** Logo Svg */}
                <Logo  className="logo"/>
                <button className='nav-toggle'>
                    <FaBars />
                </button>
                </div>
                <div className='links-container' >
                    <ul className='links' >
                        {links.map((link) => {
                        const { id, url, text } = link;
                        return (
                            <li key={id}>
                            <a href={url}>{text}</a>
                            </li>
                        );
                        })}
                    </ul>
                </div>
                <ul className='social-icons'>
                {social.map((socialIcon) => {
                    const { id, url, icon } = socialIcon;
                    return (
                    <li key={id}>
                        <a href={url}>{icon}</a>
                    </li>
                    );
                })}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;
