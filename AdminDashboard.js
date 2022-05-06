import React from 'react'
import { Link } from 'react-router-dom';
import AllReg from './AllReg'
import AllApp from './AllApp'


function AdminDashboard() {



    return (
        <div class="container App">
            <div className="card homeclass">
                <h1>ADMIN DASHBOARD</h1>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <h3>Welcome Admin</h3>
            </div>
            <div className="navbar">
                <button className="btn btn-outline-primary"> <a className="nav-link" href="/allreg">AllRegistrations</a></button>
                <button className="btn btn-outline-primary"><a className="nav-link" href="/allapp">AllAppointments</a></button>
                {/* <button className="btn btn-outline-primary"><a className="nav-link" href="/search">Search</a></button> */}
                <button className="btn btn-outline-danger"><a className="nav-link" href="/">LogOut</a></button>

            </div>
        </div>

    )
}
export default AdminDashboard