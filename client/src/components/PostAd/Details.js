import React from 'react'
import Timeline from './TimeLine'
import Button from './Button'



const symptomes=["Addiction", "Adoption","Anxiety",
"Alchol Use","depression", "Chronic illness", "Divorce",
 "Domestic Abuse","Drug Abuse", "Gambling","Parenting",
 "Sexual Addiction","Grief" ];
 const therapy=["Acceptance and Commitment (ACT)","Adlerian","Art Therapy", 
 "Attachment-based", "Biofeedback", "Coaching"];
 const insurrance=["1199SEIU","ACI Specialty Benefits", "AMERIGROUP"];
 const age=["Adolescents/ Teenagers (14 to 19)", "Adults", "children (6 to 10)", "Elders(65+)"]

export default function Details(props) {

    return(
        <div className="post-description-container">
            <Timeline />
    
                <div className="post-description-progress2">
                </div>
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
                        <div key={item.index} className="symptomes">
                        <button>{item}</button>
                        </div>
                    )})}
                      
                    </div>
                    <div className="details-others">
                        <h5>TYPE OF THERAPY: </h5>
                        <select >
                        <option></option>
                            {therapy.map((item,index) => {return <option key={item.index}> {item} </option>})}
                        </select>
                        <h5>ISSURANCE: </h5>
                        <select >
                        <option></option>
                            {insurrance.map((item,index)=> {return <option key={item.index}> {item} </option>})}
                        </select>
                        <h5>AGE: </h5>
                        <option></option>
                        <select >
                            {age.map((item,index) => {return <option key={item.index}> {item} </option>})}
                        </select>
                        <h5>SEXUALITY: </h5>
                        
                        <select >
                            <option></option>
                            <option>Bisexual</option>
                            <option>Gay</option>
                            <option>Lisbian</option>
                        </select>
                    </div>                      
                    <div className="button-nav">
                        <Button onBack={props.onBack} name="Back"/>
                        <Button onNext={props.onNext} name="Next"/>
                    </div>     
               
                </div>
        </div>
    )
}