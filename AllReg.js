import React, { useState, useEffect } from 'react'
import axios from 'axios'
// import NavigationBar from './NavigationBar';

function DisplayAll() {
    const [UserList, setUserList] = useState([]);
    const [Message, setMessage] = useState([]);
  
    //Similar to componentDidMount and componentDidUpdate
    useEffect(() => {
      axios.get('http://localhost:5000/re')
        .then(response => {
          console.log(response.data)
          setUserList(response.data);
        })
        .catch((error) => {
          console.log(error);
        })
    }, [])


    function viewUserList() {
        return UserList.map((currentrow, index) => {
          return (
            <tr key={index}>
              <td>{currentrow.name}</td>
              <td>{currentrow.pass}</td>
              <td>{currentrow.phone}</td>
              <td>{currentrow.address}</td>
              <td>{currentrow.medicalh}</td>
              <td>{currentrow.email}</td>
            </tr>
          );
        });
      }

    //   function removeRow(index) {
    //     var tempUserlist = [...UserList]; // make a new copy of array instead of mutating the same array directly. 
    //     let removerow = tempUserlist.splice(index);
    //     // console.log(removerow[0].empemail)
    //     axios.delete('http://localhost:5000/re/remove/' + removerow[0])
    //       .then(res => {
    //         console.log(res.data)
    //         setMessage('SUCCESSFULLY DELETED')
    //         setUserList(tempUserlist)
    //       })
    //       .catch(err => {
    //         console.log(err)
    //         setMessage('INVALID EMAIL ID')
    //       })
    //   }


 return (
        <div>

          <br />
          <h3 className="App">All Registered Users</h3>
          <table border="2" align="center" width="80%">
            <thead>
              <tr>
                <th>Name</th>
                <th>Password</th>
                <th>Mobile</th>
                <th>Address</th>
                <th>Medical</th>
                <th>Email</th>
              </tr>
            </thead>
    
            <tbody>
              {viewUserList()}
            </tbody>
          </table>
        </div>
      )
    }
    
    
    export default DisplayAll