import axios from 'axios';
import { useFormik } from 'formik';
import React, { useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';

function EmployeeEdit() {

    const params = useParams()

    const navigate = useNavigate()

    const formik = useFormik({
        initialValues: {
            employeename: "",
            employeesalary: "",
            employeeage: ""
        },
        onSubmit: async values => {
            try {
                // await axios.post("http://dummy.restapiexample.com/api/v1/create", values)
                await axios.put(`https://6193477cd3ae6d0017da8485.mockapi.io/students${params.id}`, values)
                // await axios({
                //     method: 'post',
                //     url: `http://dummy.restapiexample.com/api/v1/create`,
                //     withCredentials: false,
                //     params: {
                //       access_token: SECRET_TOKEN,
                //     },
                //   },values);
            } catch (error) {
                console.log(error);
            }
        }
        
    });
    
    useEffect(() => {
        let fetch = async () => {
            try {
                
                let employeeData = await axios.get(`https://6193477cd3ae6d0017da8485.mockapi.io/students/${params.id}`);
                formik.setValues(employeeData.data);
               
                
            } catch (error) {
                console.log(error);
            }
           
        }
        fetch()
    }, [])


    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-3 mt-4'>
                    <Link to={"/EmployeeList"}>
                        <button className='btn btn-lg btn-primary'>See List</button>
                    </Link>

                </div>


                <div className='col-md-4'>
                    <form onSubmit={formik.handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="employeename" className="form-label">Employee Name</label>
                            <input type="text" className="form-control" 
                                name="employeename" onChange={formik.handleChange} value={formik.values.employeename} />

                        </div>
                        <div className="mb-3">
                            <label htmlFor="employeesalary" className="form-label">Employee Salary</label>
                            <input type="number" className="form-control"
                                name="employeesalary" onChange={formik.handleChange} value={formik.values.employeesalary}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="employeeage" className="form-label">Employee Age</label>
                            <input type="number" className="form-control" 
                                name="employeeage" onChange={formik.handleChange} value={formik.values.employeeage}
                            />
                        </div>

                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default EmployeeEdit