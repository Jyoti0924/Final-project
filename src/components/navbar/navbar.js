import React from 'react';
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
                        About Us
                    </NavLink>
                    <NavLink to='/signup' activestyle>
                        Sign-Up
                    </NavLink>
                    <NavLink to='/login' activestyle>
                        Login
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
                    <NavBtnLink to='/signin'>Sign In</NavBtnLink>
                </NavBtn>
            </Nav>
        </>
    );
};

export default navbar;