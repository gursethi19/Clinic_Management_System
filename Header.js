import React from 'react'
import Doctors from './Doctors'
import Footer from './Footer'

function Header() {
    return (
        <div className="App">
            <div class="jumbotron">
                <h1 class="display-4 h11" ><i>Piso Clinics</i></h1>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />

                <marquee>Welcome to our official website. If you are an existing user please login else signup</marquee>
                <br />
                {/* <div className="card container LoginCard" style={{ width: '80rem' }}>
                    <div className="card-body">
                        <h3 className="card-title card-header">Book your Appointment</h3>
                        <p className="card-subtitle mb-2">Please enter your Details</p>
                        <br />
                        <form className="col-xs-12">
                            <label>Name-</label>
                            <input type="text" placeholder="First name" required size="25"></input>
                            <input type="text" placeholder="Last name" required size="25"></input>

                            <br />
                            <br />
                            <label>Date of Birth-</label><input type="date" name="date" id="" min="2012-12-12" max="2012-12-15"></input>
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
                            <input type="tel" required required size="25"></input>
                            <br />
                            <br />
                            <input type="email" placeholder="Email" required size="25"></input>
                            <br />
                            <br />
                            <textarea rows="2" cols="20" placeholder="Address"></textarea>
                            <textarea rows="2" cols="20" placeholder="Medical history(if any)"></textarea>

                            <br />
                            <br />
                            <button className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div> */}
                <br />
                <Doctors />

            </div>
                {/* <Footer/> */}

        </div>

        // <div className="carousel slide" data-ride="carousel">
        //     <div className="carousel-inner">
        //         <div className="carousel-item active">
        //             {/* <img src=url("https://iso.500px.com/post-processing-tips-for-landscape-photos/") /> */}
        //             <img src="C:\Users\hp\Desktop\firstapp\src\pic4.jpg" alt="First slide" />
        //             {/* <img src="pic4.jpg" alt="First slide" /> */}
        //         </div>
        //         <div className="carousel-item">
        //             <img className="d-block w-100" src="..." alt="Second slide" />
        //         </div>
        //         <div className="carousel-item">
        //             <img className="d-block w-100" src="..." alt="Third slide" />
        //         </div>
        //     </div>
        // </div>
    )
}
export default Header;