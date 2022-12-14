import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import StudentService from '../services/StudentService';
function UpdateStudent() {
  const[id,setId]=useState();
  const[name,setName]=useState();
  const[course,setCourse]=useState();
  const params=useParams();
  const[student,setStudent]=useState({id:"",name:"",course:""});
  let navigate = useNavigate();
  useEffect(() => {
    StudentService.getStudent(params.id).then((res) => {
      setId(res.data.id);
      setName(res.data.name);
      setCourse(res.data.course);
      console.log(res.data.id+" "+res.data.name);
    })
  }, []);
  const update = (e) => {
    e.preventDefault();
    // alert(id + " " + name + " " + course);
    StudentService.updateStudent(id,{id,name,course}).then(res=>{
      console.log(res.data);
    })
    navigate("/list");
    const updateObject = {
      id: id,
      name: name,
      course: course,
    };
    alert("Calling update student method...." + JSON.stringify(updateObject));
    StudentService.updateStudent(params.id, updateObject).then((res) => {
      console.log(res.data);
    });
    navigate("/list");
  };
  return (
    <div>
      <h1>Update Student</h1>
      <hr />
      <div className="container">
        <form>
          <div className="mb-3">
            <label htmlFor="exampleInputId" className="form-label">
              Student Id
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputId"
              value={student.id}
              onChange={(e) => setId(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputName" className="form-label">
              Student Name
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputName"
              value={student.name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputName" className="form-label">
              Student Course
            </label>
            <select
              className="form-select"
              aria-label="Default select example"
              name="course"
              id="exampleCourse"
              value={student.course}
              onChange={(e) => setCourse(e.target.value)}
            >
              <option>Open this select menu</option>
              <option value="Reactjs">Reactjs</option>
              <option value="Java">Java</option>
              <option value="Testing">Testing</option>
            </select>
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={(e) => update(e)}
          >
            Update
          </button>
          {id}{name}{course}
        </form>
      </div>
    </div>
  );
}

export default UpdateStudent
