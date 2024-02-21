



import { createContext } from "react";
import { useState } from "react";


 export const UserdataContext=createContext(null);





  export const UserdataProvider=(props)=>{

    const [accdata,setaccdata]=useState("")

      return (

         <UserdataContext.Provider value={{accdata,setaccdata}} >

             { props.children }
 
         </UserdataContext.Provider>
         
      )
}