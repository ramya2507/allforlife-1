import React from 'react';

export default function Button (props) {

  return (
    <div className="button-nav">
      <button onClick={()=>props.onBack("LANDING")}> {"<"} Back</button>
      <button onClick={()=> props.onNext("DETAILS")}>Next {">"}</button>
  </div>
  )
}