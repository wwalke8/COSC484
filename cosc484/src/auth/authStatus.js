import React from 'react';
import { Navigate, useNavigate, useLocation } from "react-router-dom";
import { Link } from "@mui/material";
import { useAuth } from "./authProvider";

export const AuthStatus = () => {
    let auth = useAuth();
    let navigate = useNavigate();

    if (!auth.user) {
        return (
            <p>
            Welcome | {" "}
            <Link component="button" 
                variant="body2"
                onClick={() => navigate("/login")}
            >
                Login
            </Link>
            </p>
        );
    }

    return (
        <p>
        Welcome {auth.user} |{" "}
        <button
            onClick={() => {
            auth.signout(() => navigate("/"));
            }}
        >
            Sign out
        </button>
        </p>
    );
}
  
function RequireAuth({ children }) {
    let auth = useAuth();
    let location = useLocation();

    if (!auth.user) {
        // Redirect them to the /login page, but save the current location they were
        // trying to go to when they were redirected. This allows us to send them
        // along to that page after they login, which is a nicer user experience
        // than dropping them off on the home page.
        return <Navigate to="/login" state={{ from: location }} />;
    }

    return children;
}