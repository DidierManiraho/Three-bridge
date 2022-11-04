import React from 'react';
import {Link} from "react-router-dom";

const NavBar = () => {
    return (
        <div>
            <nav>
                <h1 className="">Three bridge</h1>
                <Link to="/">Home</Link>
                <Link to="/create">Create New Notes</Link>
            </nav>

        </div>

    );
};

export default NavBar;