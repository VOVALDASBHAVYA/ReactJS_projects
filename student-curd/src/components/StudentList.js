import React, { useEffect } from 'react'
import {useNavigate} from 'react-router-dom';
import { useState } from 'react';
import UpdateStudent from '../components/UpdateStudent';
import StudentService from '../services/StudentService';
function StudentList() {
    const[students,setStudents]=useState([]);
    let navigate=useNavigate();
    useEffect(()=>{
        getAllStudent();
    },[]);
    const getAllStudent=async()=>{
        const data=await StudentService.getAllStudents();
        console.log("===>"+data);
        setStudents(data.data);
        console.log("Student List : "+students);
    }
    const deleteStudent = async (id) => {
      //alert("delete");
     let resp= await StudentService.deleteStudent(id).then((res)=>{
        console.log(res.data)
      }).catch(data=>{
        console.log(data);
      })
      console.log(resp);
      getAllStudent();
    }
    const UpdateStudent=(id)=>{
      navigate(`/update/${id}`);
    }
    const createStudent=()=>{
      navigate("/create");
     }
     /////////////////
    //const navigate=useNavigate();
    // useEffect(()=>{
    //     const result=StudentService.getAllStudents().then(res=>{
    //         console.log("Student Array"+res.data);
    //         setStudents(res.data);
            //1)// setStudents(res.data);
            // console.log("students data:" + setStudents)
        //})
        //3) .then((res)=>{
        //     console.log("student array"+res.data);
        //     setStudents(res.data);
        // })
        /////////////////////
        //2) console.log("result ===>"+res);
        // setStudents(result);
        // console.log("student data : "+students);
   // },[]);
  
  return (
    <div className='container'>
      <h1>Student List</h1>
      <hr/>
      <button className='btn btn-primary' id="id" style={{float:'left'}} onClick={createStudent}>+Student</button>
      {/* <a className='btn btn-primary' style={{float:"left"}}><Link to="/create">+Student</Link></a> */}
      {/* <Link to */}
      <table className="table table-striped">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Name</th>
      <th scope="col">Course</th>
      <th colSpan={"2"}>Actions</th>
    </tr>
  </thead>
  <tbody>
    {
        students.map((student)=>{
            return(
<tr key={student.id}>
    <td>{student.id}</td>
    <td>{student.name}</td>
    <td>{student.course}</td>
    <td>
    <a className='btn btn-primary' style={{margin:"10px"}} onClick={()=>UpdateStudent()}>Edit</a>
    <button className='btn btn-danger'onClick={()=>deleteStudent(student.id)}>Delete</button>
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

export default StudentList
