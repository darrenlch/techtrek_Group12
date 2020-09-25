import React from 'react';
import './Navbar.css';

class Navbar extends React.Component{
    render(){
        return(
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a class = "navbar-brand" href="#">
                        <img src = {require('../img/DBSLogo.png')} alt = "DBS Logo" className = "logo" ></img>
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto mr-5">
                            <li className  = "nav-item mr-3"><a className  = "nav-link text-dark up-font rounded mr-2 pr-3 pl-3" href = "about.html">About</a></li>
                            <li className  = "nav-item "><a className  = "nav-link text-dark up-font rounded pr-3 pl-3" href = "#">Logout</a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar;