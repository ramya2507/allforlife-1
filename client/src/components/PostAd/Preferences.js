import React from 'react';
import './Preferences.css';


//Array for countries
const country = ['United States', 'Canada'];
const language = ['ADL','English'];
const ethnicity = ['Africian-Americian','Asian','Hispanic and Latino','Native American'];
const faith = ['Buddhist','Chritsian'];

export default function Preferences (props) {

  return (
    <>
      <div className="post-description-container">
               <div className="post-description-progress2">
              </div>
              <div className="post-description-progress1">
                 <span>Step 3/6</span> 
              </div>

              <div className="description-container">
                <div className='h3-heading'>
                  <h3>Preferences</h3>
                </div>           
              <div className="preference-details">
                <h5>LANGUAGE</h5>
                <select >
                  {language.map((item) => {return <option key={item.index}> {item} </option>})}
                </select>
                <h5>ETHNICITY </h5>
                <select >
                  {ethnicity.map((item)=> {return <option key={item.index}> {item} </option>})}
                </select>
                <h5>FAITH</h5>
                <select >
                  {faith.map((item) => {return <option key={item.index}> {item} </option>})}
                </select>
                <h5>COUNTRY</h5>
                <select >
                  {country.map((item) => {return <option key={item.index}> {item} </option>})}
                </select>
              </div>                      
              <div className="button-nav1">
                          <button onClick= {()=>props.onBack("DETAILS")}> {"<"} Back</button>
                          <button onClick= {()=>props.onNext("BUDGET")}>Next {">"}</button>
              </div>
          </div>              
      </div>
    </>
  )
}