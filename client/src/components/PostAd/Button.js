import React from 'react';

export default function Button (props) {

  return (
    <div className="button-nav">
      <button onClick={props.onBack}> {"<"} Back</button>
      <button onClick={ props.onNext}>Next {">"}</button>
  </div>
  )
}