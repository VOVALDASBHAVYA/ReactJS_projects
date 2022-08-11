import React, { Component } from 'react'

export class Student extends Component {
    constructor(props){
        super(props);
        this.state={
           "id":this.props.id,
           "name":this.props.name,
           "age":this.props.age,
           "address":this.props.address
        };
    }
    render() {
    return (
      <div>
        <h1>Student Information</h1><hr/>
         <p>Student Id:{this.state.id}</p>
         <p>Student Name:{this.state.name}</p>
         <p>Student age:{this.state.age}</p>
        <p>Student address:{this.state.address}</p>
         <hr/>
      </div>
    )
  }
}

export default Student
