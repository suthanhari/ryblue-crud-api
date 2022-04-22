import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

function EmployeeList() {

  const params = useParams();

  const [user, setUser] = useState([])

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://6193477cd3ae6d0017da8485.mockapi.io/students${id}`)

    } catch (error) {
      console.log(error);
    }
  }



  // const SECRET_TOKEN = "b1322de05886eaf6bdd71b64c52d12b7"

  useEffect(() => {
    fetchUsers();
  }, [])

  const fetchUsers = () => {
    const fetch = async () => {
      try {
        // let employeeData = await axios.get("http://dummy.restapiexample.com/api/v1/employees");
        let employeeData = await axios.get("https://6193477cd3ae6d0017da8485.mockapi.io/students");
        setUser(employeeData.data);
        // let employeeData = await axios({
        //   method: 'get',
        //   url: `http://dummy.restapiexample.com/api/v1/employees`,
        //   withCredentials: false,
        //   params: {
        //     access_token: SECRET_TOKEN,
        //   },
        // });

        // console.log("result", employeeData.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetch()
  }




  return (
    <div className='container'>
      <div className='row d-flex  justify-content-center mt-4'>
        <div className='col-md-8'>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Employee Name</th>
                <th scope="col">Employee Salary</th>
                <th scope="col">Employee Age</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {
                user.map((obj, index) => {
                  return (<tr key={index}>
                    <th scope="row" k>{index}</th>
                    <td >{obj.employeename}</td>
                    <td>{obj.employeesalary}</td>
                    <td>{obj.employeeage}</td>
                    <td>
                      <Link to={`/EmployeeEdit/${obj.id}`}>
                        <button className='btn btn-info'>Edit</button>
                      </Link>

                      <button className='btn btn-danger' onClick={() => handleDelete(user.id)}>Delete</button>
                    </td>
                  </tr>

                  );
                })
              }

            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default EmployeeList;