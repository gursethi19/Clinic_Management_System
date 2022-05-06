import React, { useState } from 'react'
import axios from 'axios'

function Register() {

    const [Name, setName] = useState("")
    const [Mobile, setMobile] = useState("")
    const [Email, setEmail] = useState("")
    const [Medicalhis, setMedicalhis] = useState("")
    const [Address, setAddress] = useState("")
    const [Password, setPassword] = useState("")

    const handleSubmit = (evt) => {
        evt.preventDefault();

        const userreg = {
            name: Name,
            phone: Mobile,
            email: Email,
            address: Address,
            medicalh: Medicalhis,
            pass:Password
        }
        
        console.log(Name)

        axios.post('http://localhost:5000/re', userreg)
            .then(res => {
                console.log(res.data)
               
            })
            .catch((e) => {
                console.log(e)
            })

    }

    return (
        <div className="Login col-lg-12 col-md-12 col-sm-12">

            <br />
            <div className="card container LoginCard" style={{ width: '25rem' }}>
                <div className="card-body">
                    <h3 className="card-title card-header">Patient Registration</h3>
                    <p className="card-subtitle mb-2">Please enter your Details</p>
                    <br />
                    <form className="" onSubmit={handleSubmit}>
                        <input type="text" placeholder="Full name" required size="25"
                            value={Name}
                            onChange={(e) => setName(e.target.value)}
                        ></input>
                        <br />
                        <br />
                        <input type="password" placeholder="Password" required size="25"
                            value={Password}
                            onChange={(e) => setPassword(e.target.value)}
                        ></input>
                        {/* <label>Date of Birth-</label><input type="date" name="date" id="" min="2012-12-12" max="2012-12-15"></input>
                        <br />
                        <br /> */}
                        <input type="tel" placeholder="Mobile no" required required size="25"
                            value={Mobile}
                            onChange={(e) => setMobile(e.target.value)}
                        ></input>
                        <br />
                        <br />
                        <input type="email" placeholder="Email" required size="25"
                            value={Email}
                            onChange={(e) => setEmail(e.target.value)}
                        ></input>
                        <br />
                        <br />
                        <label>Address</label> <br /><textarea rows="2" cols="20"
                        value={Address} 
                        onChange={(e) => setAddress(e.target.value)}
                        ></textarea>
                        <br />
                        <br />
                        <label>Medical History (if any)</label> <br /><textarea rows="2" cols="20"
                            value={Medicalhis}
                            onChange={(e) => setMedicalhis(e.target.value)}
                        ></textarea>
                        <br />
                        <br />
                        <select name="Blood Grp">
                            <option value="one" selected disabled>Blood Grp</option>
                            <option value="one">A+</option>
                            <option value="one">A-</option>
                            <option value="two">B+</option>
                            <option value="three">B-</option>
                            <option value="three">O+</option>
                            <option value="three">O-</option>
                            <option value="three">AB+</option>
                            <option value="three">AB-</option>
                        </select>
                        {/* <input type="submit"></input> */}
                        <br />
                        <br />
                        <button className="btn btn-primary">Submit</button>
                    </form>
                </div>

            </div>
            <br />
        </div>
    )
}
export default Register