import * as React from 'react';
import { Link } from "react-router-dom";
// import { AuthProvider } from '../auth/authProvider';

export default function Home() {

    return (
        <div>
            <Link to="login" variant="body2">
                {"Please sign in."}
            </Link>
        </div>
    )
}