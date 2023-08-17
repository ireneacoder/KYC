import { useState } from "react";
import "./App.css";
import Nav from "./nav/Nav";
import { MdAccountCircle } from "react-icons/md";
import { Outlet } from "react-router-dom";
import Horizontal from "./horizontalnav/Horizontal";
import { Routes, Route } from "react-router-dom";
import PersonalInfo from "./views/PersonalInfo";
import IdentityVerification from "./views/IdentityVerification";
import AddressVerification from "./views/AddressVerification";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Nav />
      <div className="profile_container">
        <div className="profile" onClick={(e) => alert("profile clicked!")}>
          <MdAccountCircle size={32} color="#512E70" />
        </div>
      </div>
      <Horizontal />

      <div className="outlet_container">
        <Routes>
          <Route path="/" element={<PersonalInfo />} />
          <Route path="/identityverification" element={<IdentityVerification />}/>
          <Route path="/addressverification" element={<AddressVerification />}/>
        </Routes>
      </div>
    </>
  );
}

export default App;
