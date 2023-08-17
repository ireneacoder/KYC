
import { MdVerified, MdVerifiedUser } from "react-icons/md";
import './Capture_button.css'
export default function CaptureButton(props){


    return(
        <>
            <div className="verification">
                <MdVerified className={props.isCompleted? "completed_icon" : "incomplete_icon"} size={20}/>
                <div className="linee"></div>
                <button className={props.isCompleted? "capture_btn completed_capture" : "capture_btn"}> 
                    <MdVerifiedUser size={18}/> Customer Verified </button>
            </div>
        </>
    )
}