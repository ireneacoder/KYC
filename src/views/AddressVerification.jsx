
import React from 'react'
import './AddressVerification.css'
import { HiArrowLongLeft, HiArrowLongRight } from "react-icons/hi2";
import { useNavigate } from 'react-router-dom';

export default function AddressVerification(){

  const navigate = useNavigate();
  return(
    <>
      <div className="mainContainer">
        <p>Address</p>
        <button className='address_back' onClick={() => navigate('/identityverifcaiton') }>
          <HiArrowLongLeft/>   
          Back      
        </button>
      </div>
    </>
  )
}