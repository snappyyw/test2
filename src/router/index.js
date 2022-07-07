import React from "react";
import { Routes, Route } from "react-router-dom";

import { MAIN_LINK } from "./link";
import { Main } from "../pages";

function MainRoute() {
    return (
        <Routes>
            <Route exact path={MAIN_LINK} element={<Main />} />
        </Routes>
    )
}

export default MainRoute;