import axios from 'axios';
import React, { useEffect, useState } from 'react'

function FakeApi() {
    const[products,setProducts]=useState([]);
    useEffect(()=>{
        axios.get("https://fakestoreapi.com/products").then((res)=>{
        setProducts(res.data);
        })
    },[]);
  return (
    <div className='container-fluid'>
        <div className='row'>
            <div className='card-group'>
            {products.map(res=>{
                return(
                    <div className='col-3 mb-2' key={res.id}>
                        <div className='card' style={{height:"32rem",width:"24rem"}}>
                            <div className='card-header'>
                            <p className="card-text"/* key={res.id}*/><b>Category :{res.category}</b></p>
                                    </div>
                                    <img src={res.image} className="card-img-top" alt="Network Issue" id="imagecard" />
                                    <div className="card-body">
                                        <p className="card-title"> <b>Title :</b>{res.title}</p>
                                        {/* <p className="card-text"><b> Description :</b>{res.description}</p> */}
                                    </div>
                                    <div className='card-footer text-muted d-flex justify-content-between'>
                                        <p><b>Rate :{res.rating.rate}</b></p>
                                        
                                        <p className="card-text"><b>Count :{res.rating.count}</b></p>
                                        <p> <b>Price :{res.price}</b></p>
                                    </div>
                                </div>
                            </div>
                )
            })}
            </div>
        
    </div>
    
    </div>
  )
}

export default FakeApi


