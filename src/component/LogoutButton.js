import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./loginform.css"
const LogoutButton=()=>
{
    const {logout,isAuthenticated,user}=useAuth0();
    return(
        isAuthenticated &&(
           
       <button onClick={()=>logout()} class="Logout">
        Log Out
       </button>
    
        )
    )
}
export default LogoutButton