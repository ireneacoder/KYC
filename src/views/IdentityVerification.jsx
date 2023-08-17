import React, { useState } from "react";
import "./IdentityVerification.css";
import { HiArrowLongLeft, HiArrowLongRight } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import { TextField, InputAdornment, Button } from "@mui/material";
import CaptureButton from "../Capture_button/CaptureButton";
// import {format} from 'date-fns'
import TimeStamp from "../Timestamp/Timestamp";

export default function IdentityVerification() {
  const navigate = useNavigate();

  const [fieldCaptured, setFieldCaptured] = useState({first: true, second: false, third: true, fourth: false})
  return (
    <>
      <div className="mainContainer">
        <p className="greet"> Congratulations!</p>
        <p className="subtext"> You are almost there!</p>

        <div className="contentbox">
          <div className="image_container"></div>

          <div className="details_capture">
            <TextField
            size="small"
            sx={{width: '56vw'}}
              label="Name"
              id="outlined-start-adornment"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="start">
                    <CaptureButton isCompleted={fieldCaptured.first}/>
                  </InputAdornment>
                ),
              }}
              variant="outlined"
            />

            <TextField
            size="small"

              label="ID Type"
              id="outlined-start-adornment"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="start">
                    <CaptureButton  isCompleted={fieldCaptured.second} />
                  </InputAdornment>
                ),
              }}
              variant="outlined"
            />

            <TextField
            size="small"

              label="ID Number"
              id="outlined-start-adornment"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="start">
                    <CaptureButton  isCompleted={fieldCaptured.third} />
                  </InputAdornment>
                ),
              }}
              variant="outlined"
            />

            <TextField
            size="small"

              label="DOB"
              id="outlined-start-adornment"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="start">
                    <CaptureButton  isCompleted={fieldCaptured.fourth} />
                  </InputAdornment>
                ),
              }}
              variant="outlined"
            />

              <div className="scannedImages">
                <img src="./img1.png" alt="Image 1" className="image1"></img>
                <img src="./img2.png" alt="Image 1" className="image1"></img>
                <img src="./img3.png" alt="Image 1" className="image1"></img>
                
              </div>
          </div>
        </div>

        <div className="timer_section">
              <TimeStamp/>
        </div>
        <div className="acceptreject">
          <button
            className="accept"
            onClick={() => navigate("/addressverification")}
          >
            {" "}
            Accept
          </button>
          <button className="reject"> Reject</button>
        </div>

        <div className="nextbackbutton">
          <button className="front" onClick={() => navigate("/personalinfo")}>
            <HiArrowLongLeft />
            Back
          </button>

          <button
            className="front"
            onClick={() => navigate("/addressverification")}
          >
            Next
            <HiArrowLongRight />
          </button>
        </div>
      </div>
    </>
  );
}
