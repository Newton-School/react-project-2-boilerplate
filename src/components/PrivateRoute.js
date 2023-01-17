import React from "react";
import { Route, Redirect } from "react-router-dom";
import { userData } from "../../utils/userData";
function PrivateRoute({ children, ...rest }) {
    function isAuth() {
        // complete the function
    }

    return isAuth() ? (
        <Route render={() => children}></Route>
    ) : (
        <Redirect to="/login" />
    );
}

export default PrivateRoute;
