import React, { useState } from 'react';

function Channel() {
   let[msg,setMsg]=useState("Welcome to Ojas channel");
   let[count,setCount]=useState(0);
   let count1=()=>{setCount(count>=0?count=0:count+1)}
//    const TTrue=()=>{
//     let [count, setCount] = useState(0);
        //let True=()=>{setCount(count=>1?msg="Thank you for subscription":(count==2?msg="You have already subscribed":"Thank you"))};
        
//    }
  return (
    <div>
      <h1>{msg}</h1>
      {/* 0:means thank you; 1&2: means thanks for subscription*/}
      <button className="btn btn-danger" onClick={()=>{setMsg(count1=>0?msg="Thank you for subscription":(count1==2?msg="Thank you":msg="You have already subscribed"))}}>Subscribe</button>
      {/* {()=>{setCount(count<=0?count=0:count-1)}} */}

    </div>
  )
}

export default Channel
