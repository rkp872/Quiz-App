import './Navigation.css'
import React from 'react'
import {Link} from 'react-router-dom'

function Navigation(){
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                    <Link to="/" className="nav-link">Home <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/ContactUs" className="nav-link">Contact Us</Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/FAQ" className="nav-link">FAQ</Link>
                    </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                    <Link to="/Login"><button className="pulse btn btn-outline-success my-2 my-sm-0" type="submit" >Log In</button></Link> &nbsp;&nbsp;
                    <Link to="/Register"><button className="pulse btn btn-outline-success my-2 my-sm-0" type="submit">Register</button></Link>
                </form>
            </div>
            <div id="underbar"></div>
        </nav>
    );
}

export default Navigation;