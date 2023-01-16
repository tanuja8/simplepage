import React, { useState } from 'react'

export default function  Increment() {
  const[counter,setCounter]=useState(0)  

  return (
    <div>
      <div className="text-center ">
    <button type="button" class="btn btn-danger" onClick={()=>setCounter(counter+1)}>+1</button>
    <span>  Counter Value : </span>
    <span className="m-3 ">{counter}</span>
      <button type="button" class="btn btn-danger" onClick={()=>setCounter(counter-1)}>-1</button>
      </div>
    </div>
  )
}
