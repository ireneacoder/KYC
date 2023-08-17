

import { NavLink, useLocation } from "react-router-dom";
import "./Horizontal.css";
import { VscPassFilled, VscPass } from "react-icons/vsc";
import { useState } from "react";

export default function Horizontal() {
  const [stepsCompleted, setStepsCompleted] = useState(0);
  const location = useLocation()
  // console.log(location.pathname)
  
  if(location.pathname != "/"){
    setInterval(() => {
      setStepsCompleted(location.pathname.slice(1,))
      const el = document.getElementById(location.pathname.slice(1,))
      el.classList.remove('incomplete')
      el.classList.add('completed')
    }, 0);
  }

  else{
    setInterval(() => {
      setStepsCompleted('home')
      document.getElementById('home').classList.remove('incomplete')
      document.getElementById('home').classList.add('completed')
    }, 0);
  }

  return (
    <>
      <div className="container">
        <div className="stepsTitleContainer">
          <div className="stepItem">
            <a className={'incomplete'} id="home"
              
              href={"./"}
            >
              {stepsCompleted === 'home' ? <VscPassFilled /> : <VscPass />}
              Personal Information
            </a>
          </div>

          <div className="stepItem">
            <a className={'incomplete'} id="identityverification"
              
              href={"./identityverification"}
            >
              {stepsCompleted === 'identityverification' ? <VscPassFilled /> : <VscPass />}
              Identity Verification
            </a>
          </div>

          <div className="stepItem">
            <a className={'incomplete'} id="addressverification"
              
              href={"./addressverification"}
            >
              {stepsCompleted === 'addressverification' ? <VscPassFilled /> : <VscPass />}
              Address Verification
            </a>
          </div>

          {/* Todo: Add a progressbar when adding material ui */}

        </div>

       


        {/* className={() => {
                if (stepsCompleted >= 1) return "completed";
                else return "incomplete";
              }} */}

      </div>
    </>
  );
}
