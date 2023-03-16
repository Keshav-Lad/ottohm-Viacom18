import React from "react";
import { Outlet, Navigate } from 'react-router-dom';
import constants from "./constants.json";

const PrivateRoute = () => {
    const token=localStorage.getItem(constants.token);
    return token ? <Outlet /> : <Navigate to={constants.login} />;
}

export default PrivateRoute;