import React, {useState} from 'react'
import axios from 'axios'

function UserDashboard() {

    const [FirstName, setFirstName] = useState("")
    const [LastName, setLastName] = useState("")
    const [Age, setAge] = useState("")
    const [Mobile, setMobile] = useState("")
    const [Email, setEmail] = useState("")
    const [Medicalh, setMedicalh] = useState("")

    const handleSubmit = (evt) => {
        evt.preventDefault();

        const userap = {
            firstname: FirstName,
            lastname: LastName,
            phone: Mobile,
            email: Email,
            medicalh: Medicalh,
            age: Age
        }
        
        console.log(FirstName)

        axios.post('http://localhost:5000/ap', userap)
            .then(res => {
                console.log(res.data)
               
            })
            .catch((e) => {
                console.log(e)
            })

    }

   
    return (
        <div class="card container homeclass">
            <h3 className="App">Welcome User</h3>
            <br />
            <br />

            <div className="card container LoginCard" style={{ width: '60rem' }}>
                <br/>
                    <div className="card-body">
                        <h3 className="card-title card-header">Book your Appointment</h3>
                        <p className="card-subtitle mb-2">Please enter your Details</p>
                        <br />
                        <form className="col-xs-12" onSubmit={handleSubmit}>
                            <label>Name-</label>
                            <input type="text" placeholder="First name" required size="25"
                            value={FirstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            ></input>
                            <input type="text" placeholder="Last name" required size="25"
                            value={LastName}
                            onChange={(e) => setLastName(e.target.value)}
                            ></input>

                            <br />
                            <br />
                            <label>Age:</label><input type="text" required size="25"
                            value={Age}
                            onChange={(e) => setAge(e.target.value)}
                            ></input>
                            <label>Blood Group-</label>
                            <select name="Blood Grp">
                                <option value="one" selected disabled>Select</option>
                                <option value="one">A+</option>
                                <option value="one">A-</option>
                                <option value="two">B+</option>
                                <option value="three">B-</option>
                                <option value="three">O+</option>
                                <option value="three">O-</option>
                                <option value="three">AB+</option>
                                <option value="three">AB-</option>
                            </select>
                            <br />
                            <br />
                            <label>Mobile no-   </label>
                            <select name="Code">
                                <option value="one" selected disabled>Code</option>
                                <option value="one">+91</option>
                                <option value="one">+001</option>
                                <option value="three">+35</option>
                                <option value="three">+49</option>
                            </select>
                            <input type="tel" required required size="25"
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
                            {/* <textarea rows="2" cols="20" placeholder="Address"></textarea> */}
                            <textarea rows="2" cols="20" placeholder="Medical history(if any)"
                            value={Medicalh}
                            onChange={(e) => setMedicalh(e.target.value)}
                            ></textarea>

                            <br />
                            <br />
                            <button className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
        
        </div>

    )
}
export default UserDashboard