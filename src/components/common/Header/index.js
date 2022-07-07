import React from "react";

import './style.scss'

function Header() {
    return (
        <header className="header">
            <div className="headerBody">
                <div className="headerLink">
                    <div className="headerLogo">VELOCITY</div>
                    <div className="headerLinkItem">HOME</div>
                    <div className="headerLinkItem">CONTACT</div>
                </div>
            </div>
        </header>
    );
}

export default Header;