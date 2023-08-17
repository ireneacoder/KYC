
import React from 'react'
import { HiArrowLongLeft, HiArrowLongRight } from "react-icons/hi2";
import './PersonalInfo.css'
import { useNavigate } from 'react-router-dom';


export default function PersonalInfo(){

    const navigate = useNavigate();
  return(
    <>
        <div className="mainContainer">

        <p>personal</p>
        <button className='personal_front' onClick={() => navigate('/identityverifcaiton')}>  
            Next
            <HiArrowLongRight/>    
        </button>
        </div>
        
    </>
  )
}
