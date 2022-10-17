import './user.scss'
import img from "./img/hello.png"

export default function User({userEmail}){

    return(
        <div className="user-wrapp">
            <h1> Hello, user with email "{userEmail}"</h1>
            <img src={img} alt="hello-img" />
        </div>
    )
}