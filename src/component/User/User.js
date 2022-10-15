import React, { useEffect, useState } from "react";
import './user.scss'
import img from "./img/hello.png"

export default function User(){
    const [userEmail, setUserEmail] = useState('')

    useEffect(()=>{
        setUserEmail(localStorage.getItem('userEmail'))
    })

    return(
        <div className="user-wrapp">
            <h1> Hello, user with email "{userEmail}"</h1>
            <img src={img} alt="hello-img" />
        </div>
    )
}