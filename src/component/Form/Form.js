import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./form.scss"
import Modal from "../Modal/Modal";
import User from "../User/User";

export default function Form () {
  const[step, setStep] = useState(false)
  // form state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [emailError, setEmailError] = useState("Не може бути пустим");
  const [passwordError, setPaswordError] = useState("Не може бути пустим");
  const [formValid, setFormValid] = useState(false);
  // modal state
  const [modalActive, setModalActive] = useState(false);

  // check Error
  useEffect(() => {
    if (emailError || passwordError) {
      setFormValid(false);
    } else setFormValid(true);
  });

  // Input handler
  const emailHandler = (e) => {
    setEmail(e.target.value);
    if (!e.target.value) {
      setEmailError("Не може бути пустим");
    } else setEmailError("");
  };
  const passwordHandler = (e) => {
    setPassword(e.target.value);
    if (!e.target.value) {
      setPaswordError("Не може бути пустим");
    } else setPaswordError("");
  };

  // check Empty input
  const blurHandler = (e) => {
    if (e.target.name === "email") {
      setEmailDirty(true);
    } else if (e.target.name === "password") {
      setPasswordDirty(true);
    }
  };

  // Modal open / closed
  const registrationHandler = (e) => {
    e.preventDefault();
    setModalActive(true);
  };
  const cancelHandler = (e) => {
    e.preventDefault();
    setModalActive(false);
  };
  // Add user to localStorage
  const confirmHandler = () =>{
    localStorage.setItem("userEmail", email)
    setStep(step+1)
  }

  if(!step){
    return (
    
      <form className="form-wrapp">
        <h1 className="form-title">Create an account</h1>
  
        {emailDirty && emailError && <div style={{color:"red", fontSize: "12px", marginBottom: "5px"}}>{emailError}</div>}
        <input
          onChange={(e) => {emailHandler(e);}}
          value={email}
          onBlur={(e) => {blurHandler(e);}}
          name="email"
          type="text"
          placeholder="Email (required)"
        />
        {passwordDirty && passwordError && <div style={{color:"red", fontSize: "12px", marginBottom: "5px"}}>{passwordError}</div>}
        
        <input
          onChange={(e) => {passwordHandler(e);}}
          value={password}
          onBlur={(e) => {blurHandler(e);}}
          name="password"
          type="text"
          placeholder="Password (required)"
        />
  
        <button onClick={(e) => {registrationHandler(e);}} disabled={!formValid} className="btn">
          Submit
        </button>
        <Modal active={modalActive} setActive={setModalActive}>
          <h1>Please confirm account creation for "{email}"</h1>
          <div className="btn-wrapp">
              <button onClick={()=>{confirmHandler()}} className="btn">Confirm</button>
            <button onClick={(e) => {cancelHandler(e);}} className="btn">Cancel</button>
          </div>
        </Modal>
      </form>
    );
  }
  else return <User/>

}
