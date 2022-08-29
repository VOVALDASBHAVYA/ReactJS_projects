import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
// import UserTable from './tables/UserTable'
function Dashboard() {
    const[employeeId,setEmployeeId]=useState();
    const[employeeName,setEmployeeName]=useState();
    const[age,setAge]=useState();
    const[department,setDepartment]=useState();
    const[salary,setSalary]=useState();
    const navigate=useNavigate();
    let employees=[
        {
            "id":1,
            "name":"Aman",
            "age":25,
            "department":"IT",
            "salary":13000
        },
        {
            "id":2,
            "name":"Urad-al",
            "age":30,
            "department":"Delivery team",
            "salary":25000
        },
        {
            "id":3,
            "name":"Barley",
            "age":35,
            "department":"Sales team",
            "salary":25000
        },
    ];
     const editEmployee=()=>{
        alert(employees.id+""+
        employees.name+""+employees.age+""+employees.department+""+employees.salary);
    //     const updateObject={
    //         id:id,
    //         name:name,
    //         age:age,
    //         department:department,
    //         salary:salary
    //     }
    //     alert("Calling update student method...." + JSON.stringify(updateObject));
    navigate("/Signup");
    }
    
    const deleteEmployee=async()=>{
        // 
        let resp=await employees.id;
        console.log("deleted.."+resp)
    }
    const createEmployee=(e)=>{
        e.preventDefault();
        // alert("calling add employee method..."+JSON.stringify(newEmployee));
        const size=employees.length;
        console.log("employee array size: "+size);
        employees.push(newEmployee);
    };
    let newEmployee={
        "employeeId":parseInt(employeeId),
        "employeeName":employeeName,
        "age":parseInt(age),
        "department":department,
        "salary":parseFloat(salary)
    }
    const employeeList=employees.map((employee)=>{
        return(
            <tr key={employee.id}>
                <td>{employee.id}</td>
                <td>{employee.name}</td>
                <td>{employee.age}</td>
                <td>{employee.department}</td>
                <td>{employee.salary}</td>
                <td>
                    <button className='btn btn-primary'style={{margin:'10px'}} onClick={editEmployee}>Edit</button>
                    <button className='btn btn-danger' onClick={deleteEmployee}>Delete</button>
                </td>
            </tr>
        )
    })
    const[users,setUsers]=useState(newEmployee);
  return (
    <div className='container'>
        <h1>Create Employee List</h1>
        <hr/>
        <form>
            <div className='mb-3'>
            <label htmlFor="exampleInputeid" className="form-label">Employee Id</label>
            <input type="text" className="form-control" id="eid" value={employeeId} onChange={e=>setEmployeeId(e.target.value)}/>
            </div>
            <div className='mb-3'>
            <label htmlFor="exampleInputename" className="form-label">Employee Name</label>
            <input type="text" className="form-control" id="ename" value={employeeName} onChange={e=>setEmployeeName(e.target.value)}/>
            </div>
            <div className='mb-3'>
            <label htmlFor="exampleInputeage" className="form-label">Age</label>
            <input type="text" className="form-control" id="age" value={age} onChange={e=>setAge(e.target.value)}/>
            </div>
            <div className='mb-3'>
            <label htmlFor="exampleInputedepartment" className="form-label">Department</label>
            <input type="text" className="form-control" id="department" value={department} onChange={e=>setDepartment(e.target.value)}/>
            </div>
            <div className='mb-3'>
            <label htmlFor="exampleInputesalary" className="form-label">Salary</label>
            <input type="text" className="form-control" id="salary" value={salary} onChange={e=>setSalary(e.target.value)}/>
            </div>
            <button type="submit" className='btn btn-primary' onClick={createEmployee}>create</button>
        </form>
        {employeeId}{employeeName}{age}{department}{salary}
       {/* {console.log(employees)} */}
       <hr/>
      <h1>Employee List</h1>
      <hr/>
      <table className="table">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Name</th>
      <th scope="col">Age</th>
      <th scope='col'>Department</th>
      <th scope="col">Salary</th>
      <th colSpan={"2"}>Actions</th>
    </tr>
    </thead>
    <tbody>
        {employeeList}
  </tbody>
  
    </table>
    </div>
  )
}

export default Dashboard
