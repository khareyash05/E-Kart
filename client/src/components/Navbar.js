import React from "react"
import 'bootstrap/dist/css/bootstrap.css'
import { NavLink } from "react-router-dom"

function Navbar(){
    return(
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
            <NavLink className="navbar-brand" to="/">E-Kart <i class="zmdi zmdi-trending-up"></i></NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <form class="d-flex">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/">Home</NavLink>
                    </li>                    
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/login">Login</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/register">Register</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/profile">My Profile</NavLink>
                    </li>                
                </ul>      
            </div>
        </div>
        </nav>
    </>
    )
}
export default Navbar
