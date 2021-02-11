import React from 'react';
import { useState } from 'react';

import "./Details.css";
import Select from "./Select";
import Button from './Button'
import Timeline from './TimeLine'

const symptomes=["Addiction", "Adoption","Anxiety",
"Alchol Use","depression", "Chronic illness", "Divorce",
 "Domestic Abuse","Drug Abuse", "Gambling","Parenting",
 "Sexual Addiction","Grief" ];
 const therapy=["Acceptance and Commitment (ACT)","Adlerian","Art Therapy", 
 "Attachment-based", "Biofeedback", "Coaching"];
 const insurrance=["1199SEIU","ACI Specialty Benefits", "AMERIGROUP"];
 const age=["Adolescents/ Teenagers (14 to 19)", "Adults", "children (6 to 10)", "Elders(65+)"]
 const sexuality=['Bisexual','Gay','Lesbian'];

export default function Details(props) {

    
    function checkSymptoms(evt){
        
        const newSymptomes=[...props.symptomes];
        if(evt.target.checked){
            const find=newSymptomes.find(symptome =>  symptome === evt.target.name);
            if(!find){
                newSymptomes.push(evt.target.name);
                props.addSymptomes( newSymptomes);
            }
        } else {
            const arr = newSymptomes.filter(symptome => symptome !== evt.target.name);
            props.addSymptomes( arr);
        }
    }
        

    return(
        <div className="post-description-container">
    
                <Timeline  width={props.timeline}/>
                <div className="post-description-progress1">
                   <span>Step 3/6</span> 
                </div>

                <div className="description-container">
                    <h3>Details</h3>
                    <br/>
                    <h5>SYMPTOMS</h5> 
                    <br/>
                    <div className="container-symptomes">
                    {symptomes.map((item,index) => {return (
                            <label key={index} className="container-symptomes-1">
                            <span className="symptomes-text" >{item}</span>
                            <input type="checkbox" name={item} value={item} checked={props.symptomes.find(symptome => symptome === item)? "checked" : ""} onClick={(evt)=>checkSymptoms(evt)} />
                            <span className="checkmark"></span>
                            </label>

                    )})}
                      
                    </div>
                    <div className="details-others">
                        <Select heading='TYPE OF THERAPY:' listArray={therapy} name='therapy' filter={props.therapy} {...props} handleChange={props.handleChange}/>
                        <Select heading='ISSURANCE:' listArray={insurrance} name='insurance'filter={props.insurance}{...props} handleChange={props.handleChange} />
                        <Select heading='AGE:' listArray={age} {...props} name='age' filter={props.age} {...props} handleChange={props.handleChange} />
                        <Select heading='SEXUALITY' listArray={sexuality} name='sexuality'filter={props.sexuality} {...props} handleChange={props.handleChange}/>                       
                    </div>                      
                    <div className="button-nav">
                    <Button onBack={props.onBack} name="Back"/>
                    <Button onNext={props.onNext}  name="Next"/>
                </div>     
               
                </div>
        </div>
    )
}
