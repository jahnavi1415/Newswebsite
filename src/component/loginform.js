import React, { useState } from "react";
import "./loginform.css"
import { useAuth0 } from "@auth0/auth0-react";
const LoginForm=()=>{
    const {loginWithRedirect,isAuthenticated}=useAuth0();

    return(
    
        !isAuthenticated &&(
        <button onClick={()=>loginWithRedirect()} class="Login">Login</button>)
        
        
    )
}
export default LoginForm