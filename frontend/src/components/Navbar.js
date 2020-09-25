import React from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom';

class Navbar extends React.Component{
    handleLogoutClick(){
        console.log("Logging out");
        this.props.handleLogout();
    }


    render(){
        return(
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <Link to = '/main' className = "navbar-brand">
                        <img src = {require('../img/DBSLogo.png')} alt = "DBS Logo" className = "logo" ></img>
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto mr-5">
                            <li className  = "nav-item mr-3"><a className  = "nav-link text-dark up-font rounded mr-2 pr-3 pl-3" href = "about.html">About</a></li>
                            <li className = "nav-item"><Link to = '/' onClick={()=>this.handleLogoutClick()} className = "nav-link text-dark up-font rounded pr-3 pl-3">Logout</Link></li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar;