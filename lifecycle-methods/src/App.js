import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class App extends Component {
  //1)LF_life cycle
  constructor(props){
    console.log("----const. method----");
    super(props);
    this.state={
      msg:"Welcome to ReactJs"
    };
    this.changeState=this.changeState.bind(this);
  }
  changeState(){
    this.setState({msg:"Learning reactjs life cycle methods"});
  }
  componentWillReceiveProps(newProps){
    console.log("--deprecated---");
  }
  //co
  //4)
  shouldComponentUpdate(newProps,newState){
    //boolean value it is return
    return true;
  }
  //4th time it will execute 
  componentWillUnmount(){
    //deprecated
    console.log("--Compo will mount---");
  }
  //3)LF
  componentDidMount(){
    console.log("---compodidmont method LCM---")
  }
  //2)LF:life cycle
  render() {
    console.log("----render method----");
    return (
      <div className='container'>
        <h1>React Js Components lifecycle Methods</h1>
        <h3>{this.state.msg}</h3>
        <button onClick={this.changeState} className="btn btn-primary">click me</button>
      </div>
    )
  }
}

export default App
