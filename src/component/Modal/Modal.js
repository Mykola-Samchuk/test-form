import React from "react";
import "./modal.scss";

export default function Modal({ active, setActive, children}) {
  
  return (
    <div className={active ? "modal-wrapp active" : "madal-wrapp"} onClick={()=>{setActive(false)}}>
      <div className="modal-content" onClick={(e)=>{e.stopPropagation()}}>
        {children}
      </div>
    </div>
  );
}
