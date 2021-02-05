import "./ProblemDesc.css"
import Button from './Button'

export default function PostDescription(props) {
    return(
        <div className="post-description-container">
    
                <div className="post-description-progress">
                </div>
​
                <div className="description-container">
                    <h3>Problem Description</h3>
                    <div className="job-container"> 
                        <div className="problemDescription">
                                <p>Here you can describe and 
                                    give more details
                                    about the situation that you
                                    are living and how we can help you.
                                </p>
                                <div><img src ="./img/Doubt.png"  alt="description"/></div>
                        </div>
                        <div className="description">
                            <textarea > </textarea>
                            <Button />
                        </div>
                    </div>
                </div>
            </div>
    
    )
}
