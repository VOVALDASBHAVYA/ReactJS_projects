import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';

function CreateEmployee() {
    const[employee,setEmployee]=useState();
    const[id,setId]=useState();
    const[name,setName]=useState();
    const[age,setAge]=useState();
    const[technology,setTechnology]=useState();
    const[salary,setSalary]=useState();
    let navigate=useNavigate();
    const createEmployee=(e)=>{
        e.preventDefault();
        let obj={
            id:parseInt(id),
            name:name,
            age:parseInt(age),
            technology:technology,
            salary:parseFloat(salary)
        }
        EmployeeService.createEmployee(obj).then((res)=>{
            console.log(res.data);
        })
        navigate("/list");
    }
  return (
    <div className='container'>
      <h1>Create Employee</h1>
      <hr/>
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputId" className="form-label">
            Employee Id
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputId"
            value={id}
            onChange={(e) => setId(e.target.value)}/>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputName" className="form-label">
            Employee Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputName"
            value={name}
            onChange={(e) => setName(e.target.value)}/>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputage" className="form-label">
            Employee Age
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputage"
            value={age}
            onChange={(e) => setAge(e.target.value)}/>
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInput--" className="form-label">
          Technology
          </label>
          <selected
            className="form-select"
            aria-label="Default select example"
            name="technology"
            id="exampleTechnology"
            onChange={(e) => setTechnology(e.target.value)}>
            <option> Select </option>
            <option value="Reactjs">Reactjs</option>
            <option value="Java">Java</option>
            <option value="Testing">Testing</option>
          </selected>
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputsalary" className="form-label">
            Salary
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputsalary"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}/>
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          onClick={createEmployee}>
          Create
        </button>
      </form>
    </div>
  )
}

export default CreateEmployee
