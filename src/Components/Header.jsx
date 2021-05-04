import React from 'react'
import { NavLink } from 'react-router-dom';

const Header = () => {
    return(
        <header className="header">
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <NavLink className="navbar-brand" to="/">Navbar</NavLink>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <NavLink className="nav-link" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">Service</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">Product</NavLink>
                        </li>
                        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">SIGN UP</button>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    )
}
export default Header;