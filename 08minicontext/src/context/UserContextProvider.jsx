import React from "react";
import UserContext from "./UserContext";

// Saare children us state ko access krne k yogya h
const UserContextProvider=({children})=>{
    const [user,setUser]=React.useState(null);  
     return(
        // yaha pr value m hm accesss de rahe h ki hm kya kya cheez provide krna chahte h value mtlb hamri component kya kya access  kr skte  h

        <UserContext.Provider value={{user,setUser}}>
          {children}
        </UserContext.Provider>
     )
}

export default UserContextProvider