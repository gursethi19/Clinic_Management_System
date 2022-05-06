import React, {useState} from 'react'
import axios from 'axios'

function AdminLogin(props) {

    const [Username, setUsername] = useState("")
    const [Password, setPassword] = useState("")
    const [Msg, setMsg] = useState("")

    const handleSubmit = (evt) => {
        evt.preventDefault();


        if (Username == "admin" && Password == "pass")
            props.history.push('/admindashboard');
        else
            setMsg("Invalid Id/password. admin pass")


        // const userinfo={
        //     name:Username,
        //     pass:Password
    }


    return (
        <div>
            <div className=" card container LoginCard App">
                <h1>AdminLogin.</h1>
                <div>
                    <form onSubmit={handleSubmit}>
                        <input type="text" placeholder="Username" required
                            value={Username}
                            onChange={(e) => setUsername(e.target.value)}
                        ></input>
                        <br />
                        <br />
                        <input type="password" placeholder="Password" required
                            value={Password}
                            onChange={(e) => setPassword(e.target.value)}
                        ></input>
                        <br />
                        <br />
                        {/* <input type="submit"></input> */}
                        <button className="btn btn-success" type="submit">LogIn</button>
                    </form>
                    <h1>{Msg}</h1>
                </div>

            </div>
        </div>
     )
}
           
export default AdminLogin