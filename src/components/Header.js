import React from 'react';
import logo from "../wayfair-logo";
import { UL, LI, Item, Label, Arrow } from "../utils/stylesUtil";

/*
 *@Header
 * function to display a header that sticks to the top of the page when the page scrolls
 * includes manage user options
 */
const Header = props => {

    return (
        <header className="topMenu" data-test="component_header">
            <div className="hamburger_Icon" onClick={() => {
                const element = document.querySelector(".bodyWraper");
                element.classList.toggle("expand");
            }}>
                <i className="fa fa-bars"></i>
            </div>
            <div className="topMenuNav text-right">
                <img src={logo}/>
                <span className="partnerHome">PARTNER HOME</span>
                <div className="topmenuList">
                    <ul>
                        <li>
                            <span>User Name</span><Arrow />
                            <div className="manageUser">
                                <UL>
                                    <LI><Item><Label>Account Settings</Label></Item></LI>
                                    <LI><Item><Label>User Management</Label></Item></LI>
                                    <LI><Item><Label>My Team</Label></Item></LI>
                                    <LI><Item><Label>Language</Label></Item></LI>
                                    <LI><Item><Label>Logout</Label></Item></LI>
                                </UL>
                            </div>
                        </li>
                        <li><a href="#"><i className="fa fa-user"></i></a></li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header;