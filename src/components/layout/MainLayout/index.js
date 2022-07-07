import React from "react";

import { Header} from "../../common";

import "./style.scss";

function MainLayout({ children }) {
    return (
        <div className="mainLayout">
            <Header />
            <div className="bodyMainLayout">{children}</div>
        </div>
    );
}

export default MainLayout;