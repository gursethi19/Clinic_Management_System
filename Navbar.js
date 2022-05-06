import React from 'react'
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        // <div>
        //     <br></br>
        //     <nav classNameName="navbar LoginCard">

        //        <Link to="/">HOME</Link> |
        //        <Link to="/reg">REG</Link> |
        //        {/* <Link to="/userlogin">USER LOGIN</Link> | */}
        //        <Link to="/about">ABOUT US</Link> |
        //        <Link to="/contact">CONTACT US</Link> |
        //        <Link to="/UserLogin">ADMIN LOGINS</Link>

        //    </nav>
        //  </div>


        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-bank2" viewBox="0 0 20 18">
  <path d="M8.277.084a.5.5 0 0 0-.554 0l-7.5 5A.5.5 0 0 0 .5 6h1.875v7H1.5a.5.5 0 0 0 0 1h13a.5.5 0 1 0 0-1h-.875V6H15.5a.5.5 0 0 0 .277-.916l-7.5-5zM12.375 6v7h-1.25V6h1.25zm-2.5 0v7h-1.25V6h1.25zm-2.5 0v7h-1.25V6h1.25zm-2.5 0v7h-1.25V6h1.25zM8 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2zM.5 15a.5.5 0 0 0 0 1h15a.5.5 0 1 0 0-1H.5z"/>
</svg>Piso Clinics</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/reg">UserRegistration</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/userlogin">UserLogin</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/adminlogin">AdminLogin</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/about">AboutUs</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/contact">ContactUs</a>
                            </li>
                             {/* <li className="nav-item">
                                <a className="nav-link" href="/fuddu">FUDDU</a>
                            </li>
                             */}
                            
                        </ul>
                        {/* <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form> */}
                    </div>
                </div>
            </nav>
        </div>
    )
}
export default Navbar