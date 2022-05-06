import React, { useState, useEffect } from 'react'
import axios from 'axios'

function DisplayAll() {
  const [Applist, setAppList] = useState([]);

  //Similar to componentDidMount and componentDidUpdate
  useEffect(() => {
    axios.get('http://localhost:5000/ap')
      .then(response => {
        console.log(response.data)
        setAppList(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
  }, [])

  function viewAppList() {
    return Applist.map((currentrow, index) => {
      return (
        <tr key={index}>
          <td>{currentrow.firstname}</td>
          <td>{currentrow.lastname}</td>
          <td>{currentrow.phone}</td>
          <td>{currentrow.email}</td>
          <td>{currentrow.medicalh}</td>
          <td>{currentrow.age}</td>
          </tr>
      );
    });
  }

  return (
    <div>
      <br />
      <h3 className="App">ALL Appointment DETAILS</h3>
      <table border="2" align="center" width="80%">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Mobile no</th>
            <th>Email</th>
            <th>Medical history</th>
            <th>Age</th>
          </tr>
        </thead>

        <tbody>
          {viewAppList()}
        </tbody>
      </table>
    </div>
  )
}


export default DisplayAll