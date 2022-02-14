import React from "react";
import Greeting from "./Greeting";

const User = ({profilePic}) =>{
    return(
        <div>
            <img className="App_userpic" src={profilePic} alt='user' />
            <Greeting />
        </div>
    )
}

export default User;