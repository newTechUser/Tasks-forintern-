
import React from 'react'
import './FreeTrial.css'
const FreeTrial: React.FC = () => {
    return(
        <div className="FreeTrial">
            <div className="freetrialcontainer">
                <div className="freetrialtextside">
                    <span className="maintext">Start your free trial today!</span><br/><br/>
                    <span className="abouttext">
                        This is a clear and concise call to action that encourages users to sign up for a free trial of StreamVibe.
                    </span>
                </div>
                <div className="freetrialbtnside">
                    <button className="freetrialbtn">Start a Free Trial</button>
                </div>
            </div>
        </div>
    )
}
export default FreeTrial;