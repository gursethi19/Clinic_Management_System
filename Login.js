import React from 'react'

function Login()
{
    return( 
        <div className="Login">
          
            <br />
            <br />
            <br />            
            <br />
            <br />
            <br />
            <br />
            <div className="card container LoginCard" style={{width:'18rem'}}>
                <div className="card-body">
                    <h3 className="card-title card-header">Patient LogIn</h3>
                    <p className="card-subtitle mb-2">Please enter your Username and Password</p>
                   <br />
                    <form className="">
                        <input type="text" placeholder="Username" required></input>
                        <br />
                        <br />
                        <input type="password" placeholder="Password" required></input>
                        <br />
                        <br />
                        {/* <input type="submit"></input> */}
                        <button className="btn btn-primary">Login</button>
                    </form>
                </div>

            </div>
            <br />
            <br />
            <br />
            <br />            
            <br />
            <br />
            <br />
       
           
        </div>
    )
}
export default Login;