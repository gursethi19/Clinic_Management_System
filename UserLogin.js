import axios from 'axios'
import React, {useState} from 'react'
// import UserDashboard from './UserDashboard'

function UserLogin(props)
{
    const [Username,setUsername]=useState("")
    const [Password, setPassword]=useState("")
    const [Msg, setMsg]=useState("")

    const handleSubmit= (evt) => {
        evt.preventDefault();

        
        // if(Username == "user" && Password == "pass")
        // props.history.push('/admindashboard');
        // else
        // setMsg("Ohh no! enter admin pass")
    

    const userinfo={
        name:Username,
        pass:Password
    }
    

    axios.post('http://localhost:5000/userlogin', userinfo)
    .then(res => {
        console.log(res.data)
        if(res.data==="yes") {
           
            props.history.push('/userdashboard');
        }
        else {
            setMsg("Ohh no! invalid username/password") 
        }
    })
    .catch((e)=>{
        console.log(e)
    })
}


    return( 
        <div className=" card container LoginCard App">
            <h1>UserLogin.</h1>
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
    )
}
export default UserLogin