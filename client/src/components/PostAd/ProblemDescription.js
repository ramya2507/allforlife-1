import "./ProblemDescription.css"
import Button from './Button'
import Timeline from './TimeLine'

export default function PostDescription(props) {
    return(
        <div className="post-description-container">
    
                <Timeline />

                <div className="description-container">
                    <h3>Problem Description</h3>
                    <div className="containerDes"> 
                        <div className="problemDescription">
                                <p>Here you can describe and 
                                    give more details
                                    about the situation that you
                                    are living and how we can help you.
                                </p>
                                <div className='desc'><img src ="./img/Doubt.png"  alt="description"/></div>
                        </div>
                        <div className="description">
                            <textarea > </textarea>
                            <Button onBack={props.onBack} onNext={props.onNext}/>
                        </div>
                    </div>
                </div>
            
           </div>
    
    )
}
