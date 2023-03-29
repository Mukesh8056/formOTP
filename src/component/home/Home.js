
import React from 'react'
import { Nav,Button,Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import  {Link } from 'react-router-dom';
import Data from '../data/Data'
function Home() {
  return (
    <div>
<Nav className="navbar navbar-primary bg-primary">
  <div className="container-fluid">
    <a className="navbar-brand " href="void">
      DASBOARD
    </a>
    <Link to={"/"}>
    <Button type="button" className="btn btn-light">Log Out</Button>
    </Link>
  </div>
</Nav>

<Table className="table" style={{ margin: '20px' }}>
        <thead>
          <tr >
            <th scope="col">Name</th>
            <th scope="col">Age</th>
            <th scope="col">Gender</th>
            <th scope="col">Email</th>
            <th scope="col">PhoneNumber</th>

          </tr>
        </thead>
        <tbody>
          {
            Data && Data.length > 0 ?

              Data.map((
                { id, name, age, email, phoneNumber,gender }
              ) => {
                return (
                  <tr key={id}>

                    <td>{name}</td>
                    <td>{age}</td>
                    <td>{gender}</td>
                    <td>{email}</td>
                    <td>{phoneNumber}</td>
                    <td>
                    </td>
                  </tr>
                )
              })

              :
              <tr>
                <td colSpan="4">No Data Available</td>
              </tr>
          }
        </tbody>
      </Table>

    </div>
  )
}

export default Home