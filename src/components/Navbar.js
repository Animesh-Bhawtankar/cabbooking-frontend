import React from 'react'
import { Link } from 'react-router-dom'


export default function Navbar(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">{props.title}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-5">
                        <li className="nav-item mx-3">
                            <Link className="nav-link active" aria-current="page" to="/admin">{props.admin}</Link>
                        </li>
                        <li className="nav-item mx-3">
                            <Link className="nav-link active" aria-current="page" to="/customer">{props.customer}</Link>
                        </li>
                        <li className="nav-item mx-3">
                            <Link className="nav-link active" aria-current="page" to="/driver">{props.driver}</Link>
                        </li>
                        <li className="nav-item mx-3">
                            <Link className="nav-link active" aria-current="page" to="/operator">{props.operator}</Link>
                        </li>
                        <li className="nav-item mx-3">
                            <Link className="nav-link active" aria-current="page" to="/tripbooking">{props.tripbooking}</Link>
                        </li>
                        
                        
                    </ul>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button class ="btn btn-outline-success" type ="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}