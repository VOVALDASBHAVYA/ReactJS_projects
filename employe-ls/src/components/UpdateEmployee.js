import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';

function UpdateEmployee() {
    const[employee,setEmployee]=useState({id:"",name:"",age:"",technology:"",salary:""});
    const[id,setId]=useState();
    const[name,setName]=useState();
    const[age,setAge]=useState();
    const[technology,setTechnology]=useState();
    const[salary,setSalary]=useState();
    const params=useParams();
    let navigate=useNavigate();
    useEffect(()=>{
        EmployeeService.getEmployee(params.id).then(res=>{
            setId(res.data.id);
            setName(res.data.name);
            setAge(res.data.age);
            setTechnology(res.data.technology);
            setSalary(res.data.salary);
            console.log(res.data.id+" "+res.data.name);
        })
    },[]);
    const update=(e)=>{
        e.preventDefault();
        EmployeeService.updateStudent(id,{id,name,age,technology,salary}).then(res=>{
            console.log(res.data);
        })
        navigate("/list") ;
      
        const updateObject = {
            id: id,
            name: name,
            age:age,
            technology: technology,
            salary:salary
          };
          alert("Calling update employee method...." + JSON.stringify(updateObject));
          EmployeeService.updateEmployee(params.id, updateObject).then(res => {
            console.log(res.data);
          });
          navigate("/list");
        };
  return (
    <div>
      <h1>Update Employee</h1>
      <hr />
      <div className="container">
        <form>
          <div className="mb-3">
            <label htmlFor="exampleInputId" className="form-label">
              Employee Id
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputId"
              value={id}//{employee.id}
              onChange={(e) => setId(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputName" className="form-label">
              Employee Name
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputName"
              value={employee.name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputAge" className="form-label">
              Employee Age
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputAge"
              value={employee.age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputtechnology" className="form-label">
              Technology
            </label>
            <select
              className="form-select"
              aria-label="Default select example"
              name="technology"
              id="exampleTechnology"
              value={employee.technology}
              onChange={(e) => setTechnology(e.target.value)}
            >
              <option >Open this select menu</option>
              <option value="Reactjs">Reactjs</option>
              <option value="Java">Java</option>
              <option value="Testing">Testing</option>
            </select>
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputSalary" className="form-label">
            Salary
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputSalary"
              value={employee.salary}
              onChange={(e) => setSalary(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            onClick={(e) => update(e)}
          >
            Update
          </button>
          {id}{name}{age}{technology}{salary}
        </form>
      </div>
      
    </div>
  )
}

export default UpdateEmployee
