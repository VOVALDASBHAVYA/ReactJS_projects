import React from 'react'
import {
    useState
} from 'react'

function Counter() { //rfce
    let [count, setCount] = useState(0);//we have used let here becoz "const" means fixed value right
    return ( 
    <div>
        <p> {count} 
        </p> <button className = 'btn btn-success' onClick={()=>{setCount(count+1)}}> Increment </button> 
        <button className = 'btn btn-danger'onClick={()=>{setCount(count<=0?count=0:count-1)}}> Decrement </button> 
        </div>
    )
}

export default Counter