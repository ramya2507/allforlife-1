import "./Availability.css";
import Time from "./Time";
import Select from './Select';
import Button from './Button'
import Timeline from './TimeLine'

const appointmentFrequency=['Daily','Once a week','Twice a week','Thrice a week','Monthly'];

export default function Availability(props) {
    return(

        <div className="post-description-container">
    
            <Timeline  width={props.timeline}/>
            
            <div className="post-description-progress1">
            <span>Step 5/6</span> 
            </div>

            <div className="description-container">
                <h3>Availability</h3>
                <div className="budget-container">
                 <div className="budget-container-1">
                    <h5 className="budget-h5">How often do you expect the sections to happen?</h5>
                    <Select 
                       listArray={appointmentFrequency} 
                       name='appointmentFrequency' 
                       {...props} 
                       handleChange={props.handleChange}
                    />
                  </div>
                  <div className="budget-container-2">
                    <h5 className="budget-h5">Do you have any time requirement?</h5>
                    <div className="availability-image">
                        <div className="availability-image-1">
                            <Time imageName='morning' alt='morning' {...props} handleChange={props.handleChange}/>
                            <Time imageName='afternoon' alt='afternoon'{...props} handleChange={props.handleChange}/>
                        </div>
                        <div className="availability-image-1">
                            <div className="availability-evenging">
                              <Time imageName='evening' alt='evening' {...props} handleChange={props.handleChange} />
                            </div>     
                        </div>
                                                
                        </div>
        
                    <div className="min-max-range">
                      <label for="fromtime">From</label>
                      <input type="text"  name="availabilityFrom" value={props.availabilityFrom} onChange={props.handleChange}></input>
                      <label for="totime">To</label>
                      <input type="text" name="availabilityTo" value={props.availabilityTo} onChange={props.handleChange}></input>
                    </div>
                </div>
                </div>
                <div className="button-nav">
                    <Button onBack={props.onBack} name="Back"/>
                    <Button onNext={props.onNext}  name="Next"/>
                </div>

            </div>

       </div>

    )
}