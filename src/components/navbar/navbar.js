import React from 'react';
import "./navbar.css"
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
} from './navbarelements';

const navbar = () => {
    return (
        <>
            <Nav>


                <NavMenu>
                    <NavLink to='/' activestyle>
                        Home
                    </NavLink>
                    <NavLink to='/about' activestyle>
                        About-us
                    </NavLink>
                    <NavLink to='/rooms' activestyle>
                        Rooms 
                    </NavLink>
                    <NavLink to='/team' activestyle>
                        Team
                    </NavLink>
                    <NavLink to='/terms&conditions' activestyle>
                        Terms & Conditions
                    </NavLink>
                    <NavLink to='/help&support' activestyle>
                        Help & Support
                    </NavLink>

                    {/* Second Nav */}
                    {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to='/login'>Login</NavBtnLink>
                    <NavBtnLink to='/signup'>Sign-up</NavBtnLink>
                    
                </NavBtn>

                <div class="dropdown">
                    <button class="dropbtn">Dropdown
                        <i class="fa fa-caret-down"></i>
                    </button>
                    <div class="dropdown-content">
                        <a href="/">Home</a>
                        <a href="/about">About</a>
                        <a href="/help&support">Help&Support</a>
                        <a href="/team">Team</a>
                        <a href="/terms&conditions">Terms & Conditions</a>
                    </div>
                </div>
        
            </Nav>
            
        </>
    );
};

export default navbar;