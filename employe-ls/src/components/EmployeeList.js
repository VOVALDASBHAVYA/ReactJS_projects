import React, { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';

function EmployeeList() {
    const[employees,setEmployee]=useState([]);
    let navigate=useNavigate();

    useEffect(()=>{
        getAllEmployee();
    },[]);

    const getAllEmployee=async()=>{
        const data=await EmployeeService.getAllEmployee();
        console.log("===>"+data);
        setEmployee(data.data);
        console.log("Employee List : "+employees);
    }
    const deleteEmployee = async (id) => {
      //alert("delete");
     let resp= await EmployeeService.deleteEmployee(id).then((res)=>{
        console.log(res.data)
      }).catch(data=>{
        console.log(data);
      })
      console.log(resp);
      getAllEmployee();
    }
    const UpdateEmployee=(id)=>{
      navigate(`/update/${id}`);
    }
    const createEmployee=()=>{
      navigate("/create");
     }
  return (
    <div className='container'>
      <h1>Employee List</h1>
      <hr/>
      <button className='btn btn-primary' id="id" style={{float:'left'}} onClick={createEmployee}>+Employee</button>
      {/* <a className='btn btn-primary' style={{float:"left"}}><Link to="/create">+Student</Link></a> */}
      {/* <Link to */}
      <table className="table table-striped">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Name</th>
      <th scope="col">Age</th>
      <th scope="col">Technology</th>
      <th scope="col">Salary</th>
      <th colSpan={"2"}>Actions</th>
    </tr>
  </thead>
  <tbody>
    {
        employees.map((employee)=>{
            return(
<tr key={employee.id}>
    <td>{employee.id}</td>
    <td>{employee.name}</td>
    <td>{employee.age}</td>
    <td>{employee.technology}</td>
    <td>{employee.salary}</td>
    <td>
    <a className='btn btn-primary' style={{margin:"10px"}} onClick={()=>UpdateEmployee(employee.id)}>Edit</a>
    <button className='btn btn-danger'onClick={()=>deleteEmployee(employee.id)}>Delete</button>
    </td>
</tr>
            );
        })
    }
  </tbody>
</table>
      <hr/>
    </div>
  )
}

export default EmployeeList
