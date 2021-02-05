import React from 'react'


export default function UserType(props) {
  return(
    <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal1">
        <img className="img-fluid" src={`./img/${props.img}.PNG`} alt="user" />
        <h3>{props.type}</h3>
        <p class="text-justify">{props.message}</p>
    </div>
  )
}