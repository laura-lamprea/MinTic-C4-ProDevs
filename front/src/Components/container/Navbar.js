import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import useAuth from '../../hooks/useAuth';

const Navbar = () => {

    const auth = useAuth();
    const navigate = useNavigate();

    let user1 =JSON.parse(localStorage.getItem("user"))
    
    const handleLogout = () => {
        navigate('/Login', {
            replace: true
        });
    }

    return (
        <nav className='navbar navbar-expand-sm navbar-dark bg-dark'>
            <Link
                className='navbar-brand'
                to="/"
            >
                PRODEVS
            </Link>


            <div className='navbar-collapse'>
                <div className='navbar-nav'>
                    <NavLink
                        className={({ isActive }) => 'nav-item nav-link ' + (isActive ? 'active' : '')}
                        to="/users"
                    >
                        Users
                    </NavLink>

                    <NavLink
                        className={({ isActive }) => 'nav-item nav-link ' + (isActive ? 'active' : '')}
                        to="/projects"
                    >
                        Projects
                    </NavLink>

                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">

                    <span className='nav-item nav-link text-info'>
                        {user1.usuario}
                    </span>

                    <button
                        className="nav-item nav-link btn"
                        onClick={handleLogout}
                    >
                        Logout
                    </button>

                </ul>
            </div>

        </nav>
    )
}

export default Navbar