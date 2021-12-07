import React from 'react'
import {Link} from 'react-router-dom';

function Header() {
    return (
        <div className="navbar">
            <ul className="nav-menu">
                <Link to="/home"><li><b>Home</b></li></Link>
                <Link to="/employees"><li><b>Employees</b></li></Link>
                <Link to="/careers"><li><b>Careers</b></li></Link>
            </ul>
        </div>
    )
}

export default Header
